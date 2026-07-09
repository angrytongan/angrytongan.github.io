# angrytongan.github.io

Personal site (df.id.au). Hugo static site, PaperMod theme, deployed to
GitHub Pages via GitHub Actions on push to `develop`. See README.md for
commands.

## Structure

- `content/` — all pages. `recreation/yoe-year1-review/` and
  `yoe-year2-review/` are page bundles: each carries its own `charts/*.js`
  (chart-option builders), a barrel `charts.js`, and images alongside
  `index.md`. `yoe-year2-review` imports `datetime.js` from
  `yoe-year1-review` across bundles — keep them siblings.
- Charts render via a self-hosted ECharts UMD build at
  `static/vendor/echarts/echarts.min.js` (no npm/CDN dependency). Each review
  page loads it with a plain `<script>` tag, then one `<script
  type="module">` block at the bottom calls `echarts.init(...).setOption(...)`
  per chart, importing the page's `charts.js` barrel.
- `layouts/index.html` — custom home page, overrides PaperMod's default list
  template to show Projects/Recreation/Resume as cards.
- `layouts/projects/list.html` — custom section list for `/projects/`, reads
  a `projects:` front-matter array (title/url/description) since those are
  external links, not child pages.
- `layouts/_partials/extend_head.html` — PaperMod's head-injection override
  point; carries the GoatCounter analytics script tags.

## Notes

- No Node/npm tooling — this was migrated off Observable Framework. Don't
  reintroduce a `package.json` unless there's a real reason.
- Theme is a git submodule (`themes/PaperMod`); don't edit it in place —
  overrides go in `layouts/` at the repo root, which Hugo shadows theme
  templates with.
