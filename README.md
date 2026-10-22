# mythventor.github.io

Personal portfolio of **Mengpang Xing** — Software Engineer Intern at CME Group and Northwestern CS + Data Science student.

Live at **https://mythventor.github.io**

## Stack

React 19 · Vite 8 · Tailwind CSS 4 · lucide-react · pnpm

## Development

```bash
pnpm install
pnpm dev         # local dev server
pnpm build       # production build into dist/
pnpm lint
```

## Deployment

Every push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which lints, builds, and publishes `dist/` to GitHub Pages. It can also be run manually from the **Actions** tab (`workflow_dispatch`).

To update the resume, replace `src/assets/Mengpang_Xing_Resume.pdf` and push.
