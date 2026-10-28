# UI plugins

Using user interface plugins, additional functionality can be added to the user interface of Stable Diffusion UI.

**Note:** Plugins have not been reviewed for malicious code. Please only use plugins that you trust.

## Installing plugins
If not stated otherwise in the plugin description, right click on the plugin link and save the plugin to `C:\EasyDiffusion\plugins\ui` (Or the drive that you've installed to, respectively). The file name must have the suffix `.plugin.js`.

### Post processing plugins

- **[Mad's Render Tasks](https://raw.githubusercontent.com/madrang/sd-ui-plugins/master/mads-render_tasks.plugin.js) by [Marc-Andre Ferland](https://github.com/madrang)**

    Adds a Resize option with a UI to select the output resolution, change the prompt, guidance scale, etc...
    A Redo button to retry quickly with a new seed.
    And an option to keep only the last N tasks.
    _[Github Repo](https://github.com/madrang/sd-ui-plugins)_

- **[Scaleup](https://raw.githubusercontent.com/AvidGameFan/ed-plugins/master/scaleup.plugin.js) by Avidgamefan#4035**

    Modest scaling up, maintaining close ratio, with img2img to increase resolution of output while adding minor details.
    Maximum output is 1536 along one axis, but generally, things are kept at 1024x1024 and below.  One-click workflow!
    UPDATE: Scaleup Preserve and MAX are now part of the main, single Scaleup plugin.  Click on the label to switch between
    normal and preserve-details.  For the MAX resolution, this requires you to test to determine your highest, maximum 
    resolution, and set it inside the script.  Currently defaulted to safe settings for the Nvidia 2060 Super with 8GB VRAM.

- **[OutpaintIt](https://raw.githubusercontent.com/AvidGameFan/ed-plugins/master/OutpaintIt.plugin.js) by Avidgamefan#4035**

    OutpaintIt generates a new area outside of your existing image, in any one of the 4 directions with one click -- or all 4
    directions at once! Fix those cut-off heads! As with the ScaleUp plugins, it is set up for 8GB VRAM limits by default; edit
    the file if you have more or less VRAM.
    UPDATE: click on the label to change the number of images that are output with one click (batch mode), up to 5.

- **Down the Rabbit Hole by [Andrew Nuttall](https://andrewjnuttall.com)**

    Generates a grid of prompts to run against. Can be used to step through Inference Steps, samplers, Guidance Scales or all modifiers.
    More information and download is [here.](https://github.com/AssassinJN/Rabbit-Hole-UI) or through Plugin Manager plugin.

### General UI changes

- **[History](https://raw.githubusercontent.com/rbertus2000/sd-ui-plugins/main/history.plugin.js) by [rbertus2000](https://github.com/rbertus2000)**

    Adds a new column to keep a history of all prompts/settings that were used in this session.
    _[Github Repo](https://github.com/rbertus2000/sd-ui-plugins)_

- **[More resolutions](https://raw.githubusercontent.com/JeLuF/stable-diffusion-ui-plugins/main/More-resolutions.plugin.js) by [Super.Skirv](https://github.com/superskirv) and [JeLuF](https://github.com/JeLuF)**

    Adds all resolutions from 128 to 2048 in steps of 64 to the width and height dropdowns.
    _[Github Repo](https://github.com/JeLuF/stable-diffusion-ui-plugins/)_

- **[DateFolders](https://raw.githubusercontent.com/JeLuF/stable-diffusion-ui-plugins/main/DateFolders.plugin.js) by [JeLuF](https://github.com/JeLuF)**

    Changes how autosave's session folders are named. The folders will have names like _2022_11_05T18_58_05_757Z_ instead of _1667674597680_.
    _[Github Repo](https://github.com/JeLuF/stable-diffusion-ui-plugins/)_

- **[Disable Source Image Zoom](https://raw.githubusercontent.com/patriceac/Easy-Diffusion-Plugins/main/plugin-manager.plugin.js) by [Patrice](https://github.com/patriceac)**

    Adds a system setting to disable the source image zoom on hover in the task list.
    _[Github Repo](https://github.com/patriceac/Easy-Diffusion-Plugins)_

- **[Accessibility Improvements](https://raw.githubusercontent.com/patriceac/Easy-Diffusion-Plugins/main/plugin-manager.plugin.js) by [Patrice](https://github.com/patriceac)**

    Adds a system setting to allow the user to change the action to display the buttons on an image (rather than just hovering over it). Default is set to hover (current UI behavior), can be changed to use mouse buttons in the system settings.
    _[Github Repo](https://github.com/patriceac/Easy-Diffusion-Plugins)_

- **[Image Editor Improvements](https://raw.githubusercontent.com/patriceac/Easy-Diffusion-Plugins/main/plugin-manager.plugin.js) by [Patrice](https://github.com/patriceac)**

    - Shows the actual brush in the image editor for increased precision.
    - Add img2img source image via drag & drop from external file or browser image (incl. rendered image). Just drop the image in the editor pane.
    - Add img2img source image by pasting an image from the clipboard
    - Integrates seamlessly with Scrolling Panes 1.8
    _[Github Repo](https://github.com/patriceac/Easy-Diffusion-Plugins)_

- **[Restore Image Modifiers](https://raw.githubusercontent.com/patriceac/Easy-Diffusion-Plugins/main/plugin-manager.plugin.js) by [Patrice](https://github.com/patriceac)**

    Restores the image modifier cards upon reloading the page. Version 1.2 loads much faster, with improved reliability. Requires Easy Diffusion 2.5.2 or later.
    _[Github Repo](https://github.com/patriceac/Easy-Diffusion-Plugins)_

- **[Seed Randomizer](https://raw.githubusercontent.com/patriceac/Easy-Diffusion-Plugins/main/plugin-manager.plugin.js) by [Patrice](https://github.com/patriceac)**
    
    Adds a system setting to randomize, thus increasing the variability of images ran in batches. E.g. can run "A pug wearing a {reb, blue, green} hat" as 3 tasks with different seeds, thus yielding more variety in the results.
    _[Github Repo](https://github.com/patriceac/Easy-Diffusion-Plugins)_

- **[Scrolling Panes](https://raw.githubusercontent.com/patriceac/Easy-Diffusion-Plugins/main/plugin-manager.plugin.js) by [Patrice](https://github.com/patriceac)**
    
    Allows editor and preview panes to scroll independently, and adds the ability to toggle the editor (more space available for images). Also moves the footer to its own "About" tab in the top navbar (required to make the dual panes layout feel more natural).
    _[Github Repo](https://github.com/patriceac/Easy-Diffusion-Plugins)_

- **[Patrice's Plugin Manager](https://raw.githubusercontent.com/patriceac/Easy-Diffusion-Plugins/main/plugin-manager.plugin.js) by [Patrice](https://github.com/patriceac)**
    
    A simple plugin manager. To easily install plugins and seamlessly keep them updated.
    _[Github Repo](https://github.com/patriceac/Easy-Diffusion-Plugins)_

- **[RemoveHelpButtons](https://github.com/JeLuF/stable-diffusion-ui-plugins/blob/main/RemoveHelpButtons.plugin.js) by [JeLuF](https://github.com/JeLuF)**

    Remove the help buttons from the image settings and other areas of the UI. _[Github Repo](https://github.com/JeLuF/stable-diffusion-ui-plugins/)_

- **[Switch Width & Height Settings](https://raw.githubusercontent.com/ogmaresca/easydiffusion-plugins/main/ui/switch-height-width.plugin.js) by [ogmaresca](https://github.com/ogmaresca)**

    Adds a button to switch the width and height values in the Image Settings panel.
    _[Github Repo](https://github.com/ogmaresca/easydiffusion-plugins)_

- **[Prompt Prompt Queue Jumper](https://gist.github.com/MorganLOCode/e2014e342598771cafd8739cf6bf3d33/raw/98f151f2afb585f117ce03747c4c02720b3883b8/queuejumper.plugin.js) by [MorganLOCode](https://github.com/MorganLOCode)**

    Double-click a prompt's drag handle to send the prompt to the top of the queue. Unless it's already at the top, in which case it is sent to the bottom. Makes it easier to have prompts jump a long queue to be processed first with much less manual dexterity required than clicking-and-dragging. The top-then-bottom behaviour enables other rearrangements to be carried out.
     _[Gist](https://gist.github.com/MorganLOCode/e2014e342598771cafd8739cf6bf3d33)_

### Information plugins

- **[Copy Settings (JSON)](https://raw.githubusercontent.com/JeLuF/stable-diffusion-ui-plugins/main/copy-settings-json.plugin.js) by [JeLuF](https://github.com/JeLuF)**

    Copy the settings used to create the image as machine readable JSON string to the clipboard. 
    _[Github Repo](https://github.com/JeLuF/stable-diffusion-ui-plugins/)_

- **[Copy Settings (TXT)](https://raw.githubusercontent.com/JeLuF/stable-diffusion-ui-plugins/main/copy-settings-txt.plugin.js) by [JeLuF](https://github.com/JeLuF)**

    Copy the settings used to create the image as human readable text string to the clipboard.
    _[Github Repo](https://github.com/JeLuF/stable-diffusion-ui-plugins/)_

### Third party site integration plugins
The Stable Diffusion UI project is not partnered with any of the services mentioned below.

- **[Open in Photopea](https://raw.githubusercontent.com/JeLuF/stable-diffusion-ui-plugins/main/photopea.plugin.js) by [JeLuF](https://github.com/JeLuF)**

    Open the image in [Photopea](https://www.photopea.com/), a commercial web service that can be used to edit photos.
    _[Github Repo](https://github.com/JeLuF/stable-diffusion-ui-plugins/)_

### Prompt related plugins

- **[Surprise Me!](https://raw.githubusercontent.com/madrang/sd-ui-plugins/master/mads-surprise_me.plugin.js) by [Marc-Andre Ferland](https://github.com/madrang)**

    _Surprise me!_ adds a button that generates a random prompt. You need to download these three files and put them into the `plugins\ui` folder:

    1.  [Surprise Me! Plugin](https://raw.githubusercontent.com/madrang/sd-ui-plugins/master/mads-surprise_me.plugin.js)
    2.  [rita.js](https://raw.githubusercontent.com/madrang/sd-ui-plugins/master/rita.js)
    3.  [rita_grammar.json](https://raw.githubusercontent.com/madrang/sd-ui-plugins/master/rita_grammar.json)

    _[Github Repo](https://github.com/madrang/sd-ui-plugins)_

- **[Spell tokenizer](https://gitlab.com/SoliDissipation/sd-ui-plugins/-/raw/main/spell-tokenizer.plugin.js) by [Solid Dissipation](https://gitlab.com/SoliDissipation)**

    Script to help with spell (prompt) building.
    Create individual spell tokens to rearrange and modulate by using commas.
    Drag and drop tokens to rearrange order.
    Hold ALT+scroll over a token to emphasize or de-emphasize.
    Right click to delete a token. Paste links to danbooru or AIbooru posts to auto extract tags. Autocomplete with custom taglists.
    _[Git Repo](https://gitlab.com/SoliDissipation/sd-ui-plugins/)_

- **[Tag autocomplete](https://gist.githubusercontent.com/nedius/bd5a1af78dc71a762fe76bd6d05631d5/raw/97ce564d585582876fa163392b8246732fb5c597/nedius.tagcomplete.plugin.js) by [nedius](https://github.com/nedius)**

  Tag autocomplete for prompts using booru style tags. _[Gist](https://gist.github.com/nedius/bd5a1af78dc71a762fe76bd6d05631d5)_