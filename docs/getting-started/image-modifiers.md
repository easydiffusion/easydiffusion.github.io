# Image modifiers

Image Modifiers are a collection of useful words that guide the AI in creating images in specific styles. For e.g. by including `line art` in your input prompt, it'll guide the AI to make images that look like they've been drawn by an ink pen.

![image](https://github.com/easydiffusion/easydiffusion/assets/844287/fffc2bbb-1bb1-4034-aa7f-1164faf0d21f)

Click on a particular modifier to add it to your image. Click a selected modifier again to remove it from the image.

## Adjusting weights and toggling modifiers

Once a modifier is selected, you can fine-tune how it affects the prompt:

* **Adjust the weight**: Hover over a selected modifier and use `Ctrl` + `Mouse Wheel` to adjust its weight. Each scroll step adds or removes a `+` (to strengthen) or a `-` (to weaken), just like the bracket weighting described in [Writing prompts](./writing-prompts.md). For e.g. `landscape` becomes `landscape+`, `landscape++`, and so on (up to 5 `+` or `-` symbols). If the modifier name contains spaces, it gets wrapped in parentheses, e.g. `(line art)+`.
* **Temporarily disable**: Right-click a selected modifier to temporarily disable it. The modifier stays in the list (shown greyed-out with a dashed border) but is left out of the prompt. Click the modifier again to re-enable it.
* **Remove**: Click a selected modifier (left-click) to remove it from the image entirely.

This is also described by the in-app tooltip next to the `Image Modifiers` label: *"Click an Image Modifier to remove it, right-click to temporarily disable it, use Ctrl+Mouse Wheel to adjust its weight"*.

The modifiers are organized into categories, so please explore the different styles available.

## Options

* **Settings** ![image](https://github.com/easydiffusion/easydiffusion/assets/844287/c08b7590-bc54-4240-bb2f-561a52e17351): To define custom image modifiers. You can read more about custom modifiers at [this link](../docs/reference/custom-modifiers.md).

* **Image Style**: To change the type of icon for the pre-defined modifiers.
  * Face: Shows faces for the icons in the style of the modifiers.
  * Landscapes: Shows landscapes for the icons in the style of the modifiers.

* **Thumbnail Size**: A slider to change the size of the clickable modifiers.