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
- `assets/Screenshot 2026-10-26 11-10-07.png`
- `assets/Screenshot 2026-10-26 11-12-03.png`
- `assets/Screenshot 2026-10-26 11-16-00.png`
- `assets/Screenshot 2026-10-26 11-21-13.png`
- `assets/Screenshot 2026-10-26 11-33-58.png`
- `assets/Screenshot 2026-10-26 11-54-52.png`
- `assets/錄製內容 2026-10-26 113219.mp4` — Settings demo
- `assets/錄製內容 2026-10-26 115107.mp4` — Player demo

## Media quality

- The six screenshots are used as original PNG files; no conversion to WebP or other image format is performed by the website.
- The two demo videos use the uploaded MP4 files directly and are not transcoded by the website.
- Image and video CSS uses intrinsic sizing, automatic height, and `max-width: 100%` to preserve aspect ratio and avoid enlarging media beyond the available layout width.
- Media may render smaller than its native size on narrow screens; open any screenshot in a new tab to view the original file.

## Before sharing

- Check public screenshots and page text for private paths, credentials, personal information, and unfinished-feature claims.
- Add a GitHub Release link only after a Windows build has been packaged and validated.

## Original application

Source code: https://github.com/Yichang0817/MusicOverlay

GitHub Pages presents the project; it does not run or distribute the Electron desktop application.
