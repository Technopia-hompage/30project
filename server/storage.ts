import { 
  users, 
  newsArticles, 
  jobOpenings, 
  contactMessages, 
  companyTimeline,
  businessDivisions,
  wheelBrands,
  wheelModels,
  wheelSpecs,
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
  type InsertBusinessDivision,
  type WheelBrand,
  type InsertWheelBrand,
  type WheelModel,
  type InsertWheelModel,
  type WheelSpec,
  type InsertWheelSpec
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, and, or, like, count } from "drizzle-orm";

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
  getAllNewsArticles(): NewsArticle[];
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

  // Wheel methods
  getWheelBrands(active?: boolean): Promise<WheelBrand[]>;
  getWheelBrandById(id: number): Promise<WheelBrand | undefined>;
  createWheelBrand(brand: InsertWheelBrand): Promise<WheelBrand>;
  updateWheelBrand(id: number, brand: Partial<InsertWheelBrand>): Promise<WheelBrand>;
  deleteWheelBrand(id: number): Promise<void>;

  getWheelModels(brandId?: number, status?: string): Promise<WheelModel[]>;
  getWheelModelById(id: number): Promise<WheelModel | undefined>;
  createWheelModel(model: InsertWheelModel): Promise<WheelModel>;
  updateWheelModel(id: number, model: Partial<InsertWheelModel>): Promise<WheelModel>;
  deleteWheelModel(id: number): Promise<void>;

  getWheelSpecs(modelId?: number, brandId?: number): Promise<WheelSpec[]>;
  getWheelSpecById(id: number): Promise<WheelSpec | undefined>;
  createWheelSpec(spec: InsertWheelSpec): Promise<WheelSpec>;
  updateWheelSpec(id: number, spec: Partial<InsertWheelSpec>): Promise<WheelSpec>;
  deleteWheelSpec(id: number): Promise<void>;

  // Statistics
  getWebsiteStats(): Promise<{
    totalNews: number;
    totalJobs: number;
    totalMessages: number;
  }>;
}

export class DatabaseStorage implements IStorage {
  private memStorage: MemStorage;

  constructor() {
    this.memStorage = new MemStorage();
  }

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
    const conditions = [];
    
    if (filters?.published !== undefined) {
      conditions.push(eq(newsArticles.published, filters.published));
    } else {
      conditions.push(eq(newsArticles.published, true));
    }

    if (filters?.category) {
      conditions.push(eq(newsArticles.category, filters.category));
    }

    if (conditions.length > 0 && filters?.limit) {
      return await db.select().from(newsArticles)
        .where(and(...conditions))
        .orderBy(desc(newsArticles.publishedAt))
        .limit(filters.limit);
    } else if (conditions.length > 0) {
      return await db.select().from(newsArticles)
        .where(and(...conditions))
        .orderBy(desc(newsArticles.publishedAt));
    } else if (filters?.limit) {
      return await db.select().from(newsArticles)
        .orderBy(desc(newsArticles.publishedAt))
        .limit(filters.limit);
    }

