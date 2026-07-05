# 4XQA Buddy

A lightweight React UI application for n8n flow management with a multi-tab experience.

## Features
- Multi-tab flow navigation for QA automation tasks
- Lightweight React + Vite frontend
- Placeholder execution UI ready to connect to n8n or backend endpoints

## Setup
```bash
cd 4xqa-buddy
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Vercel Deployment
This project is ready for Vercel deployment, but I cannot use or store your provided token for security reasons.

To deploy manually:
```bash
cd 4xqa-buddy
npm install
npx vercel login
npx vercel --prod
```

If you want to deploy to a specific Vercel project and domain, run:
```bash
npx vercel --prod --confirm
```

## Notes
- Connect each tab button to your n8n flow webhook or API endpoint for actual execution.
- The frontend is intentionally simple and easy to extend.
