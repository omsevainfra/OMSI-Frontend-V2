# Om Seva Design & Build Pvt. Ltd.
## Website Project Requirements Document (PRD)
### Version 1.0 — May 2026

---

## 1. PROJECT OVERVIEW

| Field | Details |
|---|---|
| **Client** | Om Seva Design & Build Pvt. Ltd. |
| **Project Type** | Corporate Portfolio Website (Frontend) |
| **Purpose** | Showcase services, projects, and attract government and private sector clients |
| **Primary Audience** | Government agencies, tender bodies, PWD, ZPs, MJP, private developers |
| **Secondary Audience** | General public, job seekers |
| **Deliverable** | Fully responsive frontend website |

---

## 2. BRAND IDENTITY

### Company Name
**Om Seva Design & Build Pvt. Ltd.**

### Logo
The logo features bold black serif lettering "OM" on top and "UM" on the bottom, with the word "SEVA" displayed prominently on a dark green banner across the center.

### Color Palette

| Role | Color | Hex |
|---|---|---|
| Primary Accent | Dark Green (from logo banner) | `#1B5E35` |
| Primary Text | Near Black | `#1A1A1A` |
| Secondary Text | Dark Gray | `#4A4A4A` |
| Borders & Dividers | Medium Gray | `#D1D5DB` |
| Background (Primary) | White | `#FFFFFF` |
| Background (Secondary) | Off-White / Light Gray | `#F8F9FA` |
| Hover Accents | Muted Green | `#2E7D4F` |

> **Design Rule:** Green is used only for special buttons, CTAs, and accent highlights. Borders, cards, and structural elements use gray and black shades. Overall feel: light mode, clean, professional.

### Typography Direction
- Display/Heading: Bold, authoritative serif or strong sans-serif (NOT Inter or Roboto)
- Body: Clean, readable, professional
- Pair a distinctive display font with a refined body font

---

## 3. TECH STACK

| Technology | Usage |
|---|---|
| **React** | UI framework |
| **Tailwind CSS** | Styling utility classes |
| **pnpm** | Package manager |
| **Lucide Icons** | Icon library |
| **JavaScript (ES6+)** | Logic and interactivity |
| **React Router** | Client-side routing |

> This is a **frontend-only** project. No backend or CMS is in scope for this phase.

---

## 4. SITE STRUCTURE & PAGES

### 4.1 Navigation (Sticky Header)
- Logo (left)
- Nav links: Home | About | Services | Projects | Team | Careers | Blog | Contact
- WhatsApp CTA button (right, green accent)
- Mobile hamburger menu

---

### 4.2 Page: HOME (`/`)

#### Section 1 — Hero
- Full-width hero with background construction/infrastructure imagery
- Overlay with company headline (e.g., "Building India's Infrastructure, One Project at a Time")
- Subheadline: brief brand description
- Two CTAs: "View Our Projects" and "Book a Consultation"

#### Section 2 — Stats Counter
Animated counter blocks:
- Years of Experience
- Projects Completed
- Government Projects
- States Covered

#### Section 3 — Services Overview
- Short intro text
- Grid of 4 service cards (Transportation, Water Supply, Structural Engineering, Consultancy)
- Each card: Lucide icon + service name + one-liner + "Learn More" link

#### Section 4 — Featured Projects
- "Live Projects" tab and "Completed Projects" tab
- Grid of 3 featured project cards
- Each card: project image, title, category, location, short description
- "View All Projects" CTA button

#### Section 5 — About Snapshot
- Left: brief company philosophy / what sets Om Seva apart
- Right: key highlights (registered contractors, IIT-certified auditors, 30+ years combined experience)

#### Section 6 — Consultation Booking Form
Fields:
- Full Name
- Phone Number
- Email Address
- Organisation / Company Name
- Type of Enquiry (dropdown): Tender / Consultancy / Construction / Water Supply / Other
- Project Description (textarea)
- Preferred Contact Time
- Submit button (green accent)

#### Section 7 — Client Logos / Testimonials
- Row of client/authority logos (PWD, MJP, BMC, ZP, PMJSY, Jal Jeevan Mission, etc.)
- 2–3 testimonial cards below

#### Section 8 — Footer
- Logo + tagline
- Quick links (all pages)
- Contact info (email, phone, address)
- WhatsApp button
- Social media icons
- Copyright line

---

### 4.3 Page: ABOUT (`/about`)

#### Section 1 — Company Introduction
- Hero banner with page title
- Founding story and company overview paragraph

