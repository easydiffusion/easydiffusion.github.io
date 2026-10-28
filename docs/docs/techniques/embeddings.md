# Embeddings

**Embeddings** (or *textual inversion embeddings*) are small models that can teach the AI new words (along with their meaning). This is useful if you want the AI to draw specific concepts, or faces, or things. It's also useful if you want the AI to *avoid* specific concepts or things.

An embedding can be used as a word in the prompt (or negative prompt) used to make an image. You can use multiple embeddings in the same prompt.

## How to use

1. Download the embedding model file and put it into the `models/embeddings` folder.
2. Click the refresh icon ![image](https://github.com/easydiffusion/easydiffusion/assets/844287/64d7c2a0-8f9a-4b37-8cff-6e3ba29304a0) next to the Stable Diffusion models dropdown.
3. Add the embedding to the prompt by clicking the `+ Embedding` button above the prompt box

![image](https://github.com/easydiffusion/easydiffusion/assets/844287/95759cb4-c654-4808-95e7-0072352c5a33)

4. Then click the embedding to use. It'll insert the embedding word in the prompt textbox. You can change where the word is inserted (e.g. at the beginning of the prompt) by changing the `Mode` (top-right in the Embeddings popup).
5. Generate an image.

## Negative Embedding
You can also follow the same process to add negative embeddings. This will tell the AI to avoid that concept in the generated image.

Expand the `Negative Prompt` section, then click `+ Negative Embedding`, and follow the same steps as mentioned above.

## Tips
You can also just type the embedding word directly in the prompt, without using the Embeddings popup window. Type the embedding model filename (without the extension). E.g. `cat-toy` if the embedding filename is `cat-toy.pt`. Please replace any spaces in the filename with underscore `_`.

## Custom thumbnails
The Embeddings popup shows a thumbnail for each embedding. You can set your own:

* Click the `Add thumbnail` button inside the Embeddings popup, or
* Hover over any generated image that used the embedding, and click `Use as Thumbnail` on the image toolbar. The image is saved as the embedding's thumbnail.

Thumbnails are stored per-profile (the `Profile Name` in the Settings tab), so different profiles can show different thumbnails.

## Web Resources

* https://civitai.com/ contains a lot of Embedding models. Filter by model type `Embedding`.