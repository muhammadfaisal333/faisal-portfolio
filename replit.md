# Muhammad Faisal - Portfolio Website

## Project Overview
A professional, fully responsive portfolio website for Muhammad Faisal, a WordPress and Frontend Developer. Built with React, TypeScript, and Tailwind CSS featuring a modern dark theme design.

## Tech Stack
- **Frontend**: React 18, TypeScript, Tailwind CSS
- **UI Components**: Shadcn UI with Radix UI primitives
- **Routing**: Wouter
- **State Management**: TanStack Query v5
- **Backend**: Express.js (minimal)
- **Storage**: In-memory storage for contact form submissions
- **Styling**: Tailwind CSS with custom dark theme

## Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Dark theme with professional color palette
- ✅ Smooth scrolling navigation
- ✅ Hero section with professional background and CTA buttons
- ✅ About section with profile, stats, and process workflow
- ✅ Skills section with interactive filtering
- ✅ Projects showcase with hover effects
- ✅ Functional contact form with backend API
- ✅ Professional footer with back-to-top functionality

## Sections
1. **Hero** - Welcome message, name with gradient animation, call-to-action buttons, stats
2. **About** - Profile image, bio, areas of expertise, core principles, work process
3. **Skills** - Technology showcase with proficiency levels and category filtering
4. **Projects** - Portfolio showcase with project cards, images, and technology tags
5. **Contact** - Working contact form with backend integration, contact info, social links
6. **Footer** - Copyright info and back-to-top button

## Project Structure
```
client/
  src/
    components/
      Navigation.tsx - Fixed navigation with mobile menu
      HeroSection.tsx - Hero section with gradient animations
      AboutSection.tsx - About section with stats and process
      SkillsSection.tsx - Skills display with filtering
      ProjectsSection.tsx - Projects showcase
      ContactSection.tsx - Contact form with API integration
      Footer.tsx - Footer component
    pages/
      Portfolio.tsx - Main portfolio page
    assets/ - Generated images for hero, profile, projects
server/
  routes.ts - API routes including /api/contact endpoint
  storage.ts - In-memory storage for contact messages
shared/
  schema.ts - TypeScript types and Zod schemas
```

## API Endpoints
- `POST /api/contact` - Submit contact form (validated with Zod)

## Design System
- **Primary Color**: Cyan-blue (200 95% 55%)
- **Secondary Accent**: Purple (280 70% 60%)
- **Background**: Deep navy-blue (220 25% 8%)
- **Typography**: Inter for body, Space Grotesk for headings, JetBrains Mono for code
- **Components**: Shadcn UI with custom dark theme adaptations

## Setup Instructions
1. Application runs on `npm run dev`
2. Frontend and backend served on same port via Vite
3. Contact form submissions stored in memory
4. To add resume: Place PDF file in `/public/resume.pdf` and update download handler

## TODO for User
- [ ] Replace demo content with actual personal information
- [ ] Replace generated images with real photos/screenshots
- [ ] Add actual resume PDF file
- [ ] Update social media links with real URLs
- [ ] Update contact information (email, phone, location)
- [ ] Consider adding email service for contact form notifications

## Recent Changes
- Improved hero section with better background and resume button
- Enhanced about section with 4-box layout and process workflow
- Implemented functional contact form with backend API
- Added gradient animations and hover effects throughout
- Optimized responsive design for all screen sizes