#### Section 2 — Vision & Mission
- Two-column layout: Vision card | Mission card
- Green accent border on cards

#### Section 3 — What We Do
- Four pillars: Transportation Engineering | Water Infrastructure | Structural Engineering | Consultancy & DPR
- Brief paragraph for each with icon

#### Section 4 — Core Values
- Icon + value grid (Integrity, Quality, Safety, Sustainability, Timely Delivery)

#### Section 5 — Registrations & Certifications
- PWD Registered
- MGP Registered
- ZP Registered
- IIT Roorkee Certified Road Safety Auditors
- Jal Jeevan Mission Contractors

---

### 4.4 Page: SERVICES (`/services`)

#### Section 1 — Services Hero
- Page title with background

#### Section 2 — Service Cards (one per major service)

Each service has a dedicated card/section with:
- Service name & icon
- Detailed description of the service
- What is included / scope
- Relevant government standards and compliance
- **Department Lead** (which Director heads this service)

**Services List:**

1. **Transportation Engineering & Planning**
   - Lead: Devendra G. Baraskar (Director, M.Tech Transportation Engg.)
   - Traffic studies, simulation (PTV Vissim, Aimsun), junction design, road safety audits, highway infrastructure

2. **Road Safety Audit**
   - Lead: Devendra G. Baraskar & Omkar D. Chavan
   - IIT Roorkee certified auditors, RSA for urban and highway corridors, compliance with IRC standards

3. **Water Supply & Distribution**
   - Lead: Deepak V. Chavan (Director, Civil Engineer)
   - Design using Water-gems Bentley, DPR preparation, Jal Jeevan Mission projects, rural and urban water supply

4. **Structural Engineering & Auditing**
   - Lead: Omkar D. Chavan (Director, M.Tech Structural Engg.)
   - Bridges, high-rise buildings, ETABS/STAAD Pro designs, structural audits

5. **Surveying & DPR Preparation**
   - Lead: Digambar B. Gaikwad (Director, Civil Engineer)
   - Topographic surveys, infrastructure planning, detailed project reports for PWD/ZP/MJP

6. **Consultancy Services**
   - All Directors
   - Government project consulting, capacity analysis, technical reports, tender support

---

### 4.5 Page: PROJECTS (`/projects`)

#### Section 1 — Page Hero
- Title + short intro

#### Section 2 — Filter Tabs
- All | Live Projects | Completed Projects
- Optional: filter by category (Transportation | Water | Structural | Surveying)

#### Section 3 — Project Grid
Card layout — each card contains:
- Project cover image
- Project title
- Category badge (color-coded)
- Location (city, state)
- Short description (2 lines)
- Status badge: "Live" (green) or "Completed" (gray)
- "View Details" button / click anywhere on card

---

### 4.6 Page: PROJECT DETAIL (`/projects/:id`)

Full detail view for each project:

| Field | Description |
|---|---|
| **Project Title** | Full name of the project |
| **Category** | Transportation / Water / Structural / Surveying |
| **Status** | Live / Completed |
| **Location** | City, District, State |
| **Client / Authority** | PWD / BMC / ZP / MJP / Private etc. |
| **Project Description** | Full multi-paragraph description |
| **Budget** | Approximate project budget |
| **Timeline** | Start date — End date (or "Ongoing") |
| **Team Lead** | Director responsible |
| **Image Gallery** | Multiple project photos in a lightbox gallery |
| **Back Button** | Returns to /projects |

---

### 4.7 Page: TEAM (`/team`)

#### Section 1 — Page Hero

#### Section 2 — Management Team Grid
Four director cards, each with:
- Professional photo (placeholder if not provided)
- Name
- Designation: Director
- Qualification (M.Tech / Civil Engg.)
- Key specialization (2–3 bullet points)
- Email + Phone (optional)
- LinkedIn icon (if available)

**Directors:**

1. **Devendra G. Baraskar** — Director (M.Tech Transportation Engg.)
   - Certified Road Safety Auditor, IIT Roorkee
   - PhD Civil Engg. (appearing), Amity University
   - 4 years: traffic simulation, road safety audits, BMC projects
   - Mumbai | devendra.baraskar2@gmail.com | 7020830066

2. **Deepak V. Chavan** — Director (Civil Engineer)
   - 31 years: Class-1 contractor & consultant
   - Water supply, roads, bridges for PWD, PMJSY, MJP, ZPs
   - Jal Jeevan Mission & Jal Swarajya contractor
   - Parbhani | dvchavanad@gmail.com | 9890184034

