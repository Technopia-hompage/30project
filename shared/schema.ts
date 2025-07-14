import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  role: text("role").notNull().default("user"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const newsArticles = pgTable("news_articles", {
  id: serial("id").primaryKey(),
  title: jsonb("title").notNull(), // Multi-language titles
  content: jsonb("content").notNull(), // Multi-language content
  excerpt: jsonb("excerpt"), // Multi-language excerpts
  category: text("category").notNull().default("general"),
  published: boolean("published").notNull().default(false),
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});



export const jobOpenings = pgTable("job_openings", {
  id: serial("id").primaryKey(),
  title: jsonb("title").notNull(), // Multi-language titles
  description: jsonb("description").notNull(), // Multi-language descriptions
  requirements: jsonb("requirements"), // Multi-language requirements
  location: text("location").notNull(),
  type: text("type").notNull().default("full-time"), // full-time, part-time, contract
  department: text("department").notNull(),
  experience: text("experience").notNull(),
  active: boolean("active").notNull().default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  category: text("category").notNull(),
  message: text("message").notNull(),
  status: text("status").notNull().default("new"), // new, read, replied
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const companyTimeline = pgTable("company_timeline", {
  id: serial("id").primaryKey(),
  year: integer("year").notNull(),
  title: jsonb("title").notNull(), // Multi-language titles
  description: jsonb("description").notNull(), // Multi-language descriptions
  imageUrl: text("image_url"),
  featured: boolean("featured").notNull().default(false),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const businessDivisions = pgTable("business_divisions", {
  id: serial("id").primaryKey(),
  name: jsonb("name").notNull(), // Multi-language names
  description: jsonb("description").notNull(), // Multi-language descriptions
  icon: text("icon").notNull(),
  color: text("color").notNull(),
  featured: boolean("featured").notNull().default(false),
  sortOrder: integer("sort_order").notNull().default(0),
});

// Relations
export const newsArticlesRelations = relations(newsArticles, ({ many }) => ({
  // Add relations if needed
}));



export const jobOpeningsRelations = relations(jobOpenings, ({ many }) => ({
  // Add relations if needed
}));

// Insert schemas
export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
});

export const insertNewsArticleSchema = createInsertSchema(newsArticles).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});



export const insertJobOpeningSchema = createInsertSchema(jobOpenings).omit({
  id: true,
  createdAt: true,
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  createdAt: true,
});

export const insertCompanyTimelineSchema = createInsertSchema(companyTimeline).omit({
  id: true,
});

export const insertBusinessDivisionSchema = createInsertSchema(businessDivisions).omit({
  id: true,
});

// Types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type NewsArticle = typeof newsArticles.$inferSelect;
export type InsertNewsArticle = z.infer<typeof insertNewsArticleSchema>;



export type JobOpening = typeof jobOpenings.$inferSelect;
export type InsertJobOpening = z.infer<typeof insertJobOpeningSchema>;

export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;

export type CompanyTimelineEvent = typeof companyTimeline.$inferSelect;
export type InsertCompanyTimelineEvent = z.infer<typeof insertCompanyTimelineSchema>;

export type BusinessDivision = typeof businessDivisions.$inferSelect;
export type InsertBusinessDivision = z.infer<typeof insertBusinessDivisionSchema>;
