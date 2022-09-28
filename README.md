# stable-diffusion-ui.github.io

This repo contains the documentation for Stable Diffusion UI.
The source code for Stable Diffusion UI is in [the repo cmdr2/stable-diffusion-ui](https://github.com/cmdr2/stable-diffusion-ui).

The documentation can be found in the gh-pages branch in the docs folder. It is using Jekyll as templating engine and github actions to automatically push the 
content to the web page.
# Important files
- **_config.yml** Central Jekyll configuration file
- **index.html** Landing page of the website. This file only contains the content block, the layout gets added by Jekyll.
- **media/** and **assets/img/** contain images for the content or for the layout respectively
- **_sass/bootswatch/custom** contains the source files for the CSS stylesheets
- **_docs** contains all documentation articles. To add a new documentation, first create a file `abc.md` in this folder, and then go to:
- **_data/docs.yaml** and add the file name (`abc`) to the section that this document belongs to.
- **_docs/index.md** This file is not listed in _data/docs.yaml but is reachable from the navigation bar.

# Github actions
In  `Settings -> Pages`, github actions is configured to publish the page from the branch and the subfolder. 
