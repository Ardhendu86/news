# Easy Next.js Conversion (Section by Section)

This folder contains a simple Next.js conversion of your template homepage.

## What is already converted

- Header section
- Trending section
- Weekly news section
- Whats new section
- Weekly2 news section
- Youtube section
- Recent articles section
- Pagination section
- Footer section

Each section is a reusable component in `components/sections`.

## Run

1. Open terminal in `nextjs-app`
2. Install packages:
   - `npm install`
3. Start development server:
   - `npm run dev`
4. Open `http://localhost:3000`

## Easy way to convert remaining pages

1. Create a route file (example: `app/about/page.jsx`)
2. Reuse `HeaderSection` and `FooterSection`
3. Copy one HTML section at a time into a new React component
4. Replace:
   - `class` -> `className`
   - `for` -> `htmlFor`
   - `onclick` -> `onClick`
5. Put new component under `components/sections` and render it inside route `page.jsx`

## Assets

Original `assets` are copied to `public/assets`, so paths stay very similar:

- Old: `assets/img/news/whatNews1.jpg`
- New: `/assets/img/news/whatNews1.jpg`
