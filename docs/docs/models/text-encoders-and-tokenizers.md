# Text encoders and tokenizers

Some newer models don't ship with their text encoder inside the main model file. They need one or more **auxiliary model files** next to the diffusion model:

* a **text encoder** (e.g. CLIP-L, CLIP-G, T5-XXL, or an LLM such as Qwen), and
* sometimes an **external tokenizer** (`tokenizer.json`).

Easy Diffusion exposes these as the `Text Encoder` and `Tokenizer` dropdowns in Image Settings. They are usually left empty, and are only needed for the models that require them.

!!! note
    The `Text Encoder` dropdown is available on the **v3.5** and **v4** engines. The `Tokenizer` dropdown is available on the **v4** engine only (sdkit 3.5.1 or newer). See [Engines](./engines.md).

## Text encoders

Text encoders turn your prompt into the numbers that the diffusion model works with. Models like Flux, SD3, Qwen Image and MOSS-Image can use a separately-downloaded encoder file.

### Where to put the files

Put the text encoder file(s) in the `models/text-encoder` folder:

```
EasyDiffusion/
└── models/
    └── text-encoder/
        ├── t5xxl_fp16.safetensors
        ├── clip_l.safetensors
        └── Qwen3VL-8B-Instruct-Q4_K_M.gguf
```

Recognized file types are `.safetensors`, `.sft` and `.gguf`. Refresh the model list with the reload icon next to the `Model` dropdown after adding files.

### How to select them

Pick the file(s) in the `Text Encoder` dropdown in Image Settings. You can add more than one text encoder when a model needs several (e.g. CLIP-L **and** T5-XXL for some Flux models). Models with a built-in text encoder don't need this, so leave the dropdown empty for them.

### Vision files (llm_vision)

Some image-editing models use a *vision* encoder so they can look at the reference image you attach, not just your prompt. These are the `mmproj` files (e.g. `mmproj-Qwen3VL-8B-Instruct-F16.gguf`) that accompany a multimodal LLM.

Vision files are handled like any other text encoder: put them in `models/text-encoder`, then select them in the `Text Encoder` dropdown alongside the main LLM encoder. They are only used by vision-capable models on the **v4** engine, together with the [Reference Images](./v4-engine.md) input. If you load a vision file for a model that doesn't use one, it is simply ignored.

!!! tip
    For image editing with a GGUF text encoder (e.g. Qwen Image 2.1), download the matching `mmproj` file from the same repository and select it in the `Text Encoder` dropdown.

## Tokenizers

A tokenizer splits your prompt into the tokens that a text encoder reads. Most encoders carry their tokenizer inside the model file, so you rarely need this.

Some models use a text encoder whose vocabulary differs from the one baked into the model. For those, you must download the matching `tokenizer.json` and point Easy Diffusion at it. A common example is **MOSS-Image**, which uses Qwen3.5 9B and needs a `tokenizer.json` that differs from the embedded Qwen tokenizer.

### Where to put the files

Put the tokenizer file in the `models/tokenizer` folder:

```
EasyDiffusion/
└── models/
    └── tokenizer/
        └── tokenizer_qwen3.5.json
```

Tokenizer files use the `.json` extension. Refresh the model list with the reload icon next to the `Model` dropdown after adding files.

### How to select them

Pick the file in the `Tokenizer` dropdown in Image Settings. Leave it empty when the model's text encoder already includes a compatible tokenizer.

If the model still produces garbled output, or the logs mention a tokenizer mismatch, double-check that the `tokenizer.json` matches the text encoder and model you're using. The tokenizer must come from the same release as the text encoder.

## Related pages

* [The v4 engine](./v4-engine.md): reference images and other v4-only features.
* [Flux and other new models](./flux-and-newer-models.md): which new models need a separate text encoder.
* [Custom models](./custom-models.md): sharing the `models/` folder with other UIs.
