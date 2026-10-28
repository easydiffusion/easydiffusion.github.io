# Sharing your instance

You can let other people use your Easy Diffusion, from other devices on your network, or over the internet. Both options are configured in the Settings tab, in the **Share Easy Diffusion** section.

> **Please be careful**: anyone who can reach the shared address can use your Easy Diffusion, including generating images and changing settings. Only share with people you trust.

## On your local network

1. In the Settings tab, enable **`Make Stable Diffusion available on your network`**.
2. Set the **`Network port`** if needed (the default is `9000`).
3. Press `Save` and restart Easy Diffusion.

The server addresses to use (e.g. `http://192.168.1.10:9000`) are shown in the Settings tab, in the **System Info** section. Other devices on the same network can open that address in their browser and generate images just like you do.

You can also set these before the first start, via `config.yaml`, see [Config settings](../reference/config-settings.md) (`listen_to_network` and `listen_port`).

## Over the internet: Cloudflare tunnel

To share your instance with people outside your network, use the built-in **Cloudflare tunnel**:

1. In the Settings tab, under `Cloudflare tunnel`, press **Start**.
2. A public URL is generated. Use the **copy** button next to it, and share the URL with the people who should have access.
3. Press **Stop** when you no longer want to share.

Please note:

* **Anyone who has the URL can access your Easy Diffusion.** Treat the URL like a password.
* The URL **changes each session**, you'll get a new one every time you start a tunnel (or restart Easy Diffusion), so share it again after each restart.

## Locking down what users can change

If you're sharing your instance (either way), you may want to prevent users from changing where images get saved. See [Config settings](../reference/config-settings.md) for the `force_save_path` and `force_save_metadata` config options.
