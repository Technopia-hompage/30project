import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertNewsArticleSchema, 
 
  insertJobOpeningSchema, 
  insertContactMessageSchema,
  insertCompanyTimelineSchema,
  insertBusinessDivisionSchema 
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // News Articles Routes
  app.get("/api/news", async (req, res) => {
    try {
      const { lang = 'jp', category, limit } = req.query;
      const articles = await storage.getNewsArticles({
        language: lang as string,
        category: category as string,
        limit: limit ? parseInt(limit as string) : undefined
      });
      res.json(articles);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch news articles" });
    }
  });

  app.get("/api/news/:id", async (req, res) => {
    try {
      const { lang = 'jp' } = req.query;
      const article = await storage.getNewsArticleById(parseInt(req.params.id), lang as string);
      if (!article) {
        return res.status(404).json({ message: "Article not found" });
      }
      res.json(article);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch article" });
    }
  });

  app.post("/api/news", async (req, res) => {
    try {
      const validatedData = insertNewsArticleSchema.parse(req.body);
      const article = await storage.createNewsArticle(validatedData);
      res.status(201).json(article);
    } catch (error) {
      res.status(400).json({ message: "Invalid article data" });
    }
  });



  // Job Openings Routes
  app.get("/api/jobs", async (req, res) => {
    try {
      const { lang = 'jp', department, location, type } = req.query;
      const jobs = await storage.getJobOpenings({
        language: lang as string,
        department: department as string,
        location: location as string,
        type: type as string
      });
      res.json(jobs);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch job openings" });
    }
  });

  app.get("/api/jobs/:id", async (req, res) => {
    try {
      const { lang = 'jp' } = req.query;
      const job = await storage.getJobOpeningById(parseInt(req.params.id), lang as string);
      if (!job) {
        return res.status(404).json({ message: "Job opening not found" });
      }
      res.json(job);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch job opening" });
    }
  });

  app.post("/api/jobs", async (req, res) => {
    try {
      const validatedData = insertJobOpeningSchema.parse(req.body);
      const job = await storage.createJobOpening(validatedData);
      res.status(201).json(job);
    } catch (error) {
      res.status(400).json({ message: "Invalid job data" });
    }
  });

  // Contact Messages Routes
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.status(201).json({ message: "Contact message sent successfully" });
    } catch (error) {
      res.status(400).json({ message: "Invalid contact data" });
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const { status } = req.query;
      const messages = await storage.getContactMessages(status as string);
      res.json(messages);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contact messages" });
    }
  });

  // Company Timeline Routes
  app.get("/api/timeline", async (req, res) => {
    try {
      const { lang = 'jp' } = req.query;
      const timeline = await storage.getCompanyTimeline(lang as string);
      res.json(timeline);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch company timeline" });
    }
  });

  app.post("/api/timeline", async (req, res) => {
    try {
      const validatedData = insertCompanyTimelineSchema.parse(req.body);
      const event = await storage.createTimelineEvent(validatedData);
      res.status(201).json(event);
    } catch (error) {
      res.status(400).json({ message: "Invalid timeline data" });
    }
  });

  // Business Divisions Routes
  app.get("/api/divisions", async (req, res) => {
    try {
      const { lang = 'jp' } = req.query;
      const divisions = await storage.getBusinessDivisions(lang as string);
      res.json(divisions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch business divisions" });
    }
  });

  app.post("/api/divisions", async (req, res) => {
    try {
      const validatedData = insertBusinessDivisionSchema.parse(req.body);
      const division = await storage.createBusinessDivision(validatedData);
      res.status(201).json(division);
    } catch (error) {
      res.status(400).json({ message: "Invalid division data" });
    }
  });

  // Statistics endpoint
  app.get("/api/stats", async (req, res) => {
    try {
      const stats = await storage.getWebsiteStats();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch statistics" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
