# The beta channel

The beta version includes new features that we're working on. This gives you access to the latest features as they're being developed, often weeks before they're announced. But these new features may contain a few bugs, since they're still under development.

If you're using the beta version, and want to report any bugs (or feedback), please report them to `#beta` on our [discord community](https://discord.com/invite/u9yhsFmEkB).

## Joining the beta channel
To join the beta program, please follow these steps:

1. Open the `Settings` tab, at the top of the UI.

![image](https://user-images.githubusercontent.com/844287/227228217-c38e29cc-852c-4a94-91e4-392e9b067720.png)

2. Scroll to the bottom, and enable the `Beta Channel` setting.

![image](https://user-images.githubusercontent.com/844287/227228319-16f323ab-2b71-4497-93ef-e81168315b14.png)

3. Press the `Save` button, and restart the program. Please close the command prompt window (or terminal on Linux/Mac), and start Easy Diffusion again.

![image](https://user-images.githubusercontent.com/844287/227228576-45a9a3f8-80c6-4a37-9084-e11dcb934a61.png)

After you restart, you should see a `(beta)` label next to the version number, in the top-left corner of the UI. For e.g. 

![image](https://user-images.githubusercontent.com/844287/227228821-f361fb8f-8ff2-4174-9aad-33353a8a4af5.png)

## Leaving the beta channel
You can return to the stable version by:

1. Disable the beta-channel checkbox in the Settings tab.
2. Press `Save`.
3. Restart Easy Diffusion.

If this is not possible (for e.g. if the beta version isn't starting any more), you can leave the beta program by editing the configuration manually:

1. In your installation directory (e.g. `C:\EasyDiffusion`), edit the `config.yaml` file using a text-editor (like Notepad).
2. Replace the word `beta` in that file by `main`. Press save.
3. Restart Easy Diffusion.