[![Deploy Hugo site to Pages](https://github.com/angrytongan/angrytongan.github.io/actions/workflows/hugo.yaml/badge.svg)](https://github.com/angrytongan/angrytongan.github.io/actions/workflows/hugo.yaml)

# angrytongan.github.io

Personal site (df.id.au), built with [Hugo](https://gohugo.io) and the
[PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme, deployed to
GitHub Pages via GitHub Actions.

| Command       | Description                          |
| ------------- | ------------------------------------- |
| `make server` | Run the local Hugo dev server.        |
| `make build`  | Build the site into `public/`.        |
| `make clean`  | Clear out `public/` and `resources/`. |

The theme lives at `themes/PaperMod` as a git submodule, so clone with:

```shell
% git clone --recurse-submodules git@github.com:angrytongan/angrytongan.github.io.git
```

(or run `git submodule update --init` after a normal clone).

## Deploy

Feature branches merge straight into `master`. Pushing to `master` triggers
`.github/workflows/hugo.yaml`, which builds the site with Hugo and deploys
`public/` to GitHub Pages. There's no manual build or `docs/` commit step —
CI handles it.
