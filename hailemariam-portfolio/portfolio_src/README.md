# Hailemariam Geremew — Full Stack Developer Portfolio

An interactive 3D developer portfolio built with React, Three.js (react-three-fiber),
Tailwind CSS, and Framer Motion. Showcases full-stack ERP and business-system projects
built for Ethiopian clients, with real localization (ETB, Amharic naming, statutory
compliance).

## Tech stack

- React + Vite
- Three.js / @react-three/fiber / @react-three/drei (3D desktop, earth, and stars scenes)
- Tailwind CSS
- Framer Motion (animations)
- EmailJS (contact form — no backend required)

## Getting started

```bash
npm install
npm run dev
```

The site runs at `http://localhost:5173` by default.

## Setting up the contact form (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com) to send messages without a backend.

1. Create a free EmailJS account.
2. Create an **Email Service** (e.g. Gmail) and note the Service ID.
3. Create an **Email Template** with `from_name`, `from_email`, `to_name`, `to_email`,
   and `message` variables, and note the Template ID.
4. Copy `.env.example` to `.env` and fill in your Service ID, Template ID, and Public Key:

   ```bash
   cp .env.example .env
   ```

5. Restart the dev server after editing `.env`.

## Customizing further

- **Personal info / copy**: `src/constants/index.js` (projects, experience, highlights)
  and `src/components/Hero.jsx`, `About.jsx`, `Navbar.jsx`.
- **Project thumbnails**: `src/assets/*.png` — swap these generated placeholder cards
  for real screenshots of each project whenever you have them.
- **Project links**: update `source_code_link` in `src/constants/index.js` to point at
  the actual GitHub repo for each project instead of the profile URL.
- **Colors / fonts**: `tailwind.config.cjs` and `src/index.css`.

## Build & deploy

```bash
npm run build
```

This outputs a static `dist/` folder that can be deployed to Vercel, Netlify, GitHub Pages,
or any static host.

## Credits

Base 3D portfolio structure adapted from the open-source
[project_3D_developer_portfolio](https://github.com/adrianhajdin/project_3D_developer_portfolio)
template by Adrian Hajdin / JavaScript Mastery, with all content, copy, projects, and
branding replaced with my own.

3D models (CC-BY-4.0, author credit required):
- "Gaming Desktop PC" by [Yolala1232](https://sketchfab.com/Yolala1232), via
  [Sketchfab](https://sketchfab.com/3d-models/gaming-desktop-pc-d1d8282c9916438091f11aeb28787b66)
- "Stylized planet" by [cmzw](https://sketchfab.com/cmzw), via
  [Sketchfab](https://sketchfab.com/3d-models/stylized-planet-789725db86f547fc9163b00f302c3e70)
