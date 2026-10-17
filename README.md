# Portfolio Website

Malavya Raval's personal portfolio, live at [malavyaraval.tech](https://malavyaraval.tech).
Built with React, Vite, Tailwind CSS v4 and framer-motion.

## Development

```bash
npm install --legacy-peer-deps
npm run dev       # http://localhost:5173
npm run lint
npm run build     # production build in dist/
npm run preview   # serve the production build
```

`--legacy-peer-deps` is required because ESLint 10 is newer than the peer range declared by
`eslint-plugin-react-hooks`.

## Structure

```
src/
  data/          site content: projects, skills, achievements, social links
  components/    page sections (Header, Hero, About, ProjectsSection, SkillsSection, Footer)
                 and animated widgets (InteractiveBackground, GlitchName, CategorySkills)
  lib/motion.js  shared animation presets
  index.css      global styles
public/CNAME     custom domain, copied into every build
```

Content changes (projects, skills, links) only need edits in `src/data/`.

`src/index.css` intentionally keeps an unlayered `* { margin: 0; padding: 0 }` reset. In
Tailwind v4 it overrides the margin and padding utilities, so components set spacing with
inline styles.

## Deployment

Every push to `main` builds the site and publishes `dist/` to the `gh-pages` branch through
GitHub Actions (`.github/workflows/deploy.yml`). `npm run deploy` publishes a local build
(`npm run build` first) the same way.
