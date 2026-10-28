# UI reference

## Input

![image](https://github.com/easydiffusion/easydiffusion/assets/844287/ad9e8d5f-44f4-44ed-8da9-5b45c3e44ea1)

* **Prompt**: Describe the image that you want to create. E.g. `photograph of an astronaut riding a horse`.

* **Load from a file** (optional): Load a prompt from a .txt file. This is useful for creating multiple tasks. Please put one prompt per line.

* **Negative Prompt** (optional): Describe what to *avoid* when rendering your image. E.g. `bad hands, grainy, fog`.

* **Negative Embedding** (optional, inside the Negative Prompt section): Add embedding models that teach the AI to *avoid* a concept. Read more about [Embeddings](../docs/techniques/embeddings.md).

* **Initial Image** (optional): The image that guides the AI. Three buttons:
  * `Browse`: choose an image from your PC.
  * `Draw`: open the image editor to sketch a fresh initial image.
  * `Inpaint`: open the image editor to draw a mask for inpainting.
  * You can also drag & drop an image onto the UI, or paste it with `Ctrl+V`. Read more about [Inpainting](./inpainting.md).
  * **Preserve color profile**: keeps the original colors of the initial image while rendering; helps during inpainting.
  * **Strict Mask Border**: prevents the AI from changing the area outside the inpainting mask.

* **Reference Images** (optional; v4 engine only): attach one or more images for vision-guided models, e.g. for image editing models like Qwen. The model looks at these images in addition to your prompt. See [The v4 engine](../docs/models/v4-engine.md).

* **Image Modifiers** (optional): A collection of useful words that guide the AI to make images in a particular style, e.g. "line art". Click to add, click again to remove, right-click to temporarily disable, and use `Ctrl+Mouse Wheel` over a selected modifier to adjust its weight. Read more about [Image modifiers](./image-modifiers.md).

* **Embeddings** (optional): A collection of words whose meaning you can customize by downloading special files to the `models/embeddings` folder. Read more about [Embeddings](../docs/techniques/embeddings.md).

## Image Settings

![image](https://github.com/easydiffusion/easydiffusion/assets/844287/3dfe1cf6-2d50-4b68-b1cd-7549da691160)

* **Seed**: A number that will be used to randomize your image. If you use the same number, the same image will be generated. Tick the checkbox to use a random seed each time.

* **Number of Images**: 
  * (total): How many images are to be generated in total.
  * (in parallel): How many images are to be generated at the same time.

* **Model**: Select the Stable Diffusion model which will be used to determine how to render your image. The dropdown is searchable, so you can just start typing to filter. The refresh icon re-scans the models folders. Read more about [Custom models](../docs/models/custom-models.md).

* **Clip Skip**: Advanced topic. Read more about [Clip skip](../docs/techniques/clip-skip.md).

* **ControlNet Image**: Advanced topic. Read more about [ControlNet](../docs/techniques/controlnet.md).

* **Custom VAE**: Advanced topic. Read more about [VAE](../docs/techniques/vae.md).

* **Text Encoder** (v3.5 / v4 engines only): For models that need a separate text encoder file (e.g. some Flux models), including vision `mmproj` files. Usually left empty. Read more about [Text encoders and tokenizers](../docs/models/text-encoders-and-tokenizers.md).

* **Tokenizer** (v4 engine only): For models that need an external `tokenizer.json` (e.g. MOSS-Image). Usually left empty. Read more about [Text encoders and tokenizers](../docs/models/text-encoders-and-tokenizers.md).

* **Sampler**: The technique used by the AI to create the image. Read more about [Samplers](../docs/techniques/samplers.md).

* **Scheduler** (v3.5 / v4 engines only): Controls how the generation steps are spaced out. Read more about [Samplers](../docs/techniques/samplers.md).

* **Image Size**: Select what the resolution of the image should be. You can click the exchange icon ![image](https://github.com/easydiffusion/easydiffusion/assets/844287/683b1799-5ad7-4fed-a8d4-7d5af82d4f84) to exchange the width and height values.
  * The settings icon ![image](https://github.com/easydiffusion/easydiffusion/assets/844287/6897a367-0754-4e7c-b8d1-026ad01df9b6) opens the advanced sizes popup, with:
    * Custom width/height entry.
    * A **Resize** slider and quick buttons to enlarge the current size (×0.5, ×1.2, ×1.5, ×2, ×3).
    * **Recently used** sizes.
    * **Common sizes** lists.

* **Inference Steps**: Stable Diffusion works by generating images in multiple steps. The number of steps is what's called `Inference Steps`. The more steps you draw, the more the AI gets to modify the image. Read more about [inference steps](https://getimg.ai/guides/interactive-guide-to-stable-diffusion-steps-parameter).

* **Guidance Scale**: Controls how strongly the AI should follow your prompt. Read more about [guidance scale](https://getimg.ai/guides/interactive-guide-to-stable-diffusion-guidance-scale-parameter). Hidden for models that don't use it (e.g. Flux).

* **Distilled Guidance** (v3.5 / v4 engines only): The Flux equivalent of the guidance scale. See [Flux and other new models](../docs/models/flux-and-newer-models.md).

* **Prompt Strength** (only with an initial image): Also known as "Denoising Strength" in other UIs. Controls how much the AI may change the initial image. Lower values stay closer to the input image.

* **LoRA**: Select the LoRA model to use, and change the number to alter the strength of its effect. Read more about [LoRA](../docs/techniques/lora.md).

* **Hypernetwork** (v2.0 engine only): Selects a hypernetwork model, with a strength control. Hypernetworks are an older alternative to LoRAs.

* **Seamless Tiling**: Generates repeatable images, for e.g. for repeating textures in games or artwork as backgrounds. Read more about [Seamless tiling](../docs/techniques/seamless-tiling.md).

* **Output Format**: To select the file format of the rendered image. Can be either `JPEG`, `WEBP`, or `PNG`.
  * **Lossless** (WEBP only): Saves the WEBP image without any quality loss.

* **Image Quality**: The quality of the saved image (higher quality = larger file).

* **Enable VAE Tiling** (v3.x engines): Renders the image in tiles to reduce VRAM usage, at a small speed cost. Useful for large images on smaller GPUs. See [VAE](../docs/techniques/vae.md).

* Tips: With Flux (or Chroma) models selected, tips appear under the Sampler and Scheduler dropdowns if the current combination isn't well-suited, see [Flux and other new models](../docs/models/flux-and-newer-models.md).

## Render Settings

* **Show a live preview**: Shows a live preview of the image while it's rendering. Otherwise the image will only be displayed when the image has finished rendering. This is off by default (it also slightly slows down rendering).

* **Fix incorrect faces and eyes**: Uses GFPGAN or CodeFormer - a face restauration algorithm to fix glitches in faces & eyes. With CodeFormer you can set a fidelity slider, and there's an `Upscale Faces` sub-option to run the face fix at an enlarged size for better results.

* **Upscale image**: Increases the resolution of the final image by 2x or 4x.
  * `RealESRGAN_x4plus` is general-purpose
  * `RealESRGAN_x4plus_anime_6B` is optimized for anime
  * `Latent Upscaler` (2x) has a **steps** setting, and is a fast option for the diffusers engines
  * The v3.5 engine offers additional upscalers, e.g. `ESRGAN_4x`, `Lanczos`, `Nearest`, `ScuNET GAN`/`PSNR`, and `SwinIR_4x`.

* **Show only corrected image**: Shows only the final image, e.g. the scaled up/fixed image. Disable to see both the images, i.e. the image before applying "fix faces" or "upscale", as well as the final image.

## Preview pane

The tools at the top of the image preview area:

* **Clear All**: removes all rendered images from the preview. With `Confirm dangerous actions` enabled in the Settings tab, it asks for confirmation before deleting anything.
* **Download images**: opens the bulk-download dialog (ZIP, per-job folders, per-image JSON metadata). See [Saving images and metadata](../docs/saving/saving-and-metadata.md).
* **Thumbnail size**: a slider to change the size of the image thumbnails.
* **Auto-scroll**: keeps the preview scrolled to the newest image.
* **Undo**: removes the most recently rendered image from the preview.
* The task-queue buttons next to the `Make Image` button: **Stop All** (clear the queue), **Pause All** (pause after the current image), and **Resume**. See [How to use](./how-to-use.md).

## Buttons on the generated image 
This is visible if the user hovers with the mouse over a rendered image.

![image](https://github.com/easydiffusion/easydiffusion/assets/844287/bc17b3c8-b5f7-4454-96cf-0457741e6aa2)

* **Seed**: The seed this particular image used.

* **Use as Input**: Sets this image as the initial image to use for the next task (and matches the width/height to the image).

* **Use for ControlNet**: Sets this image as the image to use for ControlNet. Read more about [ControlNet](../docs/techniques/controlnet.md).

* **Download Image** / **Download JSON**: Downloads the image, or the settings used to generate the image (in the JSON format).

* **Make Similar Images**: Generates 5 images that look similar to this image.

* **Draw another 25 steps**: Generates the same image for another 25 inference steps.

* **Undo** / **Redo**: Undoes (or re-applies) the last applied filter on this image, e.g. a face-fix or upscale.

* **Upscale**: Scales up the resolution of the generated image by 2x or 4x (based on what's selected in `Image Settings`).

* **Fix Faces**: Fixes incorrect faces and eyes (using the model selected in `Image Settings`).

* **Use as Thumbnail**: Appears when the image used an embedding or LoRA. Saves the image as the thumbnail for that model. See [Embeddings](../docs/techniques/embeddings.md) / [LoRA](../docs/techniques/lora.md).

* **Download tiled image** (bundled UI plugin): Creates an image with repeating copies of the generated image. You can configure the number of times the image will repeat. See [Ui Plugins](../docs/reference/ui-plugins.md).

## Image popup (full-screen view)

Click on a rendered image to open it full-screen. Use the back/forward arrows to move through the images, or the keyboard: `←` / `→` to navigate and `Esc` to close.

## Settings

![image](https://github.com/easydiffusion/easydiffusion/assets/844287/6c5d520e-b6fe-493c-9535-4a83ec1736b6)

* **Theme**: A color theme for the UI.

* **Auto-Save Images**: Automatically saves the generated images (and optionally the settings used) to a folder in your PC.
  * **Save Location**: The folder where the images will be saved.
  * **Metadata format**: The format to optionally save the settings used to generate the image. Options: `none` (i.e. metadata won't be saved), `txt` (a plain text file), `json`, `embed` (i.e. embed it in the image file), `embed & txt`, and `embed & json`. See [Saving images and metadata](../docs/saving/saving-and-metadata.md).

* **Block NSFW images**: Blurs images with nudity or content that's not suitable for everyone to see. This will download an AI model the first time you use it, to help with NSFW detection.  You can force this to remain on at the server level, regardless of the setting in the UI, by adding `block_nsfw: true` to the config.yaml configuration file.

* **Enable Sound**: Plays a sound when all pending tasks have been completed.

* **Process newest jobs first**: Reverses the normal processing order.

* **Extract LoRA tags from the prompt**: Automatically extract lora tags like <lora:name:0.4> from the prompt, and apply the correct LoRA (if present).

* **Open browser on startup**: Starts the default browser on startup with http://localhost:9000/ as URL.

* **GPU Memory Usage**: *Low*, *Balanced*, and *High*. Increasing levels generate images faster, but uses additional GPU memory. See [Rendering performance](../docs/performance/rendering-performance.md).

* **Use CPU (not GPU)**: Will generate images using the CPU. Nearly 20 times slower compared to using a graphics card.
  * **Automatically pick the GPUs**: Visible only if you have multiple GPUs. Will pick the GPUs automatically based on their processing power and free memory.
  * **GPUs to use**: Visible only if you have multiple GPUs, and want to manually select which GPUs to use for generating images. See [Multiple Gpus](../docs/performance/multiple-gpus.md).

* **Engine to use (Backend)**: Selects the AI engine: `v2.0`, `v3.0`, `v3.5` (Forge; supports Flux, SD3 and Lycoris), or `v4` (very experimental, lightweight). Requires `Save` + restart. See [Engines](../docs/models/engines.md).
  * **Backend platform**: `Auto` (default), or `Vulkan` (experimental; useful for AMD/Intel/older GPUs). See [The v4 engine](../docs/models/v4-engine.md).

* **Models Folder**: Redirects where Easy Diffusion looks for the entire `models/` tree. Requires `Save` + restart. See [Custom models](../docs/models/custom-models.md).

* **Confirm dangerous actions**: Asks for a confirmation dialog before destructive actions (e.g. `Clear All`, `Stop All`). Hold `Shift` while clicking to skip the confirmation.

* **Share Easy Diffusion**: Lets other people use your instance: `Make Stable Diffusion available on your network`, `Network port`, and the `Cloudflare tunnel` (Start/Stop with a public URL). See [Sharing your instance](../docs/saving/sharing-your-instance.md).

* **System Info**: Shows details about your CPU, GPUs and the server addresses others can use to reach your instance.

* **Auto-Save Settings**: Saves your settings, so that they're preserved even if you restart your browser.
  * **Configure**: Opens a menu to set which settings will be saved automatically.

* **Profile Name**: Use this to have different settings for different users. Thumbnails for embeddings and LoRAs are stored per profile.

* **Beta Channel**: Get the latest features under development immediately, but they might contain a few bugs. Please press `Save` and restart the program after changing this. See [Beta Channel](../docs/reference/beta-channel.md).
