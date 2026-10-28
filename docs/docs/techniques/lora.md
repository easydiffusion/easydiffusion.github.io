# LoRA

**LoRAs** are small models that can alter the style or behavior of the Stable Diffusion AI model. It can make the same Stable Diffusion model make drastically different styles of images, with control over how much the LoRA affects the image.

## Why are LoRA files useful?
Before LoRAs were invented, people trained new Stable Diffusion models for each new concept or styles (with new training images). Each Stable Diffusion model is between 2 to 4 GB in size, so this was not very efficient (for disk space, especially with hundreds of styles).

LoRA models, by contrast, are often between 10 to 100 MB in size (i.e. nearly 100 times smaller), and only contain the changes to be applied to a Stable Diffusion model. This means you can use the same 2 GB Stable Diffusion model, and apply different 10 MB LoRA files to alter the style of the generated images. And the result is often the same as creating an entirely new 2 GB Stable Diffusion model.

You can also mix multiple LoRA files at different strengths dynamically, which you can't do easily with custom Stable Diffusion models.

## How to use

1. Download the LoRA model file and put it into the `models/lora` folder.
2. Click the refresh icon ![image](https://github.com/easydiffusion/easydiffusion/assets/844287/64d7c2a0-8f9a-4b37-8cff-6e3ba29304a0) next to the Stable Diffusion models dropdown.
3. Select the LoRA from the dropdown in `Image Settings`, and choose how strongly it should affect the image.

![image](https://github.com/easydiffusion/easydiffusion/assets/844287/24ce1c16-0c76-4141-94d2-66af03039f42)

4. Generate an image.

## Multiple LoRA files
You can also add multiple LoRAs to an image, by clicking the `add another LoRA` button. To remove a LoRA, please click the `-` button on the left-side of the LoRA.

## Custom thumbnails
The LoRA dropdown shows a thumbnail for each LoRA. You can set your own: hover over any generated image that used the LoRA, and click `Use as Thumbnail` on the image toolbar. The image is saved as the LoRA's thumbnail.

Thumbnails are stored per-profile (the `Profile Name` in the Settings tab), so different profiles can show different thumbnails. The same `Use as Thumbnail` button also works for embeddings, see [Embeddings](./embeddings.md).

![image](https://github.com/easydiffusion/easydiffusion/assets/844287/66ecb01c-816e-4fad-a5dc-fd923642b7f7)

## Web Resources

* https://civitai.com/ contains a lot of LoRA models. Filter by model type `LoRA`.

## Manually using LoRAs

You can include a LoRA in your prompt using the `<lora: name: weight>` format.  

+ `name` is the name of the LoRA model. However be aware the `name` may be different from the filename.  Refer to the documentation provided by the LoRA creator.
+ `weight` is the strength that the LoRA model will be applied. It is similar to a keyword weights. The default is 1, and setting the value to 0 disables the LoRA.

Some LoRAs also require a `trigger` keyword to be included for the lora to be activated. Example: `<lora:PIXHELL_21:1> pixelart`
