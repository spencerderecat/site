# spencers site
A Next.js-based frontend for the SPENCER website with groovy pastel theme.

## File Structure

```
spencerd/
├── .next/                # Next.js build output
├── node_modules/         # Node dependencies
├── public/               # Static assets
│   ├── crab-sunglasses.png
│   └── picnic-group.png
├── src/
│   └── app/
│       ├── page.tsx      # Home page
│       ├── layout.tsx    # Root layout
│       ├── globals.css   # Global styles
│       ├── favicon.ico
│       ├── surf/
│       │   ├── page.tsx
│       │   └── SurfMap.tsx
│       ├── moments/
│       │   └── page.tsx
│       ├── about/
│       │   └── page.tsx
│       └── music/
│           └── page.tsx
├── package.json
├── package-lock.json
├── tailwind.config.js
├── next-env.d.ts
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── tsconfig.json
└── README.md
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

The frontend will start on `http://localhost:3000`

## Features

- **Groovy Pastel Theme** - Colorful tie-dye background with animated gradients
- **Bubble Letter Typography** - "SPENCER" displayed in massive colorful bubble letters
- **Interactive Buttons** - Four themed buttons for About, Music, Surf, and Moments
- **Responsive Design** - Works on desktop and mobile devices
- **Smooth Animations** - Hover effects and transitions throughout

## Pages

- `/` - Main page with SPENCER title and navigation
- `/music` - Music section with Spotify playlist
- `/surf` - Surf section with interactive map and spot counter
- `/about` - About section with bullet points and pinned images
- `/moments` - Moments section (placeholder)

## Tech Stack

- Next.js 15.3.5
- React 19
- TypeScript 5
- Tailwind CSS 4
- Geist Fonts 
