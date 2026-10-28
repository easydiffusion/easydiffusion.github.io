# Clip skip

In Stable Diffusion 1.x models, CLIP is used as text embedding. The CLIP model is composed of multiple layers. They get more specific layer by layer. Oversimplified, the first layer could understand "person", the second could distinguish "male" and "female", and the third layer could distinguish "man", "boy", "lad", etc. 

You may want to stop at an earlier CLIP layer to keep the prompt more vague. If you want to create a picture of a "dog", you might not be interested in the subtypes of "dog" (e.g. "dachshund") that the model knows about.

With Clip Skip enabled, you reduce the "accuracy" of the text model.

Some models benefit more from enabling Clip Skip than others. For example models or LORAs that have been trained using "Booru" tags (e.g. "1girl") often recommend to enable Clip Skip.

Clip Skip only works for SD1.x based models. SD2.x based models don't use CLIP as text embedding, and so Clip Skip will be ignored for these models.

## Examples
### Without Clip Skip
![image](https://github.com/cmdr2/stable-diffusion-ui/assets/5852422/6eda07ae-355a-482c-a177-37ef9172c5f3)

### Same settings as above, but with Clip Skip enabled
![image](https://github.com/cmdr2/stable-diffusion-ui/assets/5852422/aaea5159-e33b-4fff-a18b-bac99f2583db)

## Note
Enabling the Clip Skip toggle corresponds to the  `clip skip = 2` setting in other implementations of Stable Diffusion