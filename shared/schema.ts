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

export const galleryImages = pgTable("gallery_images", {
  id: serial("id").primaryKey(),
  title: jsonb("title").notNull(), // Multi-language titles
  imageUrl: text("image_url").notNull(),
  category: text("category").notNull().default("general"),
  featured: boolean("featured").notNull().default(false),
  sortOrder: integer("sort_order").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Wheel Brands and Models
export const wheelBrands = pgTable("wheel_brands", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  nameJp: text("name_jp").notNull(),
  description: jsonb("description").notNull(), // Multi-language descriptions
  sortOrder: integer("sort_order").notNull().default(0),
  active: boolean("active").notNull().default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const wheelModels = pgTable("wheel_models", {
  id: serial("id").primaryKey(),
  brandId: integer("brand_id").notNull().references(() => wheelBrands.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  nameJp: text("name_jp").notNull(),
  imageUrl: text("image_url").notNull(),
  specs: jsonb("specs").notNull(), // Multi-language specs
  description: jsonb("description").notNull(), // Multi-language descriptions
  status: text("status").notNull().default("active"), // active, inactive
  sortOrder: integer("sort_order").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const wheelSpecs = pgTable("wheel_specs", {
  id: serial("id").primaryKey(),
  modelId: integer("model_id").notNull().references(() => wheelModels.id, { onDelete: "cascade" }),
  brandId: integer("brand_id").notNull().references(() => wheelBrands.id, { onDelete: "cascade" }),
  modelName: text("model_name").notNull(),
  size: text("size").notNull(),
  pcd: text("pcd").notNull(),
  holes: text("holes").notNull(),
  inset: text("inset").notNull(),
  discProtrusion: text("disc_protrusion"),
  hubHeight: text("hub_height").notNull(),
  price: integer("price").notNull(),
  color: text("color").notNull(),
  accessories: text("accessories"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Relations
export const newsArticlesRelations = relations(newsArticles, ({ many }) => ({
  // Add relations if needed
}));



export const jobOpeningsRelations = relations(jobOpenings, ({ many }) => ({
  // Add relations if needed
}));

export const wheelBrandsRelations = relations(wheelBrands, ({ many }) => ({
  models: many(wheelModels),
}));

export const wheelModelsRelations = relations(wheelModels, ({ one, many }) => ({
  brand: one(wheelBrands, {
    fields: [wheelModels.brandId],
    references: [wheelBrands.id],
  }),
  specs: many(wheelSpecs),
}));

export const wheelSpecsRelations = relations(wheelSpecs, ({ one }) => ({
  model: one(wheelModels, {
    fields: [wheelSpecs.modelId],
    references: [wheelModels.id],
  }),
  brand: one(wheelBrands, {
    fields: [wheelSpecs.brandId],
    references: [wheelBrands.id],
  }),
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

export const insertGalleryImageSchema = createInsertSchema(galleryImages).omit({
  id: true,
  createdAt: true,
});

export const insertWheelBrandSchema = createInsertSchema(wheelBrands).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertWheelModelSchema = createInsertSchema(wheelModels).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertWheelSpecSchema = createInsertSchema(wheelSpecs).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
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

export type GalleryImage = typeof galleryImages.$inferSelect;
export type InsertGalleryImage = z.infer<typeof insertGalleryImageSchema>;

export type WheelBrand = typeof wheelBrands.$inferSelect;
export type InsertWheelBrand = z.infer<typeof insertWheelBrandSchema>;

export type WheelModel = typeof wheelModels.$inferSelect;
export type InsertWheelModel = z.infer<typeof insertWheelModelSchema>;

export type WheelSpec = typeof wheelSpecs.$inferSelect;
export type InsertWheelSpec = z.infer<typeof insertWheelSpecSchema>;
