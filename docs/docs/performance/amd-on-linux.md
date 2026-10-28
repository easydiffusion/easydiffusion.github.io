# AMD on Linux

If your PC only has integrated graphics, skip this setting. Following these steps will cause errors on such systems.

Easy Diffusion needs access to the GPU devices to use them for computations.

1. Check the owner of one of these devices:
    ```sh
    ls -al /dev/kfd
    ```

2. Determine the name of the group:
    ```
    crw-rw---- 1 root render 511, 0 Sep  3 11:31 /dev/kfd
                      ******
    ```
    In this example, the group owning the file is called `render`

3. Check whether your user is member of this group:
    ```sh
    groups
    ```
    If your user is already a member of the group, you're done.

4. If your user is not yet a member, add it to the group:
    ```sh
    sudo usermod -aG render $USER
    ```
    Replace `render` by the name of the group if it has a different name in your Linux distribution.

5. Log off and log on again to make this change effective.

