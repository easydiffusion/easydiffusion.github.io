# Flux and other new models

Newer models, **Flux**, **SD3** and **Lycoris**, work on the **v3.5 engine** (the modern Forge-based engine). Make sure `Engine to use` is set to `v3.5` in the Settings tab (see [Engines](./engines.md)), then `Save` and restart.

## Where to put the model files

Download the model file and put it into the `models/stable-diffusion` folder (or set the `Models Folder` in the Settings tab to an existing folder of models, see [Custom models](./custom-models.md)). Then click the refresh icon next to the Model dropdown.

* **Flux**: use the full model (`flux_dev` / `flux_schnell`) or one of its fine-tunes.
* **SD3**: SD3 and SD3.5 model files.
* **Lycoris**: Lycoris files go into the `models/lora` folder, and are used like LoRAs (see [LoRA](../techniques/lora.md)).

Some Flux models need a separate text encoder file, if so, select it in the `Text Encoder` dropdown in Image Settings (models with a built-in text encoder don't need this). See [Text encoders and tokenizers](./text-encoders-and-tokenizers.md).

## Settings that matter for these models

* **Scheduler**: see [Samplers](../techniques/samplers.md). `Simple` and `SGM Uniform` are commonly used with Flux.
* **Distilled Guidance**: this replaces the usual "Guidance Scale" for Flux models. It controls how strongly the model follows the prompt, but on a different scale. Lower values (around 1 to 4) are typical, with `3.5` a common starting point for flux_dev.
* **Guidance Scale**: hidden when a model doesn't use it (e.g. Flux), shown otherwise.
* **Inference Steps**: flux_dev usually wants 20-30 steps; flux_schnell is designed for very few steps (around 4).
* **Sampler**: for Flux, plain `euler` is a common choice.

## Compatibility tips

Easy Diffusion shows in-app tips when a selection isn't well-suited for a Flux (or Chroma) model:

* *"This sampler does not work well with Flux!"*, e.g. when `euler_a` is selected. Try a non-ancestral sampler like `euler`.
* *"This scheduler does not work well with Flux!"*, shown for `Automatic`, `Uniform`, `Turbo` and the `Align Your Steps` schedulers.
* *"This scheduler needs 15 steps or more"*, shown for `Karras`, `Exponential` and `Polyexponential` when fewer than 15 steps are set.

If you see a tip, adjust the sampler or scheduler (or raise the step count) until it disappears.
