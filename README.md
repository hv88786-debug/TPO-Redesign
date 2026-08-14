# TPO Redesign — GEC Ajmer Training & Placement Cell

A modern, premium redesign of the Training & Placement Cell website for **Government Engineering College, Ajmer (Engineering College Ajmer / ECA)** — built with Next.js, TypeScript, and Tailwind CSS.

**Repo:** [github.com/hv88786-debug/TPO-Redesign](https://github.com/hv88786-debug/TPO-Redesign)

---

## ✨ Features

- Animated Hero section with the real ECA campus photograph and parallax background
- KPI stats + interactive placement trend chart (Recharts)
- Auto-scrolling, pausable "Top Recruiters" logo wall (two-row marquee)
- **Placements 2026 — Recently Placed Students**: a fixed 3×2 highlight grid, straight from the official placement brochure, using neutral illustrated avatars instead of real or fabricated student photos
- Student placement journey timeline
- Success stories, testimonials, gallery, FAQ, and contact sections
- Fully responsive, keyboard-accessible, and respects `prefers-reduced-motion`

## 🛠️ Tech Stack

| Layer      | Technology                                  |
|------------|----------------------------------------------|
| Framework  | [Next.js 15](https://nextjs.org/) (App Router) |
| Language   | TypeScript                                   |
| Styling    | Tailwind CSS + `tailwindcss-animate`         |
| Animation  | Framer Motion                                |
| Charts     | Recharts                                     |
| Icons      | lucide-react                                 |
| UI Primitives | Radix UI (`@radix-ui/react-slot`, `@radix-ui/react-dialog`) |

## 📁 Project Structure

```
tpc-website/
├── app/                  # Next.js App Router pages, layout, global styles
├── components/
│   ├── home/             # Homepage sections (hero, placements, gallery, etc.)
│   ├── layout/            # Shared layout primitives (Section, Container, PageHero)
│   └── ui/                 # Low-level reusable UI components
├── constants/             # All site copy + data (placements, recruiters, testimonials…)
├── hooks/                 # Custom React hooks
├── lib/                    # Utilities, fonts, metadata helpers
├── public/images/          # Campus photos, recruiter logos, gallery, student photos
└── types/                  # Shared TypeScript types
```

## 📊 Data Status

Every content record in `constants/` carries a `status: "verified" | "demo"` field:
- **`verified`** — sourced directly from the official *ECA Placement Brochure 2026-27*
- **`demo`** — illustrative placeholder content awaiting confirmation from the T&P Office (visibly flagged in the UI)

See `constants/placement-roster-2026.ts` and `constants/recruiters.ts` for the current data status of the placement roster and recruiter logo wall.

## 🚀 Getting Started

```bash
# install dependencies
npm install

# run the dev server
npm run dev

# type-check
npm run typecheck

# production build
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

## ☁️ Deployment

This project deploys cleanly to [Vercel](https://vercel.com) — framework is auto-detected (Next.js), no extra configuration needed. Push to `main` and import the repo on Vercel to go live.

## 📬 Contact (Placement Cell)

- **Institute:** Government Engineering College, Ajmer
- **Email:** placements@ecajmer.ac.in
- **Phone:** +91 94600 31242
- **Address:** Government Engineering College, Ajmer, Badliya Chouraha, N.H. 8, Ajmer, Rajasthan

## 👤 Developed by

**Harish Kumar**

- GitHub: [@hv88786-debug](https://github.com/hv88786-debug)
- LinkedIn: [harish-kumar-107161351](https://www.linkedin.com/in/harish-kumar-107161351)
- Instagram: [@hv__harish](https://instagram.com/hv__harish)
- YouTube: [@hvunfilterd](https://youtube.com/@hvunfilterd)
- Email: [hv88786@gmail.com](mailto:hv88786@gmail.com)

Repo: [TPO-Redesign](https://github.com/hv88786-debug/TPO-Redesign)

---

*This is an independent redesign project and is not the official live website of GEC Ajmer's Training & Placement Cell unless deployed and adopted as such.*
