# SPECTRE Website — Homepage Starter

Responsive React + Vite starter for the SPECTRE clan website. It recreates the supplied homepage reference using the provided logo and background assets.

## Run locally

1. Install Node.js LTS from https://nodejs.org/
2. Open this folder in a terminal.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL printed by Vite.

To check a production build, run `npm run build`.

## Publish to GitHub

Create a new repository named `spectre-website` on GitHub. Do not initialize it with a README or license if you plan to push this folder as-is. Then, from this folder:

```bash
git init
git add .
git commit -m "Build SPECTRE homepage starter"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/spectre-website.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. Or use GitHub Desktop and choose **Add an Existing Repository** for this folder, then **Publish repository**.

## Deploy to Vercel

1. Sign in at https://vercel.com/ using GitHub.
2. Choose **Add New → Project**.
3. Import `spectre-website`.
4. Vercel should detect Vite automatically. Build command: `npm run build`; output directory: `dist`.
5. Click **Deploy**. Later pushes to `main` trigger new deployments.

## Current status

- Homepage visual prototype: included.
- Responsive navigation: included.
- Discord button: prototype dialog only, not connected to OAuth yet.
- Announcement content and statistics: placeholder data.
- Leadership, scrim, join, events, database, and access control: not yet connected.

## Important security note

GitHub Pages and Vercel host frontend files, but OAuth secrets and Discord bot tokens must stay on a trusted backend/serverless function. Never place private credentials in React code or any `VITE_` environment variable. The protected pages must be secured by backend session and role checks, not just by hiding frontend routes.
