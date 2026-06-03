# NYC Design

Standalone marketing hero (VEX-style liquid glass + full-screen video) built with **Vite**, **React 19**, and **Tailwind CSS**, deployed to **Cloudflare Pages**.

## Stack

- Vite 7 + React 19 + TypeScript
- Tailwind CSS 3
- Cloudflare Pages + GitHub Actions

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build & preview

```bash
npm run build
npm run preview
```

Static output is written to `dist/`.

## Deploy

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for branch URLs and secrets.

| Branch | Cloudflare preview |
|--------|-------------------|
| `dev` | https://dev.nyc-design.pages.dev |
| `main` | https://nyc-design.pages.dev |

1. Work on **`dev`**; merge to **`main`** for production preview.
2. GitHub secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.
3. Push — Actions deploys to Pages project **nyc-design**.

## Source

Hero spec: `../001-website-prompts/002-cursor-prompt.txt` (video URL, Inter typography, animated heading, liquid glass navbar).
