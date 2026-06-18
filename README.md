# Aegis Compliance OS — Website

Static site for aegiscompli.tech, hosted on GitHub Pages.

## Stack
- Static HTML / CSS / JS — no build step required
- Fonts: EB Garamond (Google Fonts) + Georgia (system)
- Deployed via GitHub Pages from `main` branch root

## Structure
```
/
├── index.html              # Home
├── css/
│   └── kanea.css           # Full brand stylesheet
├── js/
│   └── components.js       # Shared nav + footer
├── images/
│   ├── KANEA_logo.svg
│   ├── KANEA_logo_dark.svg
│   └── KANEA_logo_emerald.svg
└── pages/
    ├── trident.html
    ├── stars.html
    ├── aurum.html
    ├── team.html
    └── contact.html
```

## Deployment
Push to `main` branch. GitHub Pages serves from root automatically.

## DNS (Hostinger → GitHub Pages)
Add these records in Hostinger DNS panel:

| Type  | Name | Value                  |
|-------|------|------------------------|
| A     | @    | 185.199.108.153        |
| A     | @    | 185.199.109.153        |
| A     | @    | 185.199.110.153        |
| A     | @    | 185.199.111.153        |
| CNAME | www  | dmbreaux-crypto.github.io |

Then in GitHub repo Settings → Pages → Custom domain: `aegiscompli.tech`
Enable "Enforce HTTPS" after DNS propagates (15 min – 2 hrs).

## Local preview
```bash
cd kanea-site
python3 -m http.server 8000
# open http://localhost:8000
```
