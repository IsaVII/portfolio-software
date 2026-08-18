# Isa Hellström - Portfolio

My personal portfolio site, built to show my move from game development into web development.

🔗 **Live site:** https://IsaVII.github.io/portfolio-software

## About this project

I wanted a portfolio that actually shows how I work, not just a static list of projects. So instead of hardcoding everything, project data lives in JSON files and gets rendered dynamically. I also built a small game from scratch and embedded it on the page, partly as a nod to my background, partly just because it was fun to build.

## Features

- Single-page layout with scroll-spy navigation (Intersection Observer API highlights the section you're currently viewing)
- Project data driven by JSON, so adding or updating a project doesn't mean touching component code
- A custom mini-game built in vanilla JavaScript and embedded as a React component
- Responsive design, works on mobile and desktop
- Styled with Tailwind CSS and some custom CSS

## Tech stack

- React
- Vite
- Tailwind CSS
- Vanilla JavaScript (for the game)

## Running it locally

```bash
git clone https://github.com/IsaVII/portfolio-software.git
cd portfolio-software
npm install
npm run dev
```

The site will be running at `http://localhost:5173`.

## Build

```bash
npm run build
```

## About me

I spent 8+ years developing games and game systems, working as a programmer and technical designer on production teams, including leading programming on a multiplayer co-op title. I'm now applying that same problem-solving and systems thinking to web development.

- LinkedIn: https://linkedin.com/in/isa-hellström-229aa6187/
- Email: isahellstroem@gmail.com
