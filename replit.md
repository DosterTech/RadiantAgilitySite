# Radiant Agility Technology Website

## Overview

This is a full-stack web application for Radiant Agility Technology, a company offering marketing automation, app development, and agility consulting services. The application features a modern React frontend with a Node.js/Express backend, PostgreSQL database, and includes lead capture forms, contact management, and a chat widget.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth animations
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Email Service**: SendGrid for email notifications
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

### Database Design
The application uses three main database tables:
- **leads**: Captures potential customer information from lead generation forms
- **contacts**: Stores detailed contact form submissions
- **chatMessages**: Manages chat widget conversations with session tracking

## Key Components

### Frontend Components
- **Layout System**: Header, Footer, and responsive navigation
- **Page Components**: Home, Services, About, Case Studies, Contact, Blog
- **Interactive Widgets**: Chat widget for customer support
- **Admin Interface**: Inquiry management dashboard
- **UI Components**: Complete shadcn/ui component library implementation

### Backend Services
- **Storage Layer**: Abstracted database operations with interface-based design
- **Email Service**: SendGrid integration for notifications
- **API Routes**: RESTful endpoints for leads, contacts, and chat functionality
- **Development Tools**: Vite integration for seamless development experience

### Data Flow
1. **Lead Capture**: Forms collect visitor information and store in database
2. **Contact Management**: Detailed contact forms with email notifications
3. **Chat System**: Real-time chat widget with session-based message storage
4. **Admin Dashboard**: Interface for managing inquiries and customer data

## External Dependencies

### Key Frontend Libraries
- React ecosystem (React, React DOM, React Query)
- UI components (@radix-ui/* components)
- Form handling (@hookform/resolvers, react-hook-form)
- Styling (Tailwind CSS, class-variance-authority)
- Animation (Framer Motion)
- Icons (Lucide React)

### Backend Dependencies
- Database (@neondatabase/serverless, drizzle-orm)
- Email (@sendgrid/mail)
- Session management (connect-pg-simple)
- Development (tsx, esbuild)

### Development Tools
- TypeScript for type safety
- Vite for build tooling
- Drizzle Kit for database migrations
- ESLint and Prettier (implied by project structure)

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations handled via `db:push` script

### Environment Configuration
- **Development**: Uses `tsx` for TypeScript execution
- **Production**: Runs compiled JavaScript bundle
- **Database**: Requires `DATABASE_URL` environment variable
- **Email**: Optional `SENDGRID_API_KEY` for email functionality

### Hosting Platform
- Configured for Replit deployment with autoscale
- Uses PostgreSQL module for database
- Port configuration: internal 5000, external 80

## Changelog

```
Changelog:
- June 15, 2025. Initial setup
- June 15, 2025. Removed "Lead Generation & Growth" service section and replaced with SAFe Certification Courses section featuring corporate training offerings
- June 15, 2025. Added three SEO-optimized SAFe blog posts: "What Is SAFe® Agile", "7 Mistakes to Avoid When Implementing SAFe®", and "SAFe Roles Demystified" with conversion-focused CTAs
- June 15, 2025. Enhanced navigation with improved dropdown functionality and scroll-to-top behavior
- June 19, 2025. Consolidated duplicate SAFe certification sections into unified service block
- June 19, 2025. Created conversion-focused career change landing page at /career-change targeting professionals seeking SAFe certification with success stories, statistics, and clear certification paths
- June 19, 2025. Added sale pricing for Scrum Master course: original $1,125 (strikethrough) with sale price $580 and "Save $545 Today!" messaging
- June 19, 2025. Updated SAFe Agilist pricing with sale display: original $1,185 → $895 with "Best Seller" and "Limited Seats" badges
- June 19, 2025. Added sale pricing for SAFe POPM course: original $995 → $795 with "Limited-Time Discount" messaging
- June 19, 2025. Added sale pricing for SAFe DevOps course: original $950 → $750 with "Summer Sale - $200 Off!" messaging
- January 5, 2025. Created new Agile Armies landing page at /agile-armies featuring enterprise team training with brand-aligned purple/red styling, conversion-focused design, and integrated contact form
- January 5, 2025. Created separate B2C landing page at /safe-sprint for "5-Day SAFe Sprint" micro-learning email course targeting individual professionals with daily bite-sized lessons
- January 6, 2025. Added automated 5-day SAFe Sprint email course system with SendGrid integration, complete course content, and daily delivery automation
- January 9, 2025. Integrated Zoe AI course advisor chat widget across all pages with professional purple branding and responsive design
- January 15, 2025. Created comprehensive Ventures page showcasing product portfolio (ReelBite, SimStack, ZinnFluence, Smart Job Hunter, PlanFuel, ZinnBots) with market opportunity metrics and ARR projections
- January 27, 2025. Fixed navigation dropdown hover issue by adding proper padding and removing gaps between trigger and dropdown menu
- January 27, 2025. Updated SAFe Scrum Master class dates: Session 1 changed to Aug 16-17 (Saturday-Sunday), Waitlist session changed to Aug 26-27 (Tuesday-Wednesday)
- January 27, 2025. Implemented comprehensive SEO optimization for SAFe Scrum Master page including Schema markup, meta tags, keywords, and structured content sections
- January 28, 2025. Removed "Products" from public navigation menu to make it investor-only access
- January 28, 2025. Fixed POMP course register button to scroll to sessions section instead of opening external link
- January 28, 2025. Updated brand colors to match Radiant Agility theme: primary purple (#4c63d2), gradient backgrounds, and consistent purple color scheme throughout the application
- January 28, 2025. Created Value-First Agile Assessment page at /value-first-assessment with interactive 8-question assessment, personalized scoring (8-12, 13-18, 19-24 points), and targeted recommendations for teams transitioning from activity-focused to value-driven development
- January 28, 2025. Removed results preview section from assessment page to keep result types as a surprise until completion
- January 29, 2025. Created high-converting lead magnet landing page at /tech-roles-guide for "3 High-Paying Tech Roles You Can Land Without Learning to Code" with email capture, role breakdowns, testimonials, and conversion-focused design
- January 29, 2025. Changed tech roles guide URL slug from /tech-roles-guide to /free for better social media bio compatibility and character limit optimization
- January 30, 2025. Created comprehensive Lead Magnet Dashboard at /admin/leads with filtering, CSV export, and lead tracking for all download funnels
- January 30, 2025. Built Agile Alphabet Series landing pages: AI-CI Toolkit (/ai-ci-toolkit) and Definition of Done Toolkit (/definition-of-done-toolkit) with email capture and automatic file downloads
- January 31, 2025. Created dedicated DoD Template landing page (/dod-template) with modern design, value propositions, visual template preview, testimonials, and integrated email capture form following brand guidelines
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```