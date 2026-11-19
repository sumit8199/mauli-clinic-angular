# 🏥 Dr. Yewale's Mauli Children & General Clinic — Angular Application

A production-ready, modern **Angular** web application converted from Lovable with clean enterprise modular architecture, standalone components, reactive forms, signal-based state management, and real-time clinic status tracking.

---

## 🌟 Key Features

- **⚡ Latest Angular Standalone Architecture**: Built with modern Angular standalone components, signals (`computed`, `signal`), zoneless/modern change detection ready, and lazy-loaded routes.
- **🎨 Custom Medical Design System**: Curated color palette (Pediatric Teal, Warm Amber, Emerald, Deep Navy), smooth animations, Google Fonts typography (*Fraunces* serif display + *Plus Jakarta Sans* body), and glassmorphism navbar.
- **📱 WhatsApp Direct Booking Engine**: Interactive reactive appointment booking form with instant validation, formatted WhatsApp message generation, and direct WhatsApp dispatch.
- **🕒 Real-Time Clinic Status Widget**: Dynamically computes whether the clinic is currently **Open** or **Closed** with OPD session details based on local Nashik clinic hours.
- **📍 Interactive Location & Maps**: Google Maps embed, one-touch GPS directions, and full physical address.
- **💬 Patient Reviews & Testimonials**: 5.0-star patient reviews and verified parent feedback.
- **❓ Interactive FAQ Accordion**: Expandable frequently asked questions for pediatric care, vaccination schedules, and consultations.
- **🌐 Complete SEO & Schema.org**: Fully equipped with OpenGraph tags, Twitter Cards, responsive meta viewport, and `MedicalClinic` JSON-LD structured data.

---

## 📁 Project Architecture & Folder Structure

```
mauli-clinic/
├── public/
│   ├── assets/
│   │   └── hero.jpg                   # Clinic Hero Visual Asset
│   ├── favicon.ico                    # Clinic Favicon
│   └── robots.txt                     # SEO Crawling Directives
│
├── src/
│   ├── index.html                     # HTML5 Shell with Fonts, Meta & JSON-LD Microdata
│   ├── main.ts                        # Application Bootstrap Entry
│   ├── styles.scss                    # Design System Tokens, Animations, Utilities & Global Styles
│   │
│   └── app/
│       ├── core/                      # Core Singletons & Business Logic
│       │   ├── constants/
│       │   │   └── clinic.config.ts   # Central Data Repository & Clinic Information
│       │   ├── models/
│       │   │   ├── clinic.model.ts    # Clinic, Doctor, Timings & Contact Interfaces
│       │   │   ├── service.model.ts   # Clinical Specialities Model
│       │   │   ├── appointment.model.ts # Reactive Booking Payload Types
│       │   │   └── testimonial.model.ts # Testimonials & FAQ Models
│       │   └── services/
│       │       ├── clinic.service.ts  # Signals-based State & Real-time Open/Closed Engine
│       │       ├── appointment.service.ts # Form Validator & WhatsApp Integration
│       │       └── meta.service.ts    # Dynamic Page SEO & Title Manager
│       │
│       ├── shared/                    # Reusable UI Components, Pipes & Directives
│       │   ├── components/
│       │   │   ├── icon/              # Zero-Dependency Vector SVG Icon Component
│       │   │   ├── navbar/            # Sticky Glassmorphism Header & Mobile Drawer
│       │   │   ├── footer/            # Enterprise Clinical Footer & Registered Info
│       │   │   ├── whatsapp-fab/      # Floating Action Button with Pulse Glow
│       │   │   ├── section-header/    # Standardized Section Headers with Badges
│       │   │   └── toast/             # Notification Feedback System
│       │   └── pipes/
│       │       └── safe-url.pipe.ts   # Sanitized Resource URL Pipe for Maps
│       │
│       ├── features/                  # Feature Modules & Pages
│       │   ├── home/                  # Main Landing Page
│       │   │   ├── components/
│       │   │   │   ├── hero-section/         # Hero Banner with Trust Overlays
│       │   │   │   ├── about-section/        # Ethos & Clinical Pillars
│       │   │   │   ├── services-section/     # 6 Speciality Services with Hover Effects
│       │   │   │   ├── doctor-section/       # Dr. Suraj Yewale MD Bio & Credentials
│       │   │   │   ├── timings-section/      # Morning & Evening Schedule + Live Status
│       │   │   │   ├── reviews-section/      # 5.0 Star Parent Testimonials
│       │   │   │   ├── appointment-section/  # WhatsApp Reactive Booking Form
│       │   │   │   ├── location-section/     # Google Maps Iframe & Directions
│       │   │   │   └── faq-section/          # Interactive FAQ Accordion
│       │   │   ├── home.component.ts
│       │   │   ├── home.component.html
│       │   │   └── home.component.scss
│       │   │
│       │   └── not-found/             # 404 Error Screen
│       │       ├── not-found.component.ts
│       │       ├── not-found.component.html
│       │       └── not-found.component.scss
│       │
│       ├── app.routes.ts              # In-Memory Smooth Anchor Routing
│       ├── app.config.ts              # Application Level Providers
│       ├── app.ts                     # Root Component Shell
│       ├── app.html                   # Root Layout Template
│       └── app.scss                   # Root Stylesheet
│
├── angular.json                       # Angular Build & Architect Configuration
├── package.json                       # Project Dependencies & NPM Scripts
└── tsconfig.json                      # Strict TypeScript Configuration
```

---

## 🚀 Running the Project

### 1. Install Dependencies
```bash
cd mauli-clinic
npm install
```

### 2. Start Local Development Server
```bash
npm start
# or: npx ng serve --open
```
Open **`http://localhost:4200`** in your browser.

### 3. Production Build
```bash
npm run build
```
The optimized production bundle will be generated in `dist/mauli-clinic`.

---

## 👨‍⚕️ Clinic Information
- **Doctor:** Dr. Suraj Yewale, MD (Pediatrics)
- **Speciality:** Consultant Pediatrician & Child Health Specialist (6+ Years Experience)
- **Location:** Dream Aura, Adgaon, Jatra-Nandur Road, Panchavati, Nashik - 422003, Maharashtra
- **WhatsApp / Call:** +91 91753 75189
