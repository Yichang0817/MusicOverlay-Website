# MusicOverlay Website

A static black-and-gold portfolio website for **MusicOverlay**, a lightweight Windows music overlay built with Electron, React, and TypeScript.

## Live site

https://yichang0817.github.io/MusicOverlay-Website/

## Publish with GitHub Pages

The site is plain HTML and CSS. GitHub Pages can deploy it directly from the `main` branch at the repository root; no build step is required.

## Files

- `index.html` — project overview, original screenshot gallery, video demo gallery, engineering notes, and roadmap
- `style.css` — responsive black-and-gold theme and media presentation rules
- `assets/musicoverlay-icon.png` — site brand icon and favicon
- `assets/player-one-ok-rock.png`
- `assets/player-happy-end.png`
- `assets/player-say-it-doesnt-cry.png`
- `assets/player-ama-no-jaku.png`
- `assets/player-small-mode-ado.png` — Small Mode screenshot (437 × 212)
- `assets/player-small-mode-lawrence.png` — Small Mode screenshot (573 × 287, original PNG)
- `assets/player-compact-mode.png`
- `assets/player-merry-christmas-mr-lawrence.png`
- `assets/mol-settings-demo.mp4` — Settings demo
- `assets/mol-player-demo.mp4` — Player demo

## Media quality

- The new Small Mode screenshot is stored as the original 573 × 287 PNG, without resizing or re-encoding. Other screenshots retain their existing formats.
- The two demo videos use the uploaded MP4 files directly and are not transcoded by the website.
- Image and video CSS uses intrinsic sizing, automatic height, and `max-width: 100%` to preserve aspect ratio and avoid enlarging media beyond the available layout width.
- Media may render smaller than its native size on narrow screens; open any screenshot in a new tab to view the original file.

## Before sharing

- Check public screenshots and page text for private paths, credentials, personal information, and unfinished-feature claims.
- Add a GitHub Release link only after a Windows build has been packaged and validated.

## Original application

Source code: https://github.com/Yichang0817/MusicOverlay

GitHub Pages presents the project; it does not run or distribute the Electron desktop application.


## Language switching

The site supports English and Traditional Chinese (繁體中文) across the navigation, hero, feature cards, screenshot and video galleries, engineering notes, architecture diagram, and roadmap. Use the language button in the header to switch the page language. The choice is saved in the browser, and the first visit defaults to the browser language when it is Chinese, or English otherwise.

- `i18n.js` contains the translation dictionaries, language toggle behavior, accessibility-label translations, and saved language preference.
- `index.html` marks translatable page content and accessibility attributes.
- `style.css` styles the language control while preserving the existing black-and-gold theme.


## Screenshot gallery

Screenshots are grouped by the actual interface layout: Medium Mode (four full player examples), Small Mode (two smaller player examples: Ado — New Genesis and Merry Christmas Mr. Lawrence), and Compact Mode (one slim player example). Images preserve their aspect ratios and are not forced to upscale. Small Mode uses a two-column gallery on desktop and stacks vertically on narrow screens.
