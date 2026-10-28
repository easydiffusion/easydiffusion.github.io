# Model merging

**This feature is available in versions 2.5.0 and higher**

You can merge two Stable Diffusion models (in `.ckpt` or `.safetensors` formats), to combine features and art-styles from two different models.

### Step 1
Open the `Merge models` tab, at the top of the UI:

![image](https://user-images.githubusercontent.com/844287/216994692-9b472019-0f25-4ba6-9cf9-116aeba9f192.png)

### Step 2
Select the two model files (which you want to merge):

![image](https://user-images.githubusercontent.com/844287/216995012-4b31daf0-30cf-4a4c-8763-27d6e828f5a9.png)

**Important**: Please merge models of similar type. For e.g. `SD 1.4` models with only `SD 1.4/1.5` models, `SD 2.0` with `SD 2.0`-type, and `SD 2.1` with `SD 2.1`-type models.

### Step 3
Choose the `merge ratio`. For e.g. a `5%` merge ratio will result in 5% of `Model A` and 95% of `Model B` in the final merged model.

![image](https://user-images.githubusercontent.com/844287/216995406-8f9738e3-6ac8-4afd-9063-31119b12813a.png)

### Step 4
Set the filename for the merged model, in the `Output file name` textbox. The merge ratio and file extension will be added automatically, you don't need to include them in the filename.

![image](https://user-images.githubusercontent.com/844287/216996163-c8adc5aa-e81e-4f35-8236-3e0c1c7580b4.png)

Finally, click the `Merge models` button to produce the merged model file(s).

That's it!

---

## Advanced usage
You can also automatically create multiple merge files, at increasing merge ratios. This is useful for experimenting with different merge ratios.

Note: this will create one model file per merge ratio, so it can consume a lot of disk space quickly!

![image](https://user-images.githubusercontent.com/844287/216995745-dca533eb-a4a6-4f3b-9f44-b3b7dc085731.png)
