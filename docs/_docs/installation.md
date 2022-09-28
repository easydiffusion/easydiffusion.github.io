---
title: "Installation"
permalink: /docs/installation/
---

# System Requirements
1. Windows 10/11, or Linux. Experimental support for Mac is coming soon.
2. An NVIDIA graphics card, preferably with 4GB or more of VRAM. But if you don't have a compatible graphics card, you can still use it with a "Use CPU" setting. It'll be very slow, but it should still work.

You do not need anything else. You do not need WSL, Docker or Conda. The installer will take care of it.

# Installation

## Windows
1. **Download** [for Windows](https://github.com/cmdr2/stable-diffusion-ui/releases/download/v2.16/stable-diffusion-ui-win64.zip)
2. **Extract**:
    After unzipping the file, please move the `stable-diffusion-ui` folder to your `C:` (or any drive like D:, at the top root level), e.g. `C:\stable-diffusion-ui`. This will avoid a common problem with Windows (file path length limits).
3. **Run**:
    `Start Stable Diffusion UI.cmd` by double-clicking it.

This will automatically install Stable Diffusion, set it up, and start the interface. No additional steps are needed.

## Linux
1. **Download** [for Linux](https://github.com/cmdr2/stable-diffusion-ui/releases/download/v2.16/stable-diffusion-ui-linux.tar.xz)

2. **Extract**:
  - After extracting the .tar.xz file, please open a terminal, and go to the `stable-diffusion-ui` directory.

3. **Run**:
  - In the terminal, run `./start.sh` (or `bash start.sh`)

This will automatically install Stable Diffusion, set it up, and start the interface. No additional steps are needed.

# Uninstall
Just delete the `stable-diffusion-ui` folder to uninstall all the downloaded packages.

# Updates
The software updates itself every time you start it. By default, it will update to the latest stable version. If you want to test out new features, you can 
switch to the beta chanel in the system settings:
![screenshot of the system settings showing the beta channel checkbox](/media/system-settings-v2.jpg)

