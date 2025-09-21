# Airbnb Application Clone System - Components Setup

This task introduces **reusable components** in the `components/` directory.

## Components Created
- **Card.tsx** → Displays a property card with image, title, rating, and price.
- **Pill.tsx** → Reusable pill-shaped tag for displaying labels (dynamic via props).
  
## Components

- **Pill** → A reusable badge-like UI element that accepts a `title` prop.
- **Card** → Displays a heading and uses the `Pill` component 3 times.
- Components are imported into `pages/landing.tsx` and can be reused multiple times.

## Routes
- `/landing` → Demonstrates component usage (Card + Pill).

## Assets
- Images moved to `public/assets/images/house.png` and `public/assets/images/star.png`.

## How to Run
1. Install dependencies  
   ```bash
   npm install
