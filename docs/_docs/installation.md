---
title: "Installation"
permalink: /docs/installation/
---

## System Requirements
1. Windows 10/11, Linux or Mac.
2. An NVIDIA graphics card, preferably with 4GB or more of VRAM or an M1 or M2 Mac. But if you don't have a compatible graphics card, you can still use it with a "[Use CPU](/docs/settings/#system-settings)" setting. It'll be very slow, but it should still work.

You do not need anything else. You do not need WSL, Docker or Conda. The installer will take care of it.

## Installation

### Windows
1. [**Download** for Windows](https://github.com/cmdr2/stable-diffusion-ui/releases/download/v2.5.24/Easy-Diffusion-Windows.exe)
2. Run the downloaded Easy-Diffusion-Windows.exe file. 
3. Run Easy Diffusion once the installation finishes. You can also start from your Start Menu, or from your desktop (if you created a shortcut).

This will automatically install Easy Diffusion, set it up, and start the interface. No additional steps are needed.

### Linux
1. [**Download** for Linux](https://github.com/cmdr2/stable-diffusion-ui/releases/download/v2.5.24/Easy-Diffusion-Linux.zip)

2. **Extract**:
  - Extract the file with your favourite file manager, or use `unzip Easy-Diffusion-Linux.zip` in a terminal.
  - After extracting the .zip file, please open a terminal, and go to the `easy-diffusion` directory.

3. **Run**:
  - In the terminal, run `./start.sh` (or `bash start.sh`)

This will automatically install Easy Diffusion, set it up, and start the interface. No additional steps are needed.

### MacOS
1. [**Download** for MacOS](https://github.com/cmdr2/stable-diffusion-ui/releases/download/v2.5.24/Easy-Diffusion-Mac.zip)

2. **Extract**:
  - Extract the file with your favourite file manager, or use `unzip Easy-Diffusion-Mac.zip` in a terminal.
  - After extracting the .zip file, please open a terminal, and go to the `easy-diffusion` directory.

3. **Run**:
  - In the terminal, run `./start.sh` (or `bash start.sh`)

This will automatically install Easy Diffusion, set it up, and start the interface. No additional steps are needed.

## Uninstall
Just delete the `easy-diffusion` folder to uninstall all the downloaded packages.

## Updates
The software updates itself every time you start it. By default, it will update to the latest stable version. If you want to test out new features, you can 
switch to the beta chanel in the system settings:
![screenshot of the system settings showing the beta channel checkbox](/media/system-settings-v2.jpg)

