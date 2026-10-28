# SDXL

SDXL models are trained to create larger images with better image quality. They can also make good images at 512x512 resolution, so they're often a good replacement for SD 1 or 2 models, in terms of image quality.

SDXL works on all of Easy Diffusion's modern engines (see [Engines](./engines.md)). For even newer models like Flux and SD3, see [Flux and other new models](./flux-and-newer-models.md).

They do, however, consume more GPU and system RAM, so please experiment with your image sizes and VRAM usage level setting (in the Settings tab) while using SDXL models.

![image](https://github.com/easydiffusion/easydiffusion/assets/844287/e736bd91-f3ab-4eb9-98e5-5e5d60d227c1)


### How to use SDXL:

1. Download whichever SDXL model you want:
* Base model (works for text-to-image, image-to-image, and inpainting): [base model download link](https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/blob/main/sd_xl_base_1.0_0.9vae.safetensors)
* Refiner model (image-to-image only): [refiner model download link](https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-1.0/resolve/main/sd_xl_refiner_1.0.safetensors)
2. Save the model to the `models/stable-diffusion` folder.

Finally, in the Easy Diffusion UI, click the "refresh" icon next to the Models dropdown, and select the downloaded model and generate the image.

![image](https://github.com/easydiffusion/easydiffusion/assets/844287/7425c9e7-c35a-489e-bcf5-c80ca83dd175)

## Usage tips

1. If you get "Out of Memory" errors, try setting the `VRAM Usage Level` setting to `"low"` in the Settings tab, and press `Save`.
2. Use small values for `Prompt Strength` when using the "Refiner" model. E.g. 0.2
3. The "Refiner" model supports text prompt, along with an image. You can use text to describe how your image should be refined.