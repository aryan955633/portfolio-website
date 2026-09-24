# Portfolio Website — Ajay & Aryan

[![Live on Vercel](https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-website-aryan-ca03.vercel.app/)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

A modern, responsive portfolio for a creative duo — **Ajay** (Video Editor & Motion Graphics Artist) and **Aryan** (Full-Stack Web Developer). The site showcases their skills, services and featured work across video production and web development.

## 🔗 Live Demo

**👉 [portfolio-website-aryan-ca03.vercel.app](https://portfolio-website-aryan-ca03.vercel.app/)**

The site is deployed on **Vercel** with continuous deployment — every push to the `main` branch automatically triggers a new production build and goes live within a minute or two.

## ✨ Features

- **Hero section** — bold intro with "View Our Work" and "Watch Showreel" calls to action
- **About / The Duo** — introduces both team members, their roles and values
- **Skills & Expertise** — tools and technologies used by the team
- **Web Development** — services and the tech stack used to build digital products
- **Video Editing** — visual storytelling and motion graphics services
- **Featured Projects** — a showcase of the best work across video and web
- **Contact section** and footer
- Fully responsive layout with smooth animations

## 🛠️ Tech Stack

| Category | Tools |
|---|---|
| Framework | React + TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS v4 |
| UI components | Radix UI, shadcn/ui, MUI |
| Animations | Motion |
| Icons | Lucide React, MUI Icons |
| Hosting | Vercel |

## 📁 Project Structure

```
src/
├── app/
│   ├── App.tsx
│   └── components/
│       ├── Navigation.tsx
│       ├── Hero.tsx
│       ├── AboutSection.tsx
│       ├── SkillsSection.tsx
│       ├── WebDeveloperSection.tsx
│       ├── VideoEditorSection.tsx
│       ├── ProjectsSection.tsx
│       ├── ContactSection.tsx
│       ├── Footer.tsx
│       └── ui/            # Reusable UI components
├── styles/               # Tailwind, theme and font styles
└── main.tsx
```

## 🚀 Running Locally

```bash
# 1. Clone the repository
git clone https://github.com/aryan955633/portfolio-website.git
cd portfolio-website

# 2. Install dependencies
npm i

# 3. Start the development server
npm run dev
```

Then open the local URL shown in the terminal (usually http://localhost:5173).

To create a production build:

```bash
npm run build
```

## ☁️ Deployment (Vercel)

This project is hosted on [Vercel](https://vercel.com/):

1. The GitHub repository is connected to a Vercel project.
2. Vercel auto-detects **Vite** — build command `npm run build`, output directory `dist`.
3. Every push to `main` deploys to production; pull requests get their own preview URLs.

## 🎨 Design

The UI was designed in Figma. Original design file: [Portfolio Website Design](https://www.figma.com/design/H3ZTG27ciMCIICfXfxtPJ2/Portfolio-Website-Design).

See [ATTRIBUTIONS.md](./ATTRIBUTIONS.md) for third-party credits.

## 👤 Author

**Aryan** — Full-Stack Web Developer · [GitHub @aryan955633](https://github.com/aryan955633)

⭐ If you like this project, consider giving it a star!
