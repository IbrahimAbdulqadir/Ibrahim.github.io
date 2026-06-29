# Ibrahim Abdulqadir — Portfolio Site

## File structure

```
portfolio-site/
├── index.html          ← main page
├── css/
│   └── style.css        ← all styling
├── js/
│   └── script.js         ← drawer, scroll reveal, filters, contact form
├── assets/
│   └── images/
│       └── profile.jpg   ← your photo
└── README.md
```

Fonts (Google Fonts) and icons (Font Awesome, Devicon) are loaded from CDN links in the `<head>` of `index.html` — no install needed, just an internet connection in the browser.

## Open it in VS Code

1. Unzip this folder anywhere, e.g. `Documents/portfolio-site`.
2. In VS Code: `File → Open Folder...` → select `portfolio-site`.
3. Install the **Live Server** extension (by Ritwick Dey) if you don't have it — fastest way to preview with auto-reload.
4. Right-click `index.html` → **Open with Live Server**. It'll open at something like `http://127.0.0.1:5500`.

Edit `css/style.css` for colors/spacing, `js/script.js` for behavior, and the content directly inside `index.html`.

## Run it with XAMPP

1. Copy the whole `portfolio-site` folder into XAMPP's `htdocs` directory:
   - Windows: `C:\xampp\htdocs\portfolio-site`
   - macOS: `/Applications/XAMPP/htdocs/portfolio-site`
   - Linux: `/opt/lampp/htdocs/portfolio-site`
2. Start XAMPP and turn on **Apache** from the control panel.
3. Visit `http://localhost/portfolio-site/` in your browser.

You don't actually need MySQL/PHP for this site since it's plain HTML/CSS/JS — Apache alone is enough to serve it.

## Making it live on the internet

When you're ready to publish for real (not just localhost), this static site deploys easily and for free on:
- **Vercel** (`vercel.com`) — drag-and-drop the folder or connect a GitHub repo
- **Netlify** (`netlify.com`) — same, drag-and-drop deploy
- **GitHub Pages** — push the folder to a repo, enable Pages in repo settings

All three just need the static files — no server-side setup required.

## Things still worth filling in

- `index.html` → contact section: replace `your.email@example.com` with your real email (appears twice: contact card + mailto form handler in `script.js`)
- Drawer social links → add your real LinkedIn URL (currently `#`)
- "My Resume" link in the drawer → point it to an actual resume PDF once you have one hosted
- Project GitHub links → only RedMind points to a real repo; the others point to your GitHub profile as a placeholder
