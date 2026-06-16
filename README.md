# 🌌 Wallpaper Web Extension

A modern, glassmorphism-inspired Chrome New Tab extension built for speed, simplicity, and aesthetics.

Transform the default Chrome new tab into a clean productivity dashboard featuring:

- 🕒 Live Digital Clock
- 📅 Current Date
- 🔍 Expandable Google Search
- 📚 Shortcut Drawer
- 🖼️ Custom Wallpaper Support
- ✨ Smooth Glass UI Effects
- 🚀 Lightweight & Fast

---

# 📂 Project Structure

```text
root/
│
├── manifest.json
│
├── index.html
│
├── assets/
│   └── wallpaper.jpg
│
├── css/
│   ├── style.css
│   └── animations.css
│
└── js/
    ├── clock.js
    ├── drawer.js
    ├── search.js
    └── background.js
```

---

# 🚀 Installation

## Step 1

Download or clone the project.

```bash
git clone https://github.com/Balasrivatsa9102005/NeoTheme-Web-extension-for-chrome.git
```

or simply place all files inside a folder.

Example:

```text
Desktop/
└── root/
```

---

## Step 2

Open Chrome.

Navigate to:

```text
chrome://extensions
```

---

## Step 3

Enable:

```text
Developer Mode
```

(top-right corner)

---

## Step 4

Click:

```text
Load Unpacked
```

Select:

```text
BaluTab/
```

folder.

---

## Step 5

Open a new tab.

Your custom homepage should appear instantly.

---

# 🔄 Updating Changes

Whenever you modify:

- HTML
- CSS
- JavaScript
- Wallpaper

you must reload the extension.

Go to:

```text
chrome://extensions
```

Find:

```text
Balu's Tab
```

Click:

```text
Reload ↻
```

Then open a new tab.

---

# 🖼️ Changing Wallpaper

Navigate to:

```text
assets/
```

Replace:

```text
wallpaper.jpg
```

with your preferred image.

Keep the same filename:

```text
wallpaper.jpg
```

No code changes required.

Reload the extension afterwards.

---

# 🔍 Search

Click the search icon in the bottom-left corner.

The search bar expands.

Press:

```text
Enter
```

to search Google.

---

# 📚 Shortcuts Drawer

Click the menu button in the bottom-right corner.

The shortcuts panel slides in.

Current shortcuts:

- ChatGPT
- GitHub
- LeetCode
- YouTube
- LinkedIn
- VTOP

---

# ➕ Adding New Shortcuts

Inside:

```html
<div id="shortcutDrawer">
```

Add:

```html
<a href="https://example.com" target="_blank">
    <i class="fa-solid fa-star"></i>
    <span>Example</span>
</a>
```

You can use any Font Awesome icon.

Reference:

https://fontawesome.com/icons

---

# 🎨 Customization

## Clock Position

Edit:

```css
.clock-card {
    top: 30px;
    right: 30px;
}
```

---

## Search Position

Edit:

```css
#searchContainer {
    left: 30px;
    bottom: 30px;
}
```

---

## Drawer Position

Edit:

```css
#drawerToggle {
    right: 30px;
    bottom: 30px;
}
```

---

## Glass Blur Strength

Clock:

```css
.clock-card {
    backdrop-filter: blur(12px);
}
```

Drawer:

```css
#shortcutDrawer {
    backdrop-filter: blur(15px);
}
```

Lower values = clearer background.

Higher values = stronger blur.

---

# ⚡ Performance Tips

For best performance:

- Use JPG wallpapers
- Keep wallpaper under 5 MB
- Avoid ultra-heavy animations
- Keep blur between 10px and 20px

Recommended:

```css
blur(12px)
```

---

# 🛠 Troubleshooting

## Changes Not Showing

Reload extension:

```text
chrome://extensions
```

↓

```text
Reload
```

---

## Wallpaper Not Updating

Make sure:

```text
assets/wallpaper.jpg
```

exists.

Then reload extension.

---

## New Tab Not Opening

Check:

```json
"chrome_url_overrides": {
    "newtab": "index.html"
}
```

inside:

```text
manifest.json
```

---

# 📌 Features Planned

- Wallpaper Switcher
- Daily Quotes
- Quick Notes
- Focus Timer
- Theme Presets
- Animated Backgrounds
- Weather Integration

---

# 👨‍💻 Author

**Panigrahi Bala Srivatsa**

B.Tech CSE (AI & ML)
VIT-AP University

GitHub:
https://github.com/Balasrivatsa9102005

---

Made with ☕, curiosity, and way too many Chrome tabs.
