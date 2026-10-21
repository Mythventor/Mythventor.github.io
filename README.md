# mythventor.github.io

Personal portfolio of **Mengpang Xing** — Software Engineer Intern at CME Group and Northwestern CS + Data Science student.

Live at **https://mythventor.github.io**

## Stack

React 18 · Vite · Tailwind CSS · lucide-react

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run lint
```

## Deployment

Every push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which lints, builds, and publishes `dist/` to GitHub Pages. It can also be run manually from the **Actions** tab (`workflow_dispatch`).

To update the resume, replace `src/assets/Mengpang_Xing_Resume.pdf` and push.