    return await db.select().from(newsArticles)
      .orderBy(desc(newsArticles.publishedAt));
  }

  async getNewsArticleById(id: number, language?: string): Promise<NewsArticle | undefined> {
    const [article] = await db
      .select()
      .from(newsArticles)
      .where(and(eq(newsArticles.id, id), eq(newsArticles.published, true)));
    return article || undefined;
  }

  async createNewsArticle(article: InsertNewsArticle): Promise<NewsArticle> {
    try {
      // 데이터베이스에 저장 시도
      const [newArticle] = await db
        .insert(newsArticles)
        .values(article)
        .returning();
      return newArticle;
    } catch (error) {
      // 데이터베이스 저장 실패 시 메모리 스토리지에 저장
      console.log('Database save failed, using memory storage:', error);
      return await this.memStorage.createNewsArticle(article);
    }
  }



  async getJobOpenings(filters?: {
    language?: string;
    department?: string;
    location?: string;
    type?: string;
    active?: boolean;
  }): Promise<JobOpening[]> {
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
      return await db.select().from(jobOpenings)
        .where(and(...conditions))
        .orderBy(desc(jobOpenings.createdAt));
    }

    return await db.select().from(jobOpenings)
      .orderBy(desc(jobOpenings.createdAt));
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
    if (status) {
      return await db.select().from(contactMessages)
        .where(eq(contactMessages.status, status))
        .orderBy(desc(contactMessages.createdAt));
    }

    return await db.select().from(contactMessages)
      .orderBy(desc(contactMessages.createdAt));
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
    const [newsCount] = await db.select({ count: count() }).from(newsArticles);
    const [jobsCount] = await db.select({ count: count() }).from(jobOpenings);
    const [messagesCount] = await db.select({ count: count() }).from(contactMessages);

    return {
      totalNews: newsCount?.count || 0,
      totalJobs: jobsCount?.count || 0,
      totalMessages: messagesCount?.count || 0,
    };
  }

  // Wheel Brand methods
  async getWheelBrands(active?: boolean): Promise<WheelBrand[]> {
    if (active !== undefined) {
      return await db.select().from(wheelBrands)
        .where(eq(wheelBrands.active, active))
        .orderBy(wheelBrands.sortOrder, wheelBrands.name);
    }
    
    return await db.select().from(wheelBrands)
      .orderBy(wheelBrands.sortOrder, wheelBrands.name);
  }

  async getWheelBrandById(id: number): Promise<WheelBrand | undefined> {
    const [brand] = await db
      .select()
      .from(wheelBrands)
      .where(eq(wheelBrands.id, id));
    return brand || undefined;
  }

  async createWheelBrand(brand: InsertWheelBrand): Promise<WheelBrand> {
    const [newBrand] = await db
      .insert(wheelBrands)
      .values(brand)
      .returning();
    return newBrand;
  }

  async updateWheelBrand(id: number, brand: Partial<InsertWheelBrand>): Promise<WheelBrand> {
    const [updatedBrand] = await db
      .update(wheelBrands)
      .set({ ...brand, updatedAt: new Date() })
      .where(eq(wheelBrands.id, id))
      .returning();
    return updatedBrand;
  }

  async deleteWheelBrand(id: number): Promise<void> {
    await db.delete(wheelBrands).where(eq(wheelBrands.id, id));
  }

  // Wheel Model methods
  async getWheelModels(brandId?: number, status?: string): Promise<WheelModel[]> {
    const conditions = [];

    if (brandId) {
      conditions.push(eq(wheelModels.brandId, brandId));
    }

    if (status) {
      conditions.push(eq(wheelModels.status, status));
    }

    if (conditions.length > 0) {
      return await db.select().from(wheelModels)
        .where(and(...conditions))
        .orderBy(wheelModels.sortOrder, wheelModels.name);
    }

    return await db.select().from(wheelModels)
      .orderBy(wheelModels.sortOrder, wheelModels.name);
  }

  async getWheelModelById(id: number): Promise<WheelModel | undefined> {
    const [model] = await db
      .select()
      .from(wheelModels)
      .where(eq(wheelModels.id, id));
    return model || undefined;
  }

  async createWheelModel(model: InsertWheelModel): Promise<WheelModel> {
    const [newModel] = await db
      .insert(wheelModels)
      .values(model)
      .returning();
    return newModel;
  }

  async updateWheelModel(id: number, model: Partial<InsertWheelModel>): Promise<WheelModel> {
    const [updatedModel] = await db
      .update(wheelModels)
      .set({ ...model, updatedAt: new Date() })
      .where(eq(wheelModels.id, id))
      .returning();
    return updatedModel;
  }

  async deleteWheelModel(id: number): Promise<void> {
    await db.delete(wheelModels).where(eq(wheelModels.id, id));
  }

  // Wheel Spec methods
  async getWheelSpecs(modelId?: number, brandId?: number): Promise<WheelSpec[]> {
    const conditions = [];

    if (modelId) {
      conditions.push(eq(wheelSpecs.modelId, modelId));
    }

    if (brandId) {
      conditions.push(eq(wheelSpecs.brandId, brandId));
    }

    if (conditions.length > 0) {
      return await db.select().from(wheelSpecs)
        .where(and(...conditions))
        .orderBy(wheelSpecs.id);
    }

    return await db.select().from(wheelSpecs).orderBy(wheelSpecs.id);
  }

  async getWheelSpecById(id: number): Promise<WheelSpec | undefined> {
    const [spec] = await db
      .select()
      .from(wheelSpecs)
      .where(eq(wheelSpecs.id, id));
    return spec || undefined;
  }

  async createWheelSpec(spec: InsertWheelSpec): Promise<WheelSpec> {
    const [newSpec] = await db
      .insert(wheelSpecs)
      .values(spec)
      .returning();
    return newSpec;
  }

  async updateWheelSpec(id: number, spec: Partial<InsertWheelSpec>): Promise<WheelSpec> {
    const [updatedSpec] = await db
      .update(wheelSpecs)
      .set({ ...spec, updatedAt: new Date() })
      .where(eq(wheelSpecs.id, id))
      .returning();
    return updatedSpec;
  }

  async deleteWheelSpec(id: number): Promise<void> {
    await db.delete(wheelSpecs).where(eq(wheelSpecs.id, id));
  }

  getAllNewsArticles(): NewsArticle[] {
    // 동기적으로 데이터베이스에서 조회할 수 없으므로, 
    // 기본 뉴스 데이터와 메모리 스토리지의 추가 뉴스를 합쳐서 반환
    const { newsData } = require('../shared/newsData');
    const memArticles = this.memStorage.getAllNewsArticles();
    
    // 기본 데이터와 메모리 데이터를 합치되, 중복 제거 (ID 기준)
    const allArticles = [...newsData];
    const existingIds = new Set(newsData.map(article => article.id));
    
    // 메모리에만 있는 새로운 뉴스 추가
    memArticles.forEach(article => {
      if (!existingIds.has(article.id)) {
        allArticles.push(article);
      }
    });
    
    return allArticles;
  }
}

