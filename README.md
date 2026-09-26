# UMI-WM project page

Interactive World Modeling for Bimanual Manipulation from Wrist Cameras.

- Canonical project page: https://www.lv-lab.org/umi-wm/
- GitHub Pages mirror: https://lv-robotics-lab.github.io/umi-wm-project-page/

This repository owns the complete public project website and its assets. The LV-Lab website includes this public repository as a Git submodule at `umi-wm/`; project files remain independently maintained here.

## Preview

Run `python3 -m http.server 4174` in this directory. All assets and fonts are served locally, with no analytics or tracking scripts.

## Publish

GitHub Pages publishes the root of `main`. After updating this repository, update the `umi-wm` submodule pointer in `LVLab-SMU/LVLab-SMU.github.io` to publish that revision at the canonical URL. Its Pages build pulls in the public submodule automatically.

See [THIRD_PARTY.md](THIRD_PARTY.md) for template and asset notices. The anonymous review site is maintained separately.
