# Accredian Enterprise — Partial Clone

A responsive Next.js (App Router) recreation of the Accredian Enterprise landing page.

## Stack
- Next.js 16 (App Router)
- React functional components + hooks
- Tailwind CSS
- Mock API routes (`/api/testimonials`, `/api/contact`) simulating real backend integration

## Structure
```
app/
  page.js              # Landing page composition
  layout.tsx           # Root layout + metadata
  api/testimonials/    # GET mock testimonials
  api/contact/         # POST lead-capture form handler
components/            # Reusable UI components (Header, Hero, Solutions, Programs,
                        # HowItWorks, Testimonials, Partners, ContactForm, CtaBanner, Footer)
data/content.js         # Centralized mock content
```

## Getting Started
```bash
npm install
npm run dev
```
Visit http://localhost:3000

## Build
```bash
npm run build
npm run start
```

## Features
- Fully responsive layout (mobile-first, breakpoints via Tailwind)
- Sticky header with mobile hamburger menu + smooth-scroll in-page navigation
- Hero, Partners strip, Solutions grid, Programs, How It Works, Testimonials
  (fetched from a mock API route with loading/error states), CTA banner, Contact form
  (posts to a mock API route with validation), and Footer
- Reusable `SectionHeading` and icon components
