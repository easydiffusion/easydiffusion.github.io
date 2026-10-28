# Installation

Easy Diffusion runs on Windows, Linux and macOS. The installer sets everything up for you, so you only need to download one file and run it.

1. Go to the [Easy Diffusion releases page](https://github.com/easydiffusion/easydiffusion#installation) and download the installer for your operating system.
2. Run the installer.
3. When the installer finishes, it starts Easy Diffusion and opens your browser at [http://localhost:9000](http://localhost:9000). If the browser does not open by itself, just go to that address.

After that, continue with [How to use](./getting-started/how-to-use.md). To create images you'll need an AI model; see [Custom models](./docs/models/custom-models.md) for where to put model files.

## What gets installed

The installer creates a folder (for example `C:\EasyDiffusion` on Windows) that contains the program and all its data:

* `models/` holds the AI models: `stable-diffusion` for the main image models, `lora` for LoRAs, `embeddings` for embeddings, plus folders for VAE and ControlNet models.
* `renders/` is the default folder where generated images are saved (if you enable auto-save).

You can move your model files elsewhere and point Easy Diffusion at that folder with the `Models Folder` setting. See [Custom models](./docs/models/custom-models.md).

## Requirements

* A GPU is strongly recommended. NVIDIA GPUs work out of the box; AMD and Intel GPUs are supported, see [AMD on Linux](./docs/performance/amd-on-linux.md) and [The v4 engine](./docs/models/v4-engine.md) (which has a lightweight Vulkan backend that works well on AMD, Intel and older GPUs).
* Without a GPU you can render on the CPU (`Use CPU (not GPU)` in the Settings tab), but this is roughly 20 times slower.
* About 10 GB of free disk space for the installer and the AI runtimes. AI model files need additional space (typically 2 to 7 GB each).

## Updating

Easy Diffusion checks for updates when it starts and tells you if a new version is available. To get new features before they are officially released, you can join the [beta channel](./docs/reference/beta-channel.md).

## Installation problems

If the installer fails or Easy Diffusion does not start, please see [Troubleshooting](./docs/troubleshooting.md). If that does not help, copy all the text from the command prompt (or terminal) window and post it on our [Discord server](https://discord.com/invite/u9yhsFmEkB).