3. **Digambar B. Gaikwad** — Director (Civil Engineer)
   - 30 years: supervisor & consultant
   - Surveying, DPR, water supply, structural design
   - PWD, ZP, MJP projects across Maharashtra
   - Nanded | Omsevadbg288@gmail.com | 7020550899

4. **Omkar D. Chavan** — Director (M.Tech Structural Engg.)
   - Certified Road Safety Auditor, IIT Roorkee
   - PGD Rail & Metro Technology (COEP Pune)
   - Structural design, water supply, RSA for 150 km Mumbai (BMC)
   - Mumbai | ompatil8485@gmail.com | 9800400463

---

### 4.8 Page: CAREERS (`/careers`)

#### Section 1 — Page Hero
- Headline: "Build the Future With Us"

#### Section 2 — Why Join Om Seva
- 3–4 value proposition cards (Growth, Impactful Work, Expert Team, Government Projects)

#### Section 3 — Open Positions
- Job cards: Title, Department, Location, Type (Full-time/Contract)
- Apply button opens a simple form or mailto link

#### Section 4 — Tenders Section
- Current active tenders listed (title, authority, deadline, document download link)
- "No current tenders" state if empty

#### Section 5 — General Application Form
- Name, Email, Phone, Position of Interest, Resume upload, Message

---

### 4.9 Page: BLOG (`/blog`)

#### Section 1 — Blog Listing
- Grid of blog post cards
- Each: thumbnail, category tag, title, excerpt, date, "Read More"

#### Section 2 — Blog Detail (`/blog/:slug`)
- Full article view
- Author, date, category
- Related posts at the bottom

---

### 4.10 Page: CONTACT (`/contact`)

#### Section 1 — Contact Info Cards
- Phone numbers (all directors or a central number)
- Email addresses
- Office locations (Mumbai, Parbhani, Nanded)

#### Section 2 — Contact Form
- Name, Email, Phone, Subject, Message, Submit

#### Section 3 — WhatsApp CTA
- Large prominent WhatsApp button with a message pre-filled: "Hello Om Seva, I'd like to enquire about..."

#### Section 4 — Map Embed (optional)
- Google Maps embed for office location(s)

---

## 5. GLOBAL COMPONENTS

### Sticky Header / Navbar
- Logo left, nav links center/right
- WhatsApp floating button (bottom-right on all pages, mobile-friendly)
- Active link highlighting with green underline accent
- Smooth scroll behavior

### Footer
- 4-column layout (desktop), stacked (mobile)
- Logo, quick nav links, services links, contact info
- Social media icons (Lucide)
- Copyright: © 2026 Om Seva Design & Build Pvt. Ltd. All rights reserved.

### Loading / Transitions
- Smooth page transitions
- Lazy loading for images in galleries and project grids

---

## 6. RESPONSIVE DESIGN REQUIREMENTS

| Breakpoint | Target |
|---|---|
| Mobile (< 640px) | Single column, hamburger nav, stacked cards |
| Tablet (640–1024px) | 2-column grid, condensed nav |
| Laptop/Desktop (> 1024px) | Full layout, 3–4 column grids, sticky nav |

> Primary usage expected on laptops and desktops. Mobile must be functional and clean, not necessarily feature-identical.

---

## 7. UI / UX DESIGN GUIDELINES

- **Mode:** Light mode only
- **Card Style:** White cards with light gray borders (`#D1D5DB`), subtle shadow on hover
- **Buttons:** Primary = dark green fill + white text; Secondary = white fill + dark border
- **Hover States:** Green accent on links; card lift effect (shadow increase) on project cards
- **Section Spacing:** Generous padding — sections breathe, not cramped
- **Icons:** Lucide icons only (consistent with tech stack)
- **Images:** Use placeholder/Unsplash construction images where real photos are absent
- **Animations:** Subtle — counter animations on stats, fade-in on scroll, card hover lift

---

## 8. PROJECT DATA STRUCTURE (for frontend mock data)

```js
// projects.js mock data structure
const project = {
  id: "string",
  title: "string",
  category: "Transportation | Water | Structural | Surveying | Consultancy",
  status: "Live | Completed",
  location: { city: "string", district: "string", state: "string" },
  client: "string",  // e.g. "BMC", "PWD Maharashtra"
  description: "string",
  budget: "string",  // e.g. "₹2.5 Crore"
  startDate: "YYYY-MM",
  endDate: "YYYY-MM | null",  // null if ongoing
  teamLead: "Director name",
  images: ["url1", "url2", "url3"],
  featured: true | false,
}
```

