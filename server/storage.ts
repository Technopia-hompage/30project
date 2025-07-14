import { 
  users, 
  newsArticles, 
  jobOpenings, 
  contactMessages, 
  companyTimeline,
  businessDivisions,
  type User, 
  type InsertUser,
  type NewsArticle,
  type InsertNewsArticle,
  type JobOpening,
  type InsertJobOpening,
  type ContactMessage,
  type InsertContactMessage,
  type CompanyTimelineEvent,
  type InsertCompanyTimelineEvent,
  type BusinessDivision,
  type InsertBusinessDivision
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, and, or, like } from "drizzle-orm";

// Enhanced storage interface with all CRUD methods
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // News methods
  getNewsArticles(filters?: { 
    language?: string; 
    category?: string; 
    limit?: number; 
    published?: boolean;
  }): Promise<NewsArticle[]>;
  getNewsArticleById(id: number, language?: string): Promise<NewsArticle | undefined>;
  createNewsArticle(article: InsertNewsArticle): Promise<NewsArticle>;



  // Job methods
  getJobOpenings(filters?: {
    language?: string;
    department?: string;
    location?: string;
    type?: string;
    active?: boolean;
  }): Promise<JobOpening[]>;
  getJobOpeningById(id: number, language?: string): Promise<JobOpening | undefined>;
  createJobOpening(job: InsertJobOpening): Promise<JobOpening>;

  // Contact methods
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(status?: string): Promise<ContactMessage[]>;

  // Timeline methods
  getCompanyTimeline(language?: string): Promise<CompanyTimelineEvent[]>;
  createTimelineEvent(event: InsertCompanyTimelineEvent): Promise<CompanyTimelineEvent>;

  // Business division methods
  getBusinessDivisions(language?: string): Promise<BusinessDivision[]>;
  createBusinessDivision(division: InsertBusinessDivision): Promise<BusinessDivision>;

  // Statistics
  getWebsiteStats(): Promise<{
    totalNews: number;
    totalJobs: number;
    totalMessages: number;
  }>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async getNewsArticles(filters?: { 
    language?: string; 
    category?: string; 
    limit?: number; 
    published?: boolean;
  }): Promise<NewsArticle[]> {
    let query = db.select().from(newsArticles);

    const conditions = [];
    
    if (filters?.published !== undefined) {
      conditions.push(eq(newsArticles.published, filters.published));
    } else {
      conditions.push(eq(newsArticles.published, true));
    }

    if (filters?.category) {
      conditions.push(eq(newsArticles.category, filters.category));
    }

    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    query = query.orderBy(desc(newsArticles.publishedAt));

    if (filters?.limit) {
      query = query.limit(filters.limit);
    }

    return await query;
  }

  async getNewsArticleById(id: number, language?: string): Promise<NewsArticle | undefined> {
    const [article] = await db
      .select()
      .from(newsArticles)
      .where(and(eq(newsArticles.id, id), eq(newsArticles.published, true)));
    return article || undefined;
  }

  async createNewsArticle(article: InsertNewsArticle): Promise<NewsArticle> {
    const [newArticle] = await db
      .insert(newsArticles)
      .values(article)
      .returning();
    return newArticle;
  }



  async getJobOpenings(filters?: {
    language?: string;
    department?: string;
    location?: string;
    type?: string;
    active?: boolean;
  }): Promise<JobOpening[]> {
    let query = db.select().from(jobOpenings);

    const conditions = [];

    if (filters?.active !== undefined) {
      conditions.push(eq(jobOpenings.active, filters.active));
    } else {
      conditions.push(eq(jobOpenings.active, true));
    }

    if (filters?.department) {
      conditions.push(eq(jobOpenings.department, filters.department));
    }

    if (filters?.location) {
      conditions.push(like(jobOpenings.location, `%${filters.location}%`));
    }

    if (filters?.type) {
      conditions.push(eq(jobOpenings.type, filters.type));
    }

    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    query = query.orderBy(desc(jobOpenings.createdAt));

    return await query;
  }

  async getJobOpeningById(id: number, language?: string): Promise<JobOpening | undefined> {
    const [job] = await db
      .select()
      .from(jobOpenings)
      .where(and(eq(jobOpenings.id, id), eq(jobOpenings.active, true)));
    return job || undefined;
  }

  async createJobOpening(job: InsertJobOpening): Promise<JobOpening> {
    const [newJob] = await db
      .insert(jobOpenings)
      .values(job)
      .returning();
    return newJob;
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [newMessage] = await db
      .insert(contactMessages)
      .values(message)
      .returning();
    return newMessage;
  }

  async getContactMessages(status?: string): Promise<ContactMessage[]> {
    let query = db.select().from(contactMessages);

    if (status) {
      query = query.where(eq(contactMessages.status, status));
    }

    query = query.orderBy(desc(contactMessages.createdAt));

    return await query;
  }

  async getCompanyTimeline(language?: string): Promise<CompanyTimelineEvent[]> {
    return await db
      .select()
      .from(companyTimeline)
      .orderBy(companyTimeline.sortOrder, companyTimeline.year);
  }

  async createTimelineEvent(event: InsertCompanyTimelineEvent): Promise<CompanyTimelineEvent> {
    const [newEvent] = await db
      .insert(companyTimeline)
      .values(event)
      .returning();
    return newEvent;
  }

  async getBusinessDivisions(language?: string): Promise<BusinessDivision[]> {
    return await db
      .select()
      .from(businessDivisions)
      .orderBy(businessDivisions.sortOrder);
  }

  async createBusinessDivision(division: InsertBusinessDivision): Promise<BusinessDivision> {
    const [newDivision] = await db
      .insert(businessDivisions)
      .values(division)
      .returning();
    return newDivision;
  }

  async getWebsiteStats(): Promise<{
    totalNews: number;
    totalJobs: number;
    totalMessages: number;
  }> {
    const [newsCount] = await db.select({ count: newsArticles.id }).from(newsArticles);
    const [jobsCount] = await db.select({ count: jobOpenings.id }).from(jobOpenings);
    const [messagesCount] = await db.select({ count: contactMessages.id }).from(contactMessages);

    return {
      totalNews: newsCount?.count || 0,
      totalJobs: jobsCount?.count || 0,
      totalMessages: messagesCount?.count || 0,
    };
  }
}

export const storage = new DatabaseStorage();
