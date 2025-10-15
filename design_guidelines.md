# Design Guidelines: Muhammad Faisal Portfolio Website

## Design Approach
**Reference-Based Approach** drawing inspiration from modern developer portfolios (Vercel, Linear, GitHub) with a sophisticated dark theme that showcases technical expertise while maintaining approachability.

## Core Design Elements

### A. Color Palette

**Dark Mode Foundation:**
- Background Primary: 220 25% 8% (deep navy-blue)
- Background Secondary: 220 20% 12% (elevated surfaces)
- Background Tertiary: 220 15% 16% (cards, sections)

**Brand & Accent:**
- Primary Accent: 200 95% 55% (vibrant cyan-blue for CTAs, highlights)
- Secondary Accent: 280 70% 60% (purple for hover states, secondary actions)
- Text Primary: 220 10% 95% (off-white for headings)
- Text Secondary: 220 10% 70% (muted for body text)
- Text Tertiary: 220 10% 50% (subtle for labels)

**Semantic Colors:**
- Success/Active: 150 60% 50% (skill indicators)
- Border: 220 15% 20% (subtle dividers)

### B. Typography

**Font Families:**
- Headings: 'Space Grotesk' or 'Inter' (bold, modern, technical feel)
- Body: 'Inter' (excellent readability, professional)
- Code/Tech: 'JetBrains Mono' (for skill tags, code snippets)

**Type Scale:**
- Hero Headline: text-6xl md:text-7xl lg:text-8xl (font-bold)
- Section Titles: text-4xl md:text-5xl (font-bold)
- Subsection Titles: text-2xl md:text-3xl (font-semibold)
- Body Large: text-lg md:text-xl (leading-relaxed)
- Body: text-base (leading-relaxed)
- Small/Labels: text-sm (uppercase tracking-wide for skill tags)

### C. Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistency.
- Section padding: py-20 md:py-32
- Container margins: px-6 md:px-12 lg:px-20
- Card spacing: p-6 md:p-8
- Element gaps: gap-4, gap-6, gap-8

**Container Strategy:**
- Full-width sections with max-w-7xl centered containers
- Content max-width: max-w-6xl for readability
- Grid layouts: 2-column (md) to 3-column (lg) for projects/skills

### D. Component Library

**Navigation:**
- Fixed top navigation with blur backdrop (backdrop-blur-md bg-background/80)
- Desktop: Horizontal links with smooth underline hover effect
- Mobile: Hamburger menu with slide-in drawer (full-height overlay)
- Active section indicator using scroll spy

**Hero Section (Full viewport):**
- Large hero image (professional workspace or coding setup) with dark overlay gradient
- Name display: Massive typography with gradient text effect (cyan to purple)
- Animated subtitle: "WordPress & Frontend Developer" with typing effect
- Dual CTAs: "View Projects" (primary solid) + "Contact Me" (outline with blur background)
- Scroll indicator icon at bottom

**About/Intro Section:**
- Two-column layout: Left (profile image placeholder with border glow effect), Right (bio text)
- Mobile: Stack vertically
- Background: Subtle grid pattern overlay

**Skills Section:**
- Grid of skill cards (3-4 columns desktop, 2 tablet, 1 mobile)
- Each card: Technology icon, name, proficiency bar (animated on scroll into view)
- Categories: WordPress, Frontend (HTML/CSS/JS), Frameworks (React), Tools
- Cards with hover lift effect and border glow

**Projects/Portfolio Section:**
- Masonry-style or standard grid layout (2-3 columns)
- Project cards with: Large preview image, title, tech stack tags, description, "View Project" link
- Hover: Image zoom with overlay revealing project details
- Filter tabs for project categories (optional)

**Contact Section:**
- Two-column: Left (contact form), Right (contact info + social links)
- Form inputs: Dark with subtle borders, focus state with primary accent glow
- Submit button: Primary accent with loading state
- Social icons: LinkedIn, GitHub, Email (with hover scale effect)

**Footer:**
- Simple centered layout: Copyright, social links, "Back to Top" link
- Subtle top border

### E. Visual Enhancements

**Minimal Animations:**
- Hero: Fade-in on load, subtle parallax scroll on background
- Skill bars: Fill animation on scroll into view
- Cards: Hover lift (translateY) with subtle shadow
- Navigation: Smooth scroll behavior
- NO complex scroll-driven animations, page transitions, or particle effects

**Borders & Shadows:**
- Card borders: 1px with border-color using theme colors
- Glow effects: box-shadow with primary/secondary accent colors (low opacity)
- Elevation: Subtle shadows for depth (shadow-lg, shadow-xl)

## Images

**Hero Section Image:**
- Large background image: Modern workspace with laptop showing code, dark ambient lighting
- Treatment: 50% opacity dark overlay, subtle blur on edges
- Position: Cover, centered

**About Section Image:**
- Professional headshot or developer workspace photo
- Treatment: Rounded corners (rounded-xl), subtle glow border effect
- Size: Square or 4:3 ratio, max 400px width

**Project Cards (6-8 placeholder projects):**
- Screenshots of websites/applications
- Treatment: Rounded corners, aspect ratio 16:9
- Hover: Scale 105%, slight brightness increase

## Responsive Breakpoints

- Mobile: < 768px (single column, stacked layouts)
- Tablet: 768px - 1024px (2 columns, adjusted spacing)
- Desktop: > 1024px (3-4 columns, full layout)

## Accessibility

- High contrast ratios (WCAG AAA for text)
- Focus visible states with accent color outlines
- Keyboard navigation support
- Semantic HTML structure
- Dark mode optimized for reduced eye strain