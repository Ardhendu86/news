# AZNews Next.js Project

AZNews is a news-style website built with Next.js App Router. The UI is split into reusable sections, and each page route is defined inside the `app` directory.

## Project Description

- Framework: Next.js 14 (App Router)
- UI: React components with template assets from `public/assets`
- API routes: Contact and newsletter endpoints in `app/api`
- Animations: AOS integration for scroll effects

## Where Routes Are Defined

In this project, routes are file-based.

- Page routes: `app/<route>/page.jsx`
- API routes: `app/api/<name>/route.js`

Examples from this project:

- `/` -> `app/page.jsx`
- `/about` -> `app/about/page.jsx`
- `/blog` -> `app/blog/page.jsx`
- `/categori` -> `app/categori/page.jsx`
- `/contact` -> `app/contact/page.jsx`
- `/single-blog` -> `app/single-blog/page.jsx`
- `/api/contact` -> `app/api/contact/route.js`
- `/api/newsletter` -> `app/api/newsletter/route.js`

## How To Create a New Route

1. Create a folder under `app` with the route name.
2. Add `page.jsx` inside that folder.
3. Add your component UI and export a default function.
4. Link it from navigation using `next/link`.

Example:

- File: `app/services/page.jsx`
- URL: `/services`

## Run Locally

1. Install dependencies:
   - `npm install`
2. Start dev server:
   - `npm run dev`
3. Build production output:
   - `npm run build`
4. Start production server:
   - `npm run start`

If port 3000 is already in use:

- `npm run start:3001`

## Assets

Static files are in `public/assets` and can be referenced from root paths.

- Example file path: `public/assets/img/news/whatNews1.jpg`
- Example URL path: `/assets/img/news/whatNews1.jpg`
