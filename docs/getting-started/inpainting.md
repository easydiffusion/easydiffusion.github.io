# Inpainting and the image editor

**Inpainting** is a technique in which the AI draws only in a selected part of the initial image, while keeping other parts of the
initial image intact.

To use inpainting, first select an initial image using the `Browse` button, then click the `Inpaint` button. Then highlight the area (called a "mask") which the AI should draw into, and then press `Save`.

## The image editor

The image editor is used for both inpainting and for sketching a fresh initial image. The section under the prompt box has these buttons:

* `Browse`: Pick an existing image from your disk as the initial image.
* `Draw`: Opens the image editor with a blank canvas, so you can sketch a fresh initial image directly in Easy Diffusion.
* `Inpaint`: Opens the image editor with the selected initial image, so you can draw a mask.

You can also load the initial image without using `Browse`: drag & drop an image onto the UI, or paste it from the clipboard using `Ctrl+V`.

In the editor you get:

* **Draw** and **Erase** tools (with keyboard hotkeys), for drawing a mask or sketching the image.
* A **brush size** slider, to control how thick the brush strokes are.
* **Save**, to apply your changes and return to the main screen. Use `Inpaint`/`Draw` again to continue editing later.

## Preserve color profile

The `Preserve color profile` checkbox (under the initial image) tells the AI to keep the original colors of the initial image while rendering. This is especially helpful during inpainting, because the freshly-drawn region blends in better with the rest of the image. Try it both ways if the inpainted area looks off, some images look better with it on, others with it off.

## Tips

* Larger masked areas work better than smaller areas.
* The initial image impacts the result. If you can't get good results, try to sketch the desired results using a simple paint program, you can use the `Draw` button to do this directly in Easy Diffusion (see [The Image Editor](#the-image-editor) above).
* The unmasked area will be slightly changed by the inpainting process. You can enable the `Strict Mask Border` checkbox (under the initial image) to prevent this.

## A visual guide to inpainting

![image](https://user-images.githubusercontent.com/5852422/219961229-66175d43-f899-4667-9028-15ee11dd2caa.png)
