# The v4 engine

The v4 engine is Easy Diffusion's experimental engine, based on [sdkit3](https://github.com/easydiffusion/sdkit/tree/v3).

## How to use

1. Open the `Settings` tab in Easy Diffusion's UI.
2. Select `v4` in the `Engine to use` (Backend) option. See [Engines](./engines.md) for the other engines.
3. Press `Save` and restart Easy Diffusion.

You can also choose the **`Backend platform`** below it: `Auto` (default), or `Vulkan` (experimental).

### Fails to start?

If v4 fails to start, please copy *all* the logs from the command prompt (or terminal) window, and attach it in a post on [our server](https://discord.gg/adCyghfkSv).

Important: Please don't leave out any lines from the logs, since they contain useful information required for investigating the failure.

## Details
It uses [stable-diffusion.cpp](https://github.com/leejet/stable-diffusion.cpp) and [ggml](https://github.com/ggml-org/ggml) under-the-hood, and produces optimized, lightweight builds for the target hardware.

The main benefits of the v4 engine are:

1. Very lightweight: less than 100 MB install footprint, compared to 3 GB+ for Forge and other PyTorch-based engines.
2. Much better for AMD/Intel/Integrated users: avoids the hot mess of ROCm and DirectML, by using a reliable Vulkan backend (that's also used in `llama.cpp`).
3. Opportunity for even faster image generation in the future: this currently uses stock sd.cpp, which has room for further optimization.
4. Support for older GPUs: Vulkan supports older GPUs, especially older AMD GPUs unsupported by ROCm/PyTorch.

## Supported features

* **Reference Images**: an input section in the UI where you can attach one or more images, for vision-guided models (e.g. image editing models like Qwen). The model looks at these images in addition to your prompt. This input is only available on the v4 engine.
* **Scheduler**: the `Scheduler` dropdown from Image Settings is available; see [Samplers](../techniques/samplers.md) for the options.
* **Distilled Guidance**: available for models that use it (e.g. Flux); see [Flux and other new models](./flux-and-newer-models.md).
* **Text Encoder**: available, for models that need a separate text encoder file.

## Limitations and caveats

* The v4 engine is **very experimental**. It may fail to start or produce errors on some hardware, please report with full logs (see above).
* Some models, samplers and upscalers supported by the v3.5 engine are not available on v4 yet.
* Face correction and upscaling options are more limited than on the other engines.
* If v4 doesn't work well for you, switch back to v3.5 in the Settings tab (Save + restart).
