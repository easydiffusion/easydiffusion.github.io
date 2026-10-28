# Easy Diffusion website

This repository hosts the Easy Diffusion website and user documentation, published at
[easydiffusion.github.io](https://easydiffusion.github.io). It is built with
[Zensical](https://zensical.org), a static site generator by the creators of Material for MkDocs.

## Structure

```
docs/
├─ index.md              # Landing page
├─ blog/
│  ├─ index.md           # Blog entry point (paginated post list) at /blog/
│  └─ posts/             # Individual posts; URLs: /blog/<slug>/
├─ installation.md
├─ getting-started/      # First steps: how to use, prompts, image modifiers, UI reference
└─ docs/                 # All reference documentation, under the /docs/ URL prefix
   ├─ models/            # Engines, model types, custom models, SDXL, model merging
   ├─ techniques/        # Image settings: samplers, LoRA, embeddings, ControlNet, ...
   ├─ saving/            # Saving images & metadata, sharing your instance
   ├─ performance/       # Rendering performance, multiple GPUs, xFormers, AMD on Linux
   ├─ reference/         # Custom modifiers, UI plugins, config settings, beta channel
   └─ troubleshooting.md
```

The navigation (sidebar and tabs) is defined explicitly in `zensical.toml`. If you add a new page,
add it to the `nav` list there. Blog posts must live in `docs/blog/posts/` and require `date` and
`slug` metadata. `docs/javascripts/blog-sidebar.js` hides the categories list from the blog sidebar
(category pages and the category links on each post are unaffected).

## Working on the site

Install Zensical (see [zensical.org/docs/get-started](https://zensical.org/docs/get-started/)),
then from this repository:

```sh
zensical serve   # preview at http://localhost:8000, rebuilds as you edit
zensical build   # build the static site into site/
```

## Publishing

The site is built and published to GitHub Pages by
[.github/workflows/ci_deploy_workflow.yml](.github/workflows/ci_deploy_workflow.yml) on every push
to `main`. It installs Zensical, runs `zensical build`, and uploads `site/` as the pages artifact.

## Notes for maintainers

* The documentation was migrated from the project's GitHub wiki
  ([easydiffusion.wiki](https://github.com/easydiffusion/easydiffusion.wiki)), and this repository
  was migrated from Hugo. The blog keeps its previous URL format (`/blog/` post list,
  `/blog/<slug>/` posts). The old wiki URLs and `/tags/...` URLs are no longer served.
* The blog feed also keeps its previous URL: `[project.plugins.rss.feeds_filenames]` writes the
  generated feed to `/atom.xml`, so existing feed readers keep working. (The format is RSS 2.0.)
* The "Help & Community" tab inside the application (`easydiffusion/ui/index.html`) still links to
  the old wiki pages and needs a matching update when the new docs go live (do not change it here;
  it lives in the main app repository).
