# Publishing Repository

This directory contains the generated output of the Hugo site and is currently backed by its own Git repository for publishing to GitHub Pages.

Treat this directory as deploy output, not as the source of truth for the site.

Source of truth:

- Hugo configuration: `../config.yaml`
- Content: `../content/`
- Layout overrides: `../layouts/`
- Documentation: `../docs/`

If you need to change the site, change the Hugo source first and regenerate `public/`.