// 임시 메모리 스토리지 추가
class MemStorage implements IStorage {
  private newsArticles: NewsArticle[] = [];
  private users: User[] = [];
  private jobOpenings: JobOpening[] = [];
  private contactMessages: ContactMessage[] = [];
  private companyTimeline: CompanyTimelineEvent[] = [];
  private businessDivisions: BusinessDivision[] = [];
  private wheelBrands: WheelBrand[] = [];
  private wheelModels: WheelModel[] = [];
  private wheelSpecs: WheelSpec[] = [];
  private nextNewsId = 1;

  constructor() {
    // 기본 뉴스 데이터를 메모리에 로드
    this.loadDefaultNewsData();
  }

  private async loadDefaultNewsData() {
    try {
      const { newsData } = await import('../shared/newsData');
      // 기본 데이터의 ID와 충돌하지 않도록 nextNewsId 설정
      this.nextNewsId = Math.max(...newsData.map(article => article.id)) + 1;
      // 기본 뉴스 데이터를 메모리에 추가
      this.newsArticles.push(...newsData);
    } catch (error) {
      console.error('Failed to load default news data:', error);
    }
  }

  // News methods
  async getNewsArticles(filters?: any): Promise<NewsArticle[]> {
    return this.newsArticles.filter(article => {
      if (filters?.published !== undefined && article.published !== filters.published) {
        return false;
      }
      if (filters?.category && article.category !== filters.category) {
        return false;
      }
      return true;
    });
  }

