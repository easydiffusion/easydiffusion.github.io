# Saving images and metadata

This page is a reference for getting your images (and their settings) out of Easy Diffusion.

## Auto-saving images

In the Settings tab, enable **`Auto-Save Images`** to save every rendered image automatically:

* **Save Location**: the folder where images are saved.
* **Metadata format**: optionally save the settings used to generate the image, alongside (or inside) it. Options: `none`, `txt` (a plain text file), `json`, `embed` (embedded inside the image file), `embed & txt`, `embed & json`.

The `embed` format puts the full settings inside the image file itself (`PNG`, `WEBP` and `JPEG` are supported). This lets you restore the entire task later, see "Restoring a task from an image" below.

## Downloading images

**One image**: hover over a rendered image in the preview pane and use the buttons on the image toolbar:

* `Download Image`: saves the image file.
* `Download JSON`: saves a JSON file with all the settings used to create the image.

**All images**: the **`Download images`** button at the top of the preview pane opens a bulk-download dialog. You can choose:

* To download everything as a single `ZIP` file.
* To add a folder per job inside the ZIP (organised as a tree).
* To add a JSON metadata file next to each image, containing all the settings used for that image.

## Restoring a task from an image

If an image has embedded settings (saved with the `embed` metadata format), you can reload the whole task from it:

1. Make sure `embed` is enabled in the metadata output format (Settings tab).
2. Drop the image onto the Easy Diffusion UI. The prompt and all settings are restored.
   * If the image is already open in the image editor, use `Ctrl+drop`.

This works with `PNG`, `WEBP` and `JPEG` images that carry embedded settings, including images shared by other people. If you'd rather share settings as a file, see "Exchanging settings as files" below.

## Exchanging settings as files

Instead of relying on embedded metadata, you can save a complete "task" (the prompt plus all the image settings) to a `json` or `txt` file, and load it later by dropping the file onto the Easy Diffusion UI. This makes it easy to share settings in chat: paste them, save to a file, and drop the file into the interface to load.

### JSON format

In JSON, all properties are optional. Only include the properties you want to update when loading the file. Here is an example of the settings produced by Easy Diffusion (the same structure is used for the JSON metadata saved next to your images):

``` json
{
    "numOutputsTotal": 6,
    "reqBody": {
        "prompt": "The Sandman fighting a stapler, Evil",
        "negative_prompt": "text prompt words",
        "width": 448,
        "height": 640,
        "seed": 6380250,
        "num_inference_steps": 50,
        "guidance_scale": 7.5,
        "prompt_strength": 0.8,
        "use_face_correction": false,
        "sampler_name": "euler_a",
        "scheduler_name": "simple",
        "use_stable_diffusion_model": "arcane-diffusion-v3",
        "clip_skip": 1,
        "numOutputsParallel": 1,
        "stream_image_progress": true,
        "show_only_filtered_image": true,
        "output_format": "jpeg"
    }
}
```

Other properties are not included by default, but you can add them to your own JSON files manually and they will be applied if present:

``` json
{
    "reqBody": {
        "use_cpu": false,
        "use_vae_model": "",
        "use_lora_model": ["my-lora"],
        "lora_alpha": 50,
        "distilled_guidance_scale": 3.5,
        "save_to_disk_path": "~/EasyDiffusion/renders/"
    }
}
```

The full list of supported property names (inside `reqBody`) includes: `prompt`, `negative_prompt`, `active_tags` (image modifiers), `inactive_tags`, `width`, `height`, `seed`, `num_inference_steps` (steps), `guidance_scale`, `distilled_guidance_scale`, `prompt_strength`, `init_image`, `mask`, `apply_color_correction` (preserve color profile), `use_face_correction`, `use_upscale`, `upscale_amount`, `sampler_name`, `scheduler_name`, `use_stable_diffusion_model`, `clip_skip`, `tiling` (seamless tiling), `use_vae_model`, `use_controlnet_model`, `control_filter_to_apply`, `control_alpha`, `use_lora_model`, `lora_alpha`, `use_hypernetwork_model`, `hypernetwork_strength`, `numOutputsParallel` (parallel images), `use_cpu`, `stream_image_progress`, `show_only_filtered_image`, `output_format`, `save_to_disk_path`.

### txt format

For txt files, `Width`, `Height` and `Seed` are required, in that order, one per line, and not case sensitive.

Prompts can contain anything, including the words "seeds", "width" and "height". There is no header, quotes, or delimiter marking where the prompt ends. Because of that, the sequence that marks the end of the prompt is a width, height and seed appearing in that order, each followed by a number on its own line.

```
Observing a desolate (landscape of corpses), 17th century japanese painting style
Width: 832
Height: 576
Seed: 2866349
```

The above is the minimum the UI will recognize as valid for import. All the other settings are optional in text format:

```
Steps: 50
Guidance Scale: 15.0
Prompt Strength: 0.8
Use Face Correction: None
Use Upscaling: RealESRGAN_x4plus
Sampler: euler_a
Negative Prompt: text prompt words
Stable Diffusion model: /EasyDiffusion/models/stable-diffusion/v1-5-pruned-emaonly.ckpt
```
