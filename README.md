# Reposit

Source for **The Pee Dee File**, a static blog. Plain HTML/CSS/JS, no build step.

## Local preview

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy

Pushes to `main` trigger `.github/workflows/pages.yml`, which publishes the
repo root to GitHub Pages. After the first push to `main`, enable Pages in
**Settings → Pages → Source: GitHub Actions** (one-time, manual).

## Things to swap before going live

| What | Where | Replace |
| --- | --- | --- |
| Plausible domain | every HTML `<head>` | `data-domain="peedeefile.example"` → your domain |
| Buttondown username | every newsletter `<form>` | `YOUR-BUTTONDOWN-USERNAME` → your handle |
| Giscus script | `.comments-placeholder` block on each post | paste the snippet from giscus.app |
| Poster image | `assets/img/gaskins-poster.jpg` | replace placeholder with the real one-sheet |

## Structure

- `index.html`, `about.html`, `archive.html` — top-level pages
- `posts/` — individual articles
- `assets/css/style.css` — shared styles
- `assets/js/main.js` — newsletter submit enhancer
- `assets/img/` — images (poster lives here)
