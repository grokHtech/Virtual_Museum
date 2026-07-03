# Virtual Museum (Sanity Studio)

[![CI](https://github.com/grokHtech/Virtual_Museum/actions/workflows/ci.yml/badge.svg)](https://github.com/grokHtech/Virtual_Museum/actions/workflows/ci.yml)

Minimal instructions to run the local Sanity studio included in this workspace.

Prerequisites
- Node.js (14+) — newer Sanity versions may require Node 20+; upgrade if you see compatibility warnings.
- `npm` available in your PATH

Quick start
1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open the Studio in your browser:

http://localhost:3333/

**Notes**
- **Local config:** `sanity.config.js` currently contains a placeholder project ID (`grokhtech-virtual-museum`). Replace it with your real Sanity `projectId` and `dataset` to connect to your project.
- **Production build:** run `npm run build` and use the `dist` output.
- **CORS:** If you deploy the Studio (example below), add the deployed domain to your Sanity project's CORS origins so the Studio can communicate with the API.

Push to GitHub

1. Create a repository on GitHub (or use the `gh` CLI):

```bash
# using GitHub CLI (recommended if installed)
gh repo create grokHtech/Virtual_Museum --public --source=. --remote=origin --push

# or manually add a remote and push:
git remote add origin https://github.com/grokHtech/Virtual_Museum.git
git branch -M main
git push -u origin main
```

Replace `OWNER/REPO` with your GitHub username and repository name.

Files changed
- `package.json` — added scripts and dependencies
- `schemaTypes.js` — re-export for `sanity.config.js`

Live demo

- Production (Vercel): https://dist-d8acfbxov-hlabcrea-8-t.vercel.app
- Aliased: https://dist-steel-eight-79.vercel.app