  getAllNewsArticles(): NewsArticle[] {
    return this.newsArticles;
  }

  async getNewsArticleById(id: number): Promise<NewsArticle | undefined> {
    return this.newsArticles.find(article => article.id === id);
  }

  async createNewsArticle(article: InsertNewsArticle): Promise<NewsArticle> {
    const newArticle: NewsArticle = {
      ...article,
      id: this.nextNewsId++,
      category: article.category || 'general',
      published: article.published || false,
      excerpt: article.excerpt || null,
      createdAt: new Date(),
      updatedAt: new Date(),
      publishedAt: article.published ? new Date() : null
    };
    this.newsArticles.push(newArticle);
    return newArticle;
  }

  // 다른 메소드들은 임시로 빈 구현
  async getUser(id: number): Promise<User | undefined> { return undefined; }
  async getUserByUsername(username: string): Promise<User | undefined> { return undefined; }
  async createUser(user: InsertUser): Promise<User> { throw new Error('Not implemented'); }
  
  async getJobOpenings(filters?: { language?: string; department?: string; location?: string; type?: string; active?: boolean; }): Promise<JobOpening[]> { return []; }
  async getJobOpeningById(id: number, language?: string): Promise<JobOpening | undefined> { return undefined; }
  async createJobOpening(job: InsertJobOpening): Promise<JobOpening> { throw new Error('Not implemented'); }
  
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> { throw new Error('Not implemented'); }
  async getContactMessages(status?: string): Promise<ContactMessage[]> { return []; }
  
  async getCompanyTimeline(language?: string): Promise<CompanyTimelineEvent[]> { return []; }
  async createTimelineEvent(event: InsertCompanyTimelineEvent): Promise<CompanyTimelineEvent> { throw new Error('Not implemented'); }
  
  async getBusinessDivisions(language?: string): Promise<BusinessDivision[]> { return []; }
  async createBusinessDivision(division: InsertBusinessDivision): Promise<BusinessDivision> { throw new Error('Not implemented'); }
  
  async getWheelBrands(active?: boolean): Promise<WheelBrand[]> { return []; }
  async getWheelBrandById(id: number): Promise<WheelBrand | undefined> { return undefined; }
  async createWheelBrand(brand: InsertWheelBrand): Promise<WheelBrand> { throw new Error('Not implemented'); }
  async updateWheelBrand(id: number, brand: Partial<InsertWheelBrand>): Promise<WheelBrand> { throw new Error('Not implemented'); }
  async deleteWheelBrand(id: number): Promise<void> {}
  
  async getWheelModels(brandId?: number, status?: string): Promise<WheelModel[]> { return []; }
  async getWheelModelById(id: number): Promise<WheelModel | undefined> { return undefined; }
  async createWheelModel(model: InsertWheelModel): Promise<WheelModel> { throw new Error('Not implemented'); }
  async updateWheelModel(id: number, model: Partial<InsertWheelModel>): Promise<WheelModel> { throw new Error('Not implemented'); }
  async deleteWheelModel(id: number): Promise<void> {}
  
  async getWheelSpecs(modelId?: number, brandId?: number): Promise<WheelSpec[]> { return []; }
  async getWheelSpecById(id: number): Promise<WheelSpec | undefined> { return undefined; }
  async createWheelSpec(spec: InsertWheelSpec): Promise<WheelSpec> { throw new Error('Not implemented'); }
  async updateWheelSpec(id: number, spec: Partial<InsertWheelSpec>): Promise<WheelSpec> { throw new Error('Not implemented'); }
  async deleteWheelSpec(id: number): Promise<void> {}
  
  async getWebsiteStats(): Promise<{ totalNews: number; totalJobs: number; totalMessages: number; }> {
    return { totalNews: this.newsArticles.length, totalJobs: 0, totalMessages: 0 };
  }
}

// 임시로 메모리 스토리지 사용
export const storage = new MemStorage();
