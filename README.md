# Chandima Bandara — Engineering Portfolio

Responsive static portfolio for GitHub Pages. No build step or dependencies are required.

## Publish

1. Create a public repository named `chandimabandaranew-cloud.github.io` in the `chandimabandaranew-cloud` account.
2. Upload the contents of this directory (index.html, style.css, app.js, projects.js, assets, and .nojekyll) to the repository root on the `main` branch.
3. In Settings → Pages, select Deploy from a branch → main → / (root), then Save.
4. Wait for GitHub Pages deployment to complete. The intended URL is https://chandimabandaranew-cloud.github.io/.

## Edit

- Text and contact links: `index.html`.
- Project descriptions, categories and image paths: `projects.js`.
- Colours, typography and responsive layout: `style.css`.
- Gallery and filter behaviour: `app.js`.

The CV is available on request through the contact button. The original PDF, which includes third-party referee contact details, is not included in this public website.

## Local preview

Run `python -m http.server 8000 --bind 127.0.0.1` from this directory and open http://127.0.0.1:8000.
