# ControlNet

ControlNets allow you to select a image to guide the AI, to make it follow your control image more closely. You can pick a filter to pre-process the image, and one of the known (or custom) controlnet models.

While this sounds similar to image-to-image, ControlNets allow the AI to extract meaningful information from the image and make completely different images in the same style. For e.g. following the same body posture as your initial image, or the same color style or image composition.

![image](https://github.com/easydiffusion/easydiffusion/assets/844287/517c43a6-2253-4f92-a75b-b7f18a1e8581) 
![image](https://github.com/easydiffusion/easydiffusion/assets/844287/d871616f-a3fc-470e-84b6-219443494db2)

## Quick guide to using ControlNets

1. In the `Image Settings` panel, set a `Control Image`. This can be any image that you want the AI to follow. For e.g. download [this painting](https://user-images.githubusercontent.com/844287/257520525-517c43a6-2253-4f92-a75b-b7f18a1e8581.png) and set that as the control image.
2. Then set `Filter to apply` to `Canny`. This will automatically select `Canny` as the controlnet model as well.
3. Type `Emma Watson` in the prompt box (at the top), and use `1808629740` as the seed, and `euler_a` with 25 steps and `SD 1.4` model (or any other Stable Diffusion model).
4. Make an image.

It'll take a while during the first image, since it'll download about 1.3 GB of models for the canny controlnet.

## Pose from images:
You can also set a photo of a person in a particular pose, and make the AI follow that pose. For e.g.

1. Download [this photo of a man](https://user-images.githubusercontent.com/844287/257520603-46783770-a596-4708-9821-1152c0c3c63a.png), and set that as the control image
2. Set `Filter to apply` to `Open Pose` (the first one). This will automatically select `OpenPose` as the controlnet model.
3. Type `Knight in black armor` in the prompt box (at the top), and use `1873330527` as the seed, and `euler_a` with 25 steps, and `SD 1.4` model (or any other SD model).
5. Make an image.

## Custom pose images:
You can also use images generated in the OpenPose format, e.g. from the civitai poses category. For e.g.

1. Download [this openpose photo](https://user-images.githubusercontent.com/844287/257520652-08d1c52c-7455-49fc-9651-352d062de7b9.png) (stick figure), and set that as the control image.
2. Set `Filter to apply` to `None`.
3. Set `Model` to `Open Pose`
4. Type `Knight in black armor` in the prompt box (at the top), and use `1873330527` as the seed, and `euler_a` with 25 steps, and `SD 1.4` model (or any other SD model).
5. Make an image.

## Resources

* **A collection of pose images**: https://openposes.com/
* **Make your custom pose images**: https://app.posemy.art/ or https://openposeai.com/