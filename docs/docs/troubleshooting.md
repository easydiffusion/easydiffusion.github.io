# Troubleshooting

Common issues and their solutions. If these solutions don't work, please ask at the [discord server](https://discord.com/invite/u9yhsFmEkB) or [file an issue](https://github.com/easydiffusion/easydiffusion/issues).

## Very very slow rendering on NVIDIA cards on Windows
Please follow these instructions at https://nvidia.custhelp.com/app/answers/detail/a_id/5490/~/system-memory-fallback-for-stable-diffusion , but use `C:\path\to\EasyDiffusion\installer_files\env\python.exe` in Step 1.

NVIDIA drivers after version 532 use the system RAM as shared memory (which is very very slow). This behavior kicks in when the GPU memory is almost full (e.g. for very large images). This slows down rendering by nearly 20 times.

If you're on the latest NVIDIA driver, you can disable this behavior in the driver settings to prevent Easy Diffusion from using shared memory. That setting will be only for Easy Diffusion, it won't affect other programs.

![image](https://github.com/easydiffusion/easydiffusion/assets/844287/d7aa8810-9699-4608-b14f-a10f6e11819c)


![image](https://github.com/easydiffusion/easydiffusion/assets/844287/92180fbf-740f-4f52-a55c-7bd3706c8c7b)


## RuntimeError: CUDA out of memory
This can happen if your PC has less than 6GB of GPU RAM.

Try setting a lower "VRAM Usage Level" setting in the "Settings" tab.

Also try generating smaller sized images.

## urllib.error.URLError: <urlopen error [Errno 11001] getaddrinfo failed>
This can be due to a Firewall/Antivirus/Proxy/VPN blocking your network connections. Please check those.

Another solution is to switch to Google's DNS server: https://developers.google.com/speed/public-dns/docs/using#windows or Cloudflare's DNS server: https://developers.cloudflare.com/1.1.1.1/setup/windows/

## ImportError libSM.so.6 cannot open shared object file No such file or directory
Please run `apt install libsm6 libxext6 libxrender-dev -y` (you may need to put `sudo` before this)

And try again.

## Could not load the Qt platform plugin "xcb"
In Linux, please run this before running start.sh: `export QT_QPA_PLATFORM=offscreen`

## ImportError: DLL load failed while importing cv2: The specified module could not be found.
If you're running Windows 10 N or Windows 10 KN (or any of its Pro, Education, ... variants), [the Microsoft Media Feature Pack](https://www.microsoft.com/en-us/software-download/mediafeaturepack) is needed to run Stable Diffusion.

## Killed uvicorn server:app --app-dir ... --port 9000 --host 0.0.0.0
This happens if your PC ran out of RAM. Stable Diffusion requires a lot of RAM, and requires atleast 10 GB of RAM to work well. You can also try closing all other applications before running Stable Diffusion UI.

## The revocation function was unable to check revocation because the revocation server was offline
A temporary workaround is to disable SSL checks. Run this in the developer console:
```
git config --global http.sslBackend schannel
git config --global http.sslVerify false
```
To re-enable SSL checks, run:
```
git config --global http.sslVerify true
```
Disabling SSL checks can enable attackers to inject malware into your downloads.

## For support queries
## Entering a conda environment in an existing installation
This will give you an activated conda environment in the terminal, so you can run commands and force-install any packages, if required.

Users don't need to have the Anaconda Prompt installed to do this anymore, since the installer bundles a portable version of conda inside it. Just follow these steps.

**Windows:**

1. Run the `Developer Console.cmd` file (inside the project folder) by double-clicking it.
2. Type `python --version` and press enter. You should see 3.8.5.

**Linux:**

1. Open the terminal
2. Type `cd /path/to/stable-diffusion-ui` and press enter
3. Type `./developer_console.sh` and press enter
4. Type `python --version` and press enter. You should see 3.8.5.

This will give you an activated conda environment. You can now run conda or pip commands to install or change packages.
