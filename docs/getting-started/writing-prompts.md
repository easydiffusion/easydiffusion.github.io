# Writing prompts

## The basics

Keep your prompts short and don't write full sentences. Separate different aspects of your image by commas:

`girl on a swing, green grass, pink trousers`

Due to the way Stable Diffusion was trained, there are a few words that often improve the quality of images, e.g. `highly detailed` or `trending on artstation`:

![image](https://user-images.githubusercontent.com/5852422/196815094-2a3d075e-a641-43b2-a773-26ebbd249fb7.png)

You can use the names of art styles, artists, or computer programs to influence the look of the rendered images. A wide choice of modifiers can be found in the _Image Modifiers_ section:

![image](https://user-images.githubusercontent.com/5852422/196817139-fe7f6aa2-b658-4170-be79-e02af7ec604b.png)

You can also put the modifiers directly into your prompt to get many different styles:

![image](https://user-images.githubusercontent.com/5852422/196818870-c44ca641-bc3e-45a9-91a5-c66a7b671d1f.png)

## Emphasizing parts of the prompt
You can provide the importance ("weight") as numbers: `girl on a (swing)1.2 (green grass)1.0 (pink trousers)0.8`
Enclose the words with parentheses (round brackets) and put the weight after them. For e.g. in the above example, `swing` has a weight of 1.2, `green grass` has a weight of 1.0 and `pink trousers` has a weight of 0.8.

## Testing variations of prompts
Use curly brackets in prompts to try different words, e.g. the prompt `man riding a {horse,motorcycle}` creates two rendering jobs: One for `man riding a horse` and one for `man riding a motorcycle`:

![image](https://user-images.githubusercontent.com/5852422/196795838-88dec248-dbbc-4681-b00f-c16444e80a73.png)

You can include entire portions of a prompt that include commas inside curly brackets by using the \ escape character before each comma you don't want to be treated as a variation separator. For example:

`{a tall\, brown hair\, green eyed\, man, a short\, blond hair\, blue eyed\, woman} shopping at a store` will create the following two tasks:

* `a tall\, brown hair\, green eyed\, man shopping at a store`
* `a short\, blond hair\, blue eyed\, woman shopping at a store`

Note that the \ escape characters while visible in the prompt, will be ignored when generating your image.

**Prompt Matrix** - Separate your prompt with the `|` character to explore variations quickly. E.g. `girl holding a rose | illustration | cinematic lighting` creates four task combinations automatically: 

* `girl holding a rose`
* `girl holding a rose, illustration`
* `girl holding a rose, cinematic lighting`
* `girl holding a rose, illustration, cinematic lighting`

## Negative prompts
The negative prompt can be used to describe what you don't want to see in the image. The AI sometimes ignores parts of the negative prompt, especially if the prompt and negative prompt contain very similar terms. In other cases, the negative prompt has big impact on the composition of the image. For example, if you put "shoes" into the negative prompt, you might get a barefoot person - or you get an image where the feet are out of frame. 

A useful negative prompt is:

`Deformed, blurry, bad anatomy, disfigured, poorly drawn face, mutation, mutated, extra limb, ugly, poorly drawn hands, missing limb, blurry, floating limbs, disconnected limbs, malformed hands, blur, out of focus, long neck, long body, mutated hands and fingers, out of frame`

## Further reading

* [Prompt syntax](./prompt-syntax.md): the full prompt syntax supported by Easy Diffusion
* [The PromptBook](https://openart.ai/promptbook) from OpenArt, a platform and community dedicated to AI-native content, written by members of their community
* [Stable Diffusion Modifier Studies](https://proximacentaurib.notion.site/2b07d3195d5948c6a7e5836f9d535592?v=b5b75a67cc52483c9965cfc141f6f582): a list of hundreds of different style modifiers
* [Lexica](https://lexica.art/): a search engine for prompt and image ideas. **Warning:** some of the images on this website can be NSFW (adult-rated), please use it at your own discretion.
* [Prompt examples and experiments](https://strikingloo.github.io/stable-diffusion-vs-dalle-2#prompt-examples-and-experiments)