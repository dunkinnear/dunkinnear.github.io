# Duncan Kinnear — Personal Site

A personal blog and portfolio site for [Duncan Kinnear](https://dunkinnear.github.io/), built with [Hugo](https://gohugo.io/) and the [PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme. Hosted on GitHub Pages via GitHub Actions.

## Stack

- **Static site generator:** Hugo (extended)
- **Theme:** PaperMod (Git submodule at `themes/PaperMod`)
- **Hosting:** GitHub Pages
- **Deployment:** GitHub Actions (`.github/workflows/deploy.yml`) — auto-deploys on push to `master`

## Local development

1. Install [Hugo extended](https://gohugo.io/installation/)
2. Clone the repo with submodules:
   ```bash
   git clone --recurse-submodules https://github.com/dunkinnear/dunkinnear.github.io.git
   ```
3. Run the local dev server:
   ```bash
   hugo server
   ```
4. Open [http://localhost:1313](http://localhost:1313)

## Deployment

Push to `master` — GitHub Actions will build and deploy automatically.
Make sure your repo's **Settings → Pages** source is set to **GitHub Actions**.