```js
// services.js mock data structure
const service = {
  id: "string",
  title: "string",
  icon: "lucide-icon-name",
  shortDescription: "string",
  fullDescription: "string",
  scope: ["item1", "item2"],
  compliance: ["IRC standards", "IS codes"],
  lead: { name: "string", designation: "string", qualification: "string" }
}
```

---

## 9. FOLDER / FILE STRUCTURE (Recommended)

```
omseva-website/
├── public/
│   └── assets/
│       ├── logo.png
│       └── images/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── WhatsAppButton.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── StatCounter.jsx
│   │   │   └── SectionHeader.jsx
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── ServicesGrid.jsx
│   │       ├── ProjectsGrid.jsx
│   │       ├── TeamGrid.jsx
│   │       └── ConsultationForm.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetail.jsx
│   │   ├── Team.jsx
│   │   ├── Careers.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogDetail.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   ├── projects.js
│   │   ├── services.js
│   │   ├── team.js
│   │   ├── stats.js
│   │   └── testimonials.js
│   ├── hooks/
│   │   └── useCounterAnimation.js
│   ├── utils/
│   │   └── helpers.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── package.json
└── pnpm-lock.yaml
```

---

## 10. TAILWIND CONFIG (Brand Colors)

```js
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#1B5E35",
          "green-hover": "#2E7D4F",
          black: "#1A1A1A",
          gray: "#4A4A4A",
          border: "#D1D5DB",
          bg: "#F8F9FA",
        }
      },
      fontFamily: {
        // Suggest: display serif for headings, clean sans for body
        display: ["'Playfair Display'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
      }
    }
  },
  plugins: []
}
```

---

## 11. CODING AGENT INSTRUCTIONS

### General Rules
- Use **functional components** with React hooks only
- All routing via **React Router v6** (`<BrowserRouter>`, `<Routes>`, `<Route>`)
- Use **Tailwind CSS** utility classes exclusively — no inline styles, no separate CSS files except globals.css
- Use **Lucide React** for all icons (`import { IconName } from "lucide-react"`)
- Use **pnpm** for all package management
- All data from `/src/data/*.js` files (mock JSON) — no API calls in this phase

### Component Rules
- Every reusable UI element goes in `/src/components/ui/`
- Every page section component goes in `/src/components/sections/`
- Every page goes in `/src/pages/`
- Props must be clearly named and typed with JSDoc comments

### Design Rules
- Follow color palette from Section 2 strictly
- Green (`#1B5E35`) used ONLY for: primary buttons, active nav links, status badges, card accent borders
- Borders use `brand-border` (#D1D5DB) or darker grays
- No purple, blue, or other colors unless for category badges
- Light mode only — white and off-white backgrounds
- `font-display` for all headings (H1–H3), `font-body` for all body text
- Cards: white background, `border border-brand-border`, `rounded-lg`, `shadow-sm hover:shadow-md transition`

### Mobile Responsive Rules
- All grids: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Navbar: desktop full links, mobile hamburger with slide-down menu
- Hero text: `text-3xl md:text-5xl lg:text-6xl`
- Padding: `px-4 md:px-8 lg:px-16`

### WhatsApp Button
- Fixed bottom-right on all pages
- Phone number: to be confirmed (use placeholder `+91-XXXXXXXXXX`)
- Pre-filled message: `Hello Om Seva Design & Build, I'd like to enquire about your services.`
- Green circle with Lucide `MessageCircle` icon

---

## 12. PLACEHOLDER CONTENT NOTES

The following content is **real and should be used:**
- Company name: Om Seva Design & Build Pvt. Ltd.
- Director names, qualifications, experience, emails, phone numbers (see Section 4.7)
- Services: Transportation, Water Supply, Structural Engineering, Road Safety Audit, Surveying & DPR, Consultancy
- Client bodies: PWD, BMC, MJP, ZP, PMJSY, Jal Jeevan Mission, Jal Swarajya
- Projects referenced: Coastal Road Mumbai, Gokhale Bridge, GMLR Tunnel TPQA, RSA 454 km Mumbai, Water Supply Parbhani (6 projects)

The following content needs to be **provided by client later:**
- Company founding year and full history
- Vision & Mission statement text
- Project photos and full project details (budget, timeline, description)
- Client logos
- Testimonials
- Blog content
- Current tender listings
- Job openings
- Office addresses
- Central contact number

Use realistic construction-industry placeholder text (not Lorem Ipsum) for all empty content areas.

---

*Document prepared for Om Seva Design & Build Pvt. Ltd. — Confidential*
*PRD Version 1.0 | May 2026*
