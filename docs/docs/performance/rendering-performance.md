# Rendering performance

This page collects practical tips to make image generation faster, or to make it work on GPUs with little memory. Easy Diffusion supports several [engines](../models/engines.md) (v2.0, v3.0, v3.5, v4), and their speed characteristics differ. The v4 engine in particular has a very small footprint and runs on a Vulkan backend, which makes it a good candidate for low-end, older, AMD or Intel GPUs, see [The v4 engine](../models/v4-engine.md).

## GPU memory usage level

In the Settings tab, the `GPU Memory Usage` setting controls how much of your GPU's memory Easy Diffusion may use:

* **Low**: uses the least memory. Best for GPUs with little VRAM; slower.
* **Balanced**: a good middle ground (default).
* **High**: fastest, but uses more GPU memory. Use it if your renders occasionally run out of memory at Balanced.

Larger image sizes need more memory. If a render fails or becomes very slow at a large size, try the **`Enable VAE Tiling`** option (v3.x engines), it renders the image in tiles and uses much less memory, at a small speed cost. See [VAE](../techniques/vae.md).

## Live preview

The `Show a live preview` option (in Render Settings) sends the in-progress image to the browser while it renders. This costs some performance, turn it off if you want maximum speed. It is off by default.

## Other things that cost time

* **Fix incorrect faces and eyes** and **Upscale image** (Render Settings) run additional models after the render. Leave them off if you don't need them for every image. You can apply `Fix Faces` / `Upscale` later from the image toolbar, only on the images worth keeping.
* **More inference steps** take proportionally more time. Turbo/Lightning models can produce good images in very few steps (see the tips in [How to use](../../getting-started/how-to-use.md)).
* Larger image sizes take more time and memory (see the advanced sizes popup in [Ui Reference](../../getting-started/ui-reference.md) for the resize options).

## Use CPU instead of GPU

If you don't have a suitable GPU, you can tick `Use CPU (not GPU)` in the Settings tab. This is nearly 20 times slower than using a graphics card, so it's best reserved for testing or very occasional renders.

## Multiple GPUs

If your PC has several GPUs, Easy Diffusion can automatically pick GPUs based on their power and free memory, or you can choose which GPUs to use. See [Multiple Gpus](./multiple-gpus.md).

## xFormers

On the v2.0 engine, the [xFormers](./xformers.md) memory-efficient attention library can reduce memory usage and speed up rendering on NVIDIA GPUs.

## System Info

The Settings tab has a **System Info** section, which shows your detected CPU, your GPUs, and the server addresses. Use it to check whether your GPU was detected correctly, if your GPU doesn't appear here, it won't be used for rendering, and the usual [troubleshooting](../troubleshooting.md) steps apply.

## Benchmarks (community-contributed)

The exact speed depends heavily on the engine, the model, the image size and the drivers, numbers go out of date quickly, so we don't publish fixed benchmark tables anymore. The community-shared measurements below are from an older version (v2.x engine era) and are kept only as a very rough orientation point; please treat them with skepticism and prefer running your own test with the benchmark job below.

<table>
<tr><th>GPU</th><th>Video RAM</th><th>Render time (v2.4.7)</th><th>Maximum render size</th></tr>
<tr><td>RTX A4500</td><td>20GB</td><td>6.0s</td><td>1536x1536</td></tr>
<tr><td>RTX 2070</td><td>8 GB</td><td>12s</td><td>1216×1216</td></tr>
<tr><td>GTX 1060</td><td>6 GB</td><td>45s</td><td>1024×1024</td></tr>
<tr><td>GTX 1650</td><td>4 GB</td><td>86s</td><td>704×704</td></tr>
</table>

### Benchmark job

If you'd like to compare hardware, use a fixed task like the one below and share the results with the community:

```
Prompt: a photograph of an astronaut riding a horse
Seed: 3464895
Number of Images: 1/1
Model: sd-v1-4
Sampler: euler_a
VAE: None
Hypernetwork: None
Image size: 512x512
Inference Steps: 25
Guidance Scale: 7.5
Output Format: jpeg
[x] Show a live preview
[ ] Fix incorrect faces
[ ] Upscale image
[x] Show only the corrected/upscaled image
```
