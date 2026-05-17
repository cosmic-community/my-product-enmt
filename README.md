# My Product - SaaS Landing Page

![App Preview](https://imgix.cosmicjs.com/2f354fc0-51a6-11f1-8305-f921d082af6c-autopilot-photo-1551434678-e076c223a692-1778990962356.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, conversion-focused SaaS landing page built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com).

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 💰 Dynamic pricing tiers with highlighted recommended plan
- ⭐ Feature showcase with icons and categories
- 💬 Customer testimonials with star ratings
- ❓ Categorized FAQ section
- 📚 Documentation pages hub
- ⚡ Server-side rendering for performance
- 🔍 SEO optimized

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a093ee7a6022ba888906781&clone_repository=6a094040a6022ba888906835)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a SaaS product website with features, pricing tiers, documentation pages, and customer testimonials.
> 
> User instructions: A SaaS landing page with features, pricing tiers, FAQ, and testimonials"

### Code Generation Prompt

> Build a Next.js application for an online business called "My Product". The content is managed in Cosmic CMS with the following object types: features, pricing-tiers, faqs, testimonials, documentation-pages. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
> 
> User instructions: A SaaS landing page with features, pricing tiers, FAQ, and testimonials

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Cosmic SDK** - Headless CMS integration

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   bun install
   ```
3. Set up environment variables (`.env.local`):
   ```
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```
4. Run the dev server:
   ```bash
   bun run dev
   ```

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all features sorted by display_order
const { objects: features } = await cosmic.objects
  .find({ type: 'features' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This app uses 5 object types from your Cosmic bucket:
- **features** - Product features with icons and categories
- **pricing-tiers** - Pricing plans with monthly/annual rates
- **faqs** - Frequently asked questions by category
- **testimonials** - Customer reviews with ratings
- **documentation-pages** - Documentation articles

## Deployment Options

- **Vercel**: Push to GitHub and import to Vercel
- **Netlify**: Connect repository and configure build
- Set environment variables in your hosting platform's dashboard

<!-- README_END -->