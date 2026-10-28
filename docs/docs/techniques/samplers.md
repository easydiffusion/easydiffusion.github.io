# Samplers and schedulers

Easy Diffusion includes a number of different "samplers", which create slightly different images. Each sampler follows a different process for converting your input into a final image.

It's best to experiment with different samplers to find one that works well for the image that you're making.

Here is a rough overview of the behaviors of different sampler implementations:

[![SD](https://user-images.githubusercontent.com/7282547/222912410-32e65aef-317f-4f35-89bd-45d92569c317.jpg)](https://user-images.githubusercontent.com/7282547/222912410-32e65aef-317f-4f35-89bd-45d92569c317.jpg)

Most samplers are deterministic. If re-run with the same seed and settings, it will generate the same image. You can also increase the step size to see if artifacts in the image clear up, but it may be a slightly different image.

Note that **Ancestral** sampler, `euler_a`, `dpm2_a` and `dpmpp_2s_a` are *not always* deterministic. They can create different images when run in different batch sizes. 
`dpm_adaptive` use an automatic steps count algorithm, ignoring the user Inference Steps setting.

[![SD2](https://user-images.githubusercontent.com/7282547/222918227-052d5c8f-f6db-4bcb-bfe8-2902228171db.jpg)](https://user-images.githubusercontent.com/7282547/222918227-052d5c8f-f6db-4bcb-bfe8-2902228171db.jpg)

[![SD-full2_small](https://user-images.githubusercontent.com/7282547/222985489-b14b160f-ea79-464f-80f7-45092f5b35f9.jpg)](https://user-images.githubusercontent.com/7282547/222985489-b14b160f-ea79-464f-80f7-45092f5b35f9.jpg)

## Schedulers

The `Scheduler` dropdown (available on the v3.5 and v4 engines) controls how the steps of the image creation process are spaced out. The sampler decides *how* each step is computed, while the scheduler decides *when* the steps happen, typically spread evenly across the whole process, or concentrated more on the beginning or the end. The scheduler can noticeably change the result, especially at lower step counts.

Options (their names are matched from other Stable Diffusion UIs, so they behave the same as elsewhere):

* **Automatic**: let Easy Diffusion pick a suitable scheduler for the selected model and sampler. Usually a good default.
* **Uniform**: steps evenly spaced. A safe, predictable choice for most models.
* **Karras**: concentrates more steps near the end, which often gives finer detail. Very popular with SD 1.5 / SDXL models; pair it with samplers whose name contains `Karras`.
* **Exponential**: concentrates more steps near the beginning, giving a softer look.
* **Polyexponential**: an exponential variant with a different curve shape; a good alternative to Karras.
* **SGM Uniform**: evenly spaced steps tuned for models trained with the SGM noise schedule (e.g. SDXL Turbo derivatives, and it also works well with Flux).
* **KL Optimal**: steps spaced using a statistical (Kullback-Leibler) optimisation, aiming for the best image per step.
* **Simple**: a simplified, evenly-spaced schedule. A good no-fuss default on the v3.5 engine.
* **Normal**: the standard step schedule used by most models during training.
* **DDIM**: the classic schedule matching the DDIM sampler.
* **Beta**: uses a beta-distribution schedule; can improve detail on some models.
* **Turbo**: a short schedule designed for Turbo/SDXL Turbo style models that use very few steps.
* **Align Your Steps** (with **GITS**, **11**, **32** variants): a modern schedule designed to give good results at low step counts. The number variants are tuned for specific model generations (11 for SD 1.5, 32 for SDXL).

### Which one to pick?

* If you're not sure, leave the scheduler on `Automatic` (or `Simple` on the v3.5 engine).
* For SD 1.5 / SDXL models, `Karras` paired with a matching sampler (e.g. `DPM++ 2M Karras`) is a reliable, widely-used combination.
* For models that use few steps (Turbo, Lightning, LCM), try `SGM Uniform` or `Turbo`.
* For Flux models, `Simple` and `SGM Uniform` are commonly used.

As with samplers, it's worth experimenting, the same image can look different (sometimes better!) with a different scheduler.

## Flux compatibility tips

Easy Diffusion shows in-app tips under the `Sampler` and `Scheduler` dropdowns when the selected combination is not well-suited for a Flux model, e.g. *"This sampler does not work well with Flux!"*, *"This scheduler does not work well with Flux!"* and *"This scheduler needs 15 steps or more"*. If you see these tips, try switching to a different sampler or scheduler (see [Flux and other new models](../models/flux-and-newer-models.md) for suggestions).