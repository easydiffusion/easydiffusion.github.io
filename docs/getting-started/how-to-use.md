# How to use

After installing Easy Diffusion, open your browser (we recommend Chrome, Edge or Firefox) and go to [http://localhost:9000](http://localhost:9000). The app may take a few seconds to get ready. Once loaded, it looks like this:

![image](https://user-images.githubusercontent.com/110454200/213924983-b8e5261a-8545-444c-a8be-271a495f145f.png)

## The basics

* You can enqueue multiple `Jobs`. The project will process them one by one. You don't need to wait until the first job is finished.
* You can queue up many rendering jobs at once by entering one prompt per line. When you click 'Make Image', a job will be generated for each line in the prompt textbox:

![image](https://user-images.githubusercontent.com/110454200/213926311-ba9286d1-00c6-4862-8ba3-6d1f4762e1d5.png)

* You can use `Face Correction` or `Upscaling` to improve the image further.
* You can click `Use as Input` on a generated image, to use it as the input image for your next generation. This can be useful for sequentially refining the generated image with a single click.
* Images with the same aspect ratio of your generated image work best. E.g. 1:1 if you're generating images sized 512x512.

## Controlling the task queue

Next to the `Make Image` button you'll find the task-queue buttons:

* `Stop All`: clears the entire task queue, including any rendering in progress.
* `Pause All`: pauses the queue after the current image.
* `Resume`: continues a paused queue.

## Buttons on a rendered image

Hover over a rendered image in the preview pane to see its toolbar:

* **Seed**: shows the seed used for this image (click to re-use it).
* `Use as Input`: sets the image as the initial image for your next generation (and matches the width/height to the image).
* `Use for ControlNet`: sends the image to the ControlNet settings.
* `Download Image` / `Download JSON`: save the image, or a JSON file with all the settings used to make it.
* `Make Similar Images`: generates 5 similar images from this one.
* `Draw another 25 steps`: continues drawing this image for 25 more steps.
* `Undo` / `Redo`: undo or redo an applied filter (e.g. face-fix or upscale).
* `Upscale` and `Fix Faces`: re-run post-processing on an already-rendered image, without re-rendering it.
* `Use as Thumbnail`: appears when the image used an embedding or LoRA; saves the image as the thumbnail for that model (see [Embeddings](../docs/techniques/embeddings.md) and [LoRA](../docs/techniques/lora.md)).

## Downloading images in bulk

The `Download images` button at the top of the preview pane opens a dialog to download all the images from the current session at once. You can choose:

* To download everything as a single `ZIP` file.
* To add a folder per job inside the ZIP (organised as a tree).
* To add a JSON metadata file next to each image, containing all the settings used for that image.

For a full reference of every UI option, see [UI reference](./ui-reference.md). For all the ways to get images (and their settings) out of Easy Diffusion, see [Saving images and metadata](../docs/saving/saving-and-metadata.md).

## Suggested starting settings

These are just suggestions to get you started.  Different models will give different effects, and settings that are ideal for one model may not be applicable to another.

* Image Size: Start with 512x512 with SD 1.4 or 1.5 models.  With SDXL, start with 1024x1024. You can increase/decrease these slightly - often, 512x768 will still work well with SD 1.5 models, but any larger, and you'll start to see odd duplications in your results.  Use image-to-image to go larger.
* Inference Steps: try using between 30 and 40 for most models.  For Turbo models, use between 5 and 8 to generate faster than non-Turbo models.
* Guidance Scale: 7.5 is a good starting point, but anywhere from 5 to 15 works for many models.  For Turbo models, this should be between 1 and 5, depending upon the model.
* Model: SDXL models can produce better results than SD 1.4 and SD 1.5 models, but require a bit more resources.

The base SDXL model can be found here: [sd_xl_base_1.0.safetensors](https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/blob/main/sd_xl_base_1.0.safetensors)
The VAE matching this SDXL model can be found here: [sd_xl_base_1.0_0.9vae.safetensors](https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/blob/main/sd_xl_base_1.0_0.9vae.safetensors)

* Sampler: Generally, you can use any sampler, but some models mostly work with one particular sampler.  For example, some Turbo models specifically require DPM++ SDE, or else results will be poorer.

## Troubleshooting
Please try the common [troubleshooting](../docs/troubleshooting.md) steps. If that doesn't fix it, please ask on the [discord server](https://discord.com/invite/u9yhsFmEkB), or [file an issue](https://github.com/easydiffusion/easydiffusion/issues).