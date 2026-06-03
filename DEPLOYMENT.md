# NYC Design — deployment

**GitHub:** https://github.com/bearllc555-spec/nyc-design

**Design source:** `001-website-prompts/002-cursor-prompt.txt` (VEX video hero — React + Vite static build)

## Cloudflare Pages

| Environment | Git branch | Preview URL |
|-------------|------------|-------------|
| **Dev (sandbox)** | `dev` | https://dev.nyc-design.pages.dev |
| **Production** | `main` | https://nyc-design.pages.dev |

- **Pages project:** `nyc-design`
- **URL mode:** `root` (single-page app at `/`)
- **Build output:** `./dist` (Vite production build)
- **Account ID:** `e0f6f68f26f8a26a75eaa793385019ef`

Workflow: `.github/workflows/deploy.yml` — builds on push to `main` and `dev`, sets `VITE_SITE_URL` per branch in the workflow file (not empty repo variables), deploys with Wrangler.

### Branch workflow

1. Day-to-day work on **`dev`** — pushes auto-deploy to the dev preview URL.
2. Merge to **`main`** when ready for production preview / custom domain.

### GitHub Actions secrets

Configured on the repo (do not commit tokens):

| Secret | Purpose |
|--------|---------|
| `CLOUDFLARE_API_TOKEN` | API token with Cloudflare Pages edit permission |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare account ID |

### Manual deploy (local)

```powershell
cd c:\Users\thede\OneDrive\Documents\001-cloudflare\004-nyc-design
npm run build
$env:CLOUDFLARE_ACCOUNT_ID = "<your-account-id>"
# Set CLOUDFLARE_API_TOKEN in the environment
npx wrangler pages deploy ./dist --project-name=nyc-design --branch=dev
```

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173
