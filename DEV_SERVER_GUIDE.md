# Development Server Configuration

## ✅ Changes Made

### 1. **Prevent Auto-Opening in Cursor**
The development server will no longer auto-open in Cursor's preview window.

### 2. **External Links Open in Chrome**
All external links (social media, etc.) now explicitly open in Chrome/default browser.

## 🚀 How to Use

### Start Dev Server (Terminal Only)
```bash
npm run dev
```
This will start the server WITHOUT opening any browser. You'll see:
```
▲ Next.js 15.0.3 (Turbopack)
- Local: http://localhost:3000
```

### Manually Open in Chrome
1. **Copy the URL**: `http://localhost:3000`
2. **Open Chrome** 
3. **Paste the URL** in Chrome's address bar

### Alternative: Auto-Open in Chrome
If you want to automatically open in Chrome when starting:
```bash
npm run dev:open
```
This will open Chrome first, then start the server.

## 🔗 Link Behavior

### Internal Links (Your Site)
- Clicking links to `/artists`, `/news`, etc. will navigate within the same tab

### External Links (Social Media, etc.)
- Will always open in a new Chrome tab
- Won't open in Cursor's preview window

## 💡 Tips

### If Cursor Preview Opens Anyway:
1. Close the Cursor preview tab
2. Go to Cursor Settings → Features
3. Disable "Preview" or "Browser Preview"
4. Use Chrome exclusively for testing

### For Mac Users:
To ensure Chrome is your default browser:
1. Open System Preferences → General
2. Set "Default web browser" to Google Chrome

### For Windows Users:
1. Settings → Apps → Default apps
2. Set Google Chrome as default browser

## 🛠️ Terminal Commands

```bash
# Start server (no auto-open)
npm run dev

# Start server + open Chrome
npm run dev:open

# Build for production
npm run build

# Run production build
npm run start
```

## 📝 Note

The dev server runs on port 3000 by default. If that port is busy, it will use 3001, 3002, etc. Always check the terminal output for the actual URL.
