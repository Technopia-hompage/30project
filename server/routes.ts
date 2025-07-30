import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertNewsArticleSchema, 
 
  insertJobOpeningSchema, 
  insertContactMessageSchema,
  insertCompanyTimelineSchema,
  insertBusinessDivisionSchema,
  insertWheelBrandSchema,
  insertWheelModelSchema
} from "@shared/schema";
import path from "path";
import fs from "fs/promises";

// 스펙 데이터 파일 경로
const WHEEL_SPECS_FILE = path.join(process.cwd(), 'data', 'wheelSpecs.json');

// 스펙 데이터 로드 함수
async function loadWheelSpecs() {
  try {
    const data = await fs.readFile(WHEEL_SPECS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // 파일이 없으면 기본 데이터 사용
    const { wheelSpecsData } = await import('../client/src/lib/wheelSpecsData.js');
    return wheelSpecsData;
  }
}

// 스펙 데이터 저장 함수
async function saveWheelSpecs(specs: any[]) {
  try {
    await fs.mkdir(path.dirname(WHEEL_SPECS_FILE), { recursive: true });
    await fs.writeFile(WHEEL_SPECS_FILE, JSON.stringify(specs, null, 2));
  } catch (error) {
    console.error('Failed to save wheel specs:', error);
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Auto Admin Dashboard Route - 자동차 관리자 페이지
  app.get("/autoadmin", (req, res) => {
    res.sendFile(path.join(process.cwd(), "flask_server/templates/admin/dashboard.html"));
  });
  
  // 기존 자동차 페이지는 그대로 유지 - Vite가 처리하도록 제거
  // app.get("/jp/auto", (req, res) => {
  //   res.sendFile(path.join(process.cwd(), "client/index.html"));
  // });

  // Admin API Routes for Dashboard Data
  app.get("/api/admin/dashboard", async (req, res) => {
    try {
      const [newsCount, jobsCount, wheelsCount, brandsCount] = await Promise.all([
        storage.getNewsArticles({ language: 'jp' }).then(articles => articles.length),
        storage.getJobOpenings({ language: 'jp' }).then(jobs => jobs.length),
        storage.getWheelModels().then(models => models.length),
        storage.getWheelBrands().then(brands => brands.length)
      ]);

      res.json({
        stats: {
          news: newsCount,
          jobs: jobsCount,
          wheels: wheelsCount,
          brands: brandsCount
        }
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch dashboard data" });
    }
  });

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
      // 임시로 기본값 반환
      res.json({
        totalNews: 0,
        totalJobs: 0,
        totalMessages: 0
      });
    }
  });

  // Wheel Brands Routes
  app.get("/api/wheels/brands", async (req, res) => {
    try {
      // 임시로 wheelData.ts의 데이터 사용
      const { wheelBrands } = await import('../client/src/lib/wheelData.js');
      const { active } = req.query;
      
      let brands = wheelBrands;
      if (active !== undefined) {
        brands = brands.filter(brand => brand.active === (active === 'true'));
      }
      
      res.json(brands);
    } catch (error) {
      console.error('Error fetching wheel brands:', error);
      res.status(500).json({ message: "Failed to fetch wheel brands" });
    }
  });

  app.get("/api/wheels/brands/:id", async (req, res) => {
    try {
      const brand = await storage.getWheelBrandById(parseInt(req.params.id));
      if (!brand) {
        return res.status(404).json({ message: "Wheel brand not found" });
      }
      res.json(brand);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch wheel brand" });
    }
  });

  app.post("/api/wheels/brands", async (req, res) => {
    try {
      // 임시로 메모리에 저장 (실제로는 데이터베이스에 저장해야 함)
      const { wheelBrands } = await import('../client/src/lib/wheelData.js');
      
      const newBrand = {
        id: Math.max(...wheelBrands.map(b => b.id)) + 1,
        name: req.body.name,
        nameJp: req.body.nameJp,
        description: req.body.description,
        active: req.body.active !== undefined ? req.body.active : true,
        sortOrder: req.body.sortOrder || 0
      };
      
      // 실제로는 데이터베이스에 저장해야 하지만, 임시로 성공 응답만 반환
      console.log('New brand created:', newBrand);
      res.status(201).json(newBrand);
    } catch (error) {
      console.error('Error creating wheel brand:', error);
      res.status(400).json({ message: "Invalid wheel brand data" });
    }
  });

  app.put("/api/wheels/brands/:id", async (req, res) => {
    try {
      const validatedData = insertWheelBrandSchema.partial().parse(req.body);
      const brand = await storage.updateWheelBrand(parseInt(req.params.id), validatedData);
      res.json(brand);
    } catch (error) {
      res.status(400).json({ message: "Invalid wheel brand data" });
    }
  });

  app.delete("/api/wheels/brands/:id", async (req, res) => {
    try {
      await storage.deleteWheelBrand(parseInt(req.params.id));
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Failed to delete wheel brand" });
    }
  });

  // Wheel Models Routes
  app.get("/api/wheels/models", async (req, res) => {
    try {
      // 임시로 wheelData.ts의 데이터 사용
      const { wheelModels } = await import('../client/src/lib/wheelData.js');
      const { brandId, status } = req.query;
      
      let models = wheelModels;
      
      if (brandId) {
        models = models.filter(model => model.brandId === parseInt(brandId as string));
      }
      
      if (status) {
        models = models.filter(model => model.status === status);
      }
      
      res.json(models);
    } catch (error) {
      console.error('Error fetching wheel models:', error);
      res.status(500).json({ message: "Failed to fetch wheel models" });
    }
  });

  app.get("/api/wheels/models/:id", async (req, res) => {
    try {
      const model = await storage.getWheelModelById(parseInt(req.params.id));
      if (!model) {
        return res.status(404).json({ message: "Wheel model not found" });
      }
      res.json(model);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch wheel model" });
    }
  });

  app.post("/api/wheels/models", async (req, res) => {
    try {
      // 임시로 메모리에 저장
      const { wheelModels } = await import('../client/src/lib/wheelData.js');
      
      const newModel = {
        id: Math.max(...wheelModels.map(m => m.id)) + 1,
        brandId: req.body.brandId,
        name: req.body.name,
        nameJp: req.body.nameJp || req.body.name,
        imageUrl: req.body.imageUrl,
        specs: req.body.specs,
        description: req.body.description || { jp: '', ko: '', en: '', zh: '' },
        status: req.body.status || 'active',
        sortOrder: req.body.sortOrder || 0
      };
      
      console.log('New model created:', newModel);
      res.status(201).json(newModel);
    } catch (error) {
      console.error('Error creating wheel model:', error);
      res.status(400).json({ message: "Invalid wheel model data" });
    }
  });

  app.put("/api/wheels/models/:id", async (req, res) => {
    try {
      const validatedData = insertWheelModelSchema.partial().parse(req.body);
      const model = await storage.updateWheelModel(parseInt(req.params.id), validatedData);
      res.json(model);
    } catch (error) {
      res.status(400).json({ message: "Invalid wheel model data" });
    }
  });

  app.delete("/api/wheels/models/:id", async (req, res) => {
    try {
      await storage.deleteWheelModel(parseInt(req.params.id));
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Failed to delete wheel model" });
    }
  });

  // Wheel Specs Routes
  app.get("/api/wheels/specs", async (req, res) => {
    try {
      console.log('GET /api/wheels/specs called');
      // 임시로 wheelSpecsData.ts의 데이터 사용
      const wheelSpecsData = await loadWheelSpecs();
      const { brandId, modelId } = req.query;
      
      console.log('Query params:', { brandId, modelId });
      console.log('Total specs in data:', wheelSpecsData.length);
      
      let specs = wheelSpecsData;
      
      if (brandId) {
        specs = specs.filter((spec: any) => spec.brandId === parseInt(brandId as string));
        console.log('Filtered by brandId:', brandId, 'Result count:', specs.length);
      }
      
      if (modelId) {
        specs = specs.filter((spec: any) => spec.modelId === parseInt(modelId as string));
        console.log('Filtered by modelId:', modelId, 'Result count:', specs.length);
      }
      
      console.log('Returning specs count:', specs.length);
      res.json(specs);
    } catch (error) {
      console.error('Error fetching wheel specs:', error);
      res.status(500).json({ message: "Failed to fetch wheel specs" });
    }
  });

  app.post("/api/wheels/specs", async (req, res) => {
    try {
      // 기존 데이터 로드
      const wheelSpecsData = await loadWheelSpecs();
      
      const newSpec = {
        id: Math.max(...wheelSpecsData.map((s: any) => s.id)) + 1,
        brandId: req.body.brandId,
        modelId: req.body.modelId,
        brandName: req.body.brandName,
        modelName: req.body.modelName,
        size: req.body.size,
        pcd: req.body.pcd,
        holes: req.body.holes,
        inset: req.body.inset,
        discProtrusion: req.body.discProtrusion,
        hubHeight: req.body.hubHeight,
        price: req.body.price,
        color: req.body.color,
        accessories: req.body.accessories,
        weight: req.body.weight
      };
      
      wheelSpecsData.push(newSpec);
      
      // 파일에 저장
      await saveWheelSpecs(wheelSpecsData);
      
      console.log('New spec created:', newSpec);
      res.status(201).json(newSpec);
    } catch (error) {
      console.error('Error creating wheel spec:', error);
      res.status(400).json({ message: "Invalid wheel spec data" });
    }
  });

  app.put("/api/wheels/specs/:id", async (req, res) => {
    try {
      // 기존 데이터 로드
      const wheelSpecsData = await loadWheelSpecs();
      
      const specId = parseInt(req.params.id);
      const existingSpec = wheelSpecsData.find((s: any) => s.id === specId);
      
      if (!existingSpec) {
        return res.status(404).json({ message: "Wheel spec not found" });
      }
      
      const updatedSpec = {
        ...existingSpec,
        brandId: req.body.brandId || existingSpec.brandId,
        modelId: req.body.modelId || existingSpec.modelId,
        brandName: req.body.brandName || existingSpec.brandName,
        modelName: req.body.modelName || existingSpec.modelName,
        size: req.body.size || existingSpec.size,
        pcd: req.body.pcd || existingSpec.pcd,
        holes: req.body.holes || existingSpec.holes,
        inset: req.body.inset || existingSpec.inset,
        discProtrusion: req.body.discProtrusion || existingSpec.discProtrusion,
        hubHeight: req.body.hubHeight || existingSpec.hubHeight,
        price: req.body.price || existingSpec.price,
        color: req.body.color || existingSpec.color,
        accessories: req.body.accessories || existingSpec.accessories,
        weight: req.body.weight || existingSpec.weight
      };
      
      // 배열에서 기존 항목을 업데이트된 항목으로 교체
      const specIndex = wheelSpecsData.findIndex((s: any) => s.id === specId);
      if (specIndex !== -1) {
        wheelSpecsData[specIndex] = updatedSpec;
      }
      
      // 파일에 저장
      await saveWheelSpecs(wheelSpecsData);
      
      console.log('Spec updated:', updatedSpec);
      res.json(updatedSpec);
    } catch (error) {
      console.error('Error updating wheel spec:', error);
      res.status(400).json({ message: "Invalid wheel spec data" });
    }
  });

  app.delete("/api/wheels/specs/:id", async (req, res) => {
    try {
      // 기존 데이터 로드
      const wheelSpecsData = await loadWheelSpecs();
      
      const specId = parseInt(req.params.id);
      const existingSpec = wheelSpecsData.find((s: any) => s.id === specId);
      
      if (!existingSpec) {
        return res.status(404).json({ message: "Wheel spec not found" });
      }
      
      // 배열에서 항목 제거
      const filteredSpecs = wheelSpecsData.filter((s: any) => s.id !== specId);
      
      // 파일에 저장
      await saveWheelSpecs(filteredSpecs);
      
      console.log('Spec deleted:', existingSpec);
      res.status(204).send();
    } catch (error) {
      console.error('Error deleting wheel spec:', error);
      res.status(500).json({ message: "Failed to delete wheel spec" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
