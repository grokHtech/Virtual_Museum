# Virtual Museum (Sanity Studio)

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

Notes
- Set a valid `projectId` and `dataset` in `sanity.config.js` if you want to connect to a Sanity project (it currently contains `YOUR_PROJECT_ID`).
- If you plan to publish a production build, run `npm run build` and use the `dist` output.

Files changed
- `package.json` — added scripts and dependencies
- `schemaTypes.js` — re-export for `sanity.config.js`
