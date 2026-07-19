# demo-jj-fencing

Sweet Dreams sales demo for **JJ Fencing & Construction LLC** — Appleton / Fox Valley, WI.

Forked from `demo-south-lake-fence` and fully rebranded (name, palette, typography, logo, geography, climate copy). Same Next.js 16 / React 19 / Tailwind v4 codebase — no logic changes.

## Dev
```bash
npm install
npm run dev   # http://localhost:3000
```

## Rebrand surface (if you fork this again)
- `src/lib/site.ts` — all business content
- `src/app/globals.css` — palette (CSS vars)
- `src/app/layout.tsx` — fonts + metadata
- `src/lib/media.ts` — logo + image + video refs
- `public/logo-*.svg`, `src/app/icon.svg` — brand marks

## Media notes
- Imagery + scroll frames + hero film are reused from the South Lake CDN (Supabase + Cloudflare Stream).
- The hero film’s final logo-reveal still shows the South Lake mark — regenerate that ~1s tail with the JJ logo (Higgsfield → Cloudflare) for a 100% clean rebrand.
- Logos are clean vector placeholders; swap for a Higgsfield raster set for final polish.
