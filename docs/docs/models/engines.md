# Engines

Easy Diffusion supports several AI "engines", which do the actual work of turning your prompt into an image. You can pick the engine in the Settings tab, under **`Engine to use` (Backend)**:

* **v2.0**: the original engine, kept for compatibility.
* **v3.0**: the "diffusers" engine. Supports SDXL, ControlNet, LoRAs, custom VAEs and more.
* **v3.5**: the modern engine (based on Forge). Supports Flux, SD3, Lycoris, a wider choice of samplers and upscalers, plus the `Scheduler` and `Distilled Guidance` controls.
* **v4**: a very experimental, lightweight engine (based on stable-diffusion.cpp). See [The v4 engine](./v4-engine.md) for details.

## How to switch engines

1. Open the `Settings` tab.
2. Select the engine in the `Engine to use` dropdown (this is the `Backend` setting).
3. Press `Save` and restart Easy Diffusion.

Different engines may support different models and features, for e.g. Flux and SD3 models need the v3.5 (or v4) engine. Each engine may also show or hide a few options in the Image Settings panel, as noted below and on the individual feature pages:

* `Scheduler`: available on v3.5 and v4. See [Samplers](../techniques/samplers.md).
* `Distilled Guidance`: available on v3.5 and v4 (used by Flux models). See [Flux and other new models](./flux-and-newer-models.md).
* `Text Encoder`: available on v3.5 and v4. See [Text encoders and tokenizers](./text-encoders-and-tokenizers.md).
* `Tokenizer`: available on v4 only. See [Text encoders and tokenizers](./text-encoders-and-tokenizers.md).
* `Reference Images`: available on v4 only. See [The v4 engine](./v4-engine.md).
* `Enable VAE Tiling`: available on the v3.x engines. See [VAE](../techniques/vae.md).
* `Hypernetwork`: classic (v2.0) engine only.

## Backend platform

Below the engine selector you'll find the `Backend platform` option:

* **Auto** (default): Easy Diffusion picks the platform that suits your hardware.
* **Vulkan** (experimental): renders using the Vulkan graphics API. This is mainly useful for AMD, Intel and older GPUs, where it avoids the usual ROCm/DirectML complications. It is used by the v4 engine; see [The v4 engine](./v4-engine.md).

## Choosing an engine

* **v3.5** supports the newest models (Flux, SD3, Lycoris), more samplers and more upscalers, and gets the newest features.
* **Older AMD / Intel / low-VRAM hardware**: try the v4 engine, which has a very small footprint and a Vulkan backend.
* **v2.0 and v3.0** are kept for compatibility with older setups.
