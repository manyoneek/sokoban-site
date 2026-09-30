# Soko Moving Co. marketing site

Static, responsive site using the approved Shipaton video's teal/cream/gold palette, animated type, floating boxes, fanned puzzle layouts and real app captures. Native CSS/IntersectionObserver animations; no runtime dependencies or analytics.

## Local preview and checks

```sh
python3 -m http.server 8768 --bind 127.0.0.1
npm install
npm test
```

Tests use an installed Chrome by default (`CHROME` overrides its path). `SITE_URL` selects a deployed URL. Checks cover 320/390/768/1024/1440px, loaded images, horizontal overflow, anchors, motion pause, reduced motion, no-JavaScript content and the privacy page. Reports live in `docs/site-checks.json`; preview images go to `/tmp/soko-site-*-verified.png`.

## Hosting

Primary: Railway project `Soko Moving Co Website` (`3ec8b5c1-90b4-4be5-93e2-081681a931fc`), service `web` (`99d388e6-2559-4f19-9f6f-014ba5973aad`). Nginx listens on 8080. Public hostname: https://web-production-9a7dc.up.railway.app

Deploy from this directory with `railway up --service web --detach`; check service status and `/health`, then run the browser checks against the public URL. Docker copies only public files, not docs/tests/git. No database, app backend, user accounts, email collection, or paid plugins. Custom domain: https://sokomoving.co (Cloudflare Registrar/DNS, Railway hosting).

The existing GitHub Pages support/privacy URLs remain available. `privacy.html` and `terms.html` are hosted here; the Terms page retains Apple’s standard EULA as the governing app license. Legal copy is archived in `docs/legal-copy.md`. Remote legal-link update receipts are kept in the game repo under `docs/legal-links-20260928/`.

## Copy and release updates

`index.html` is the authoritative source; `docs/copy.md` records its readable text and links. Save future copy edits in both. Do not promise all future content is free. The current CTA is **Download on the App Store**, linking to https://apps.apple.com/app/soko-moving-co/id6783096217 for the public iPhone, iPad, and Mac release.

No Suno music is published here. `assets/gameplay.mp4` is an audio-free excerpt from actual gameplay, not the music-led promotional video. The approved video remains in the main game project's Shipaton archive pending music-rights resolution.

Domain shortlist and prices: `docs/domains.md`. For future custom-domain changes, add domains using `railway domain --service web --port 8080 DOMAIN`, apply the exact returned DNS records, verify HTTPS, and update canonical/Open Graph URLs. Do not guess DNS targets or change registrar nameservers unnecessarily.

## Asset provenance

Source repository: `manyoneek/sokoban-ios`, `docs/shipaton-2026/motion/public/` (prepared from actual app captures), including corrected completion card and native Mac controls. Website derivatives are WebP at display-appropriate sizes and a muted H.264 gameplay clip. Brand box SVG follows the approved motion artwork. Microban credit is retained in the footer. No third-party stock assets or external fonts.

## Custom domain — 2026-09-29

Registered `sokomoving.co` via Cloudflare for USD 30 for one year, expiring September 29, 2027. Auto-renew enabled at current USD 30/year (scheduled August 30, 2027).

Railway custom-domain ID: `254753d0-04db-452d-9f6d-35ff2cb1395a`, service `web`, port 8080. Apex CNAME points to `vcnywfuu.up.railway.app`, DNS-only, automatic TTL. Railway ownership TXT is stored in Cloudflare; retrieve current required value with `railway domain status sokomoving.co --json`.

The existing Railway hostname and legal URLs remain available. `www` is not configured: Railway rejected a second custom hostname due to the current plan limit; no paid upgrade was made.
