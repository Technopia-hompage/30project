# Corporate 30th Anniversary Website

## Overview

This is a comprehensive corporate website built to celebrate a company's 30th anniversary. The application is a full-stack web solution featuring a modern React frontend with TypeScript, an Express.js backend, and PostgreSQL database integration using Drizzle ORM. The site supports multi-language functionality (Japanese, Korean, English, Chinese) and includes content management capabilities for news, gallery, careers, and company information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing with multi-language support
- **State Management**: TanStack Query for server state management
- **UI Components**: Radix UI primitives with custom styling
- **Styling**: Tailwind CSS with custom corporate design system
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON responses
- **Database Integration**: Drizzle ORM for type-safe database operations
- **Session Management**: Built-in session handling for admin features

### Database Architecture
- **Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle ORM with TypeScript schema definitions
- **Migrations**: Drizzle Kit for schema management
- **Connection**: Neon serverless with WebSocket support

## Key Components

### Multi-Language Support
- **Language Provider**: React context for language state management
- **Translation System**: Structured translation objects with fallback support
- **URL Routing**: Language-prefixed routes (e.g., `/jp/about`, `/en/about`)
- **Content Management**: JSONB fields in database for multi-language content

### Content Management System
- **News Articles**: Multi-language news with categories and publishing workflow
- **Gallery**: Image management with categorization and metadata
- **Job Openings**: Career listings with application management
- **Company Timeline**: Historical events and milestones
- **Business Divisions**: Product and service categorization

### UI/UX Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Animation System**: CSS animations and transitions
- **Component Library**: Comprehensive UI components using Radix UI
- **Form Management**: React Hook Form with Zod validation
- **Toast Notifications**: User feedback system

### Page Structure
- **Home Page**: Hero section, company overview, latest news
- **About Page**: Company information, mission/vision/values
- **Anniversary Page**: 30th anniversary celebration content
- **Business Page**: Product and service divisions
- **Careers Page**: Job listings and application forms
- **Gallery Page**: Company photos and media
- **News Page**: Article listings and individual article views
- **Contact Page**: Inquiry forms and company contact information

## Data Flow

### Client-Server Communication
1. **API Requests**: Frontend uses TanStack Query for data fetching
2. **Server Response**: Express.js API endpoints return JSON responses
3. **Database Queries**: Drizzle ORM handles database operations
4. **Error Handling**: Comprehensive error handling with user-friendly messages

### Content Retrieval Flow
1. User requests page with language preference
2. Frontend determines language from URL or context
3. API call includes language parameter
4. Server queries database for multi-language content
5. Database returns JSONB content for specified language
6. Frontend renders localized content

### Form Submission Flow
1. User fills out form (contact, job application, etc.)
2. Client-side validation using React Hook Form + Zod
3. Form data sent to appropriate API endpoint
4. Server validates and stores data in database
5. Success/error response returned to client
6. User feedback displayed via toast notifications

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **Routing**: Wouter for lightweight routing
- **State Management**: TanStack Query for server state
- **Database**: Drizzle ORM, Neon Database serverless driver
- **UI Components**: Radix UI component primitives

### Development Dependencies
- **Build Tools**: Vite, ESBuild for production builds
- **TypeScript**: Full TypeScript support with strict configuration
- **Styling**: Tailwind CSS with PostCSS processing
- **Code Quality**: ESLint, Prettier (implied by structure)

### Asset Management
- **Images**: Static assets stored in `/attached_assets/`
- **Fonts**: Google Fonts (Inter) for typography
- **Icons**: Lucide React for consistent iconography

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with hot module replacement
- **Database**: Neon serverless PostgreSQL connection
- **Environment Variables**: DATABASE_URL for database connection
- **Port Configuration**: Express server on configurable port

### Production Build Process
1. **Frontend Build**: Vite builds React app to `/dist/public/`
2. **Backend Build**: ESBuild compiles TypeScript server to `/dist/`
3. **Static Assets**: Served by Express in production
4. **Environment**: NODE_ENV controls development/production behavior

### Database Management
- **Schema Migrations**: Drizzle Kit handles database schema changes
- **Connection Pooling**: Neon serverless handles connection management
- **Data Seeding**: Application includes static data for development

### Performance Considerations
- **Code Splitting**: Vite handles automatic code splitting
- **Asset Optimization**: Vite optimizes images and static assets
- **Caching**: Query caching via TanStack Query
- **SEO**: Meta tags and structured data for search engines

The application is designed to be scalable, maintainable, and user-friendly, with a focus on providing a professional corporate presence while celebrating the company's 30-year milestone.