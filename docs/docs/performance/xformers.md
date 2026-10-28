# xFormers

**[xFormers](https://github.com/facebookresearch/xformers)** can speed up image generation (nearly twice as fast) and use less GPU memory. It's widely used and works quite well, but it can sometimes produce different images (for the same prompt+settings) compared to what you generated previously.

**Important!!** xFormers will only help on PCs with NVIDIA GPUs. It is not useful on CPU-only computers or M1/M2 Macs.

## Installing xFormers

1. Double-click `Developer Console.cmd` (on Windows) or run `./developer_console.sh` (on Linux/Mac)
2. Run `python -m pip show torch torchvision` (**important:** please make a note of these two versions, incase you need to revert back to them)
3. Run the follow command:
 `python -m pip install --upgrade xformers --index-url https://download.pytorch.org/whl/cu128`

That should be enough, you can now start Easy Diffusion like normal.

## Removing xFormers
If you face any issues, please rollback by:

1. Double-click `Developer Console.cmd` (on Windows) or run `./developer_console.sh` (on Linux/Mac)
2. Run `python -m pip uninstall xformers`
3. Optionally, revert the `torch` and `torchvision` version to what you had previously:
- Windows or Linux: Run `python -m pip install torch==version_noted_above torchvision==version_noted_above --index-url https://download.pytorch.org/whl/cu128`
- Mac: Run `python -m pip install torch==version_noted_above torchvision==version_noted_above`