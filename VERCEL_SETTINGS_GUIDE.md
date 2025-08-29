# Vercel Configuration Guide for Listed Productions

## 🚀 Vercel Project Settings

### 1. Framework Preset
- **Framework Preset:** `Gatsby`
- Vercel should auto-detect this, but make sure it's selected

### 2. Build & Development Settings

#### Build Command:
```bash
npm run build
```
Or if you need legacy peer deps (recommended for this project):
```bash
npm install --legacy-peer-deps && npm run build
```

#### Output Directory:
```bash
public
```

#### Install Command:
```bash
npm install --legacy-peer-deps
```

### 3. Node.js Version
**IMPORTANT:** Set Node.js version to **20.x** (LTS until April 2026)

In Vercel dashboard:
1. Go to Settings → General
2. Node.js Version: Select `20.x`

Or add to your project root:
```json
// .nvmrc file
20
```

Or in vercel.json:
```json
{
  "build": {
    "env": {
      "NODE_VERSION": "20"
    }
  }
}
```

### 4. Environment Variables
Add these in Vercel Dashboard → Settings → Environment Variables:

```bash
# Required for Contentful
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_delivery_token_here
CONTENTFUL_ENVIRONMENT=master

# Optional but recommended
NODE_OPTIONS=--max-old-space-size=4096
```

### 5. Root Directory
- Leave blank (project is at repository root)
- Or set to `.` if needed

## 📋 Complete Vercel Configuration

### Option 1: Via Vercel Dashboard

1. **General Settings:**
   - Framework Preset: `Gatsby`
   - Node.js Version: `20.x`
   - Root Directory: (leave empty)

2. **Build & Development Settings:**
   - Build Command: `npm install --legacy-peer-deps && npm run build`
   - Output Directory: `public`
   - Install Command: `npm install --legacy-peer-deps`

3. **Environment Variables:**
   ```
   CONTENTFUL_SPACE_ID = [your-space-id]
   CONTENTFUL_ACCESS_TOKEN = [your-token]
   CONTENTFUL_ENVIRONMENT = master
   NODE_OPTIONS = --max-old-space-size=4096
   ```

### Option 2: Using vercel.json (Recommended)

Create/update `vercel.json` in your project root:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "public",
  "framework": "gatsby",
  "installCommand": "npm install --legacy-peer-deps",
  "build": {
    "env": {
      "NODE_VERSION": "20",
      "NODE_OPTIONS": "--max-old-space-size=4096"
    }
  },
  "functions": {
    "api/contact.js": {
      "maxDuration": 10
    }
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

## 🔧 Troubleshooting Common Issues

### Issue: "Could not resolve dependency" errors
**Solution:** Use legacy peer deps in install command:
```bash
npm install --legacy-peer-deps
```

### Issue: "JavaScript heap out of memory"
**Solution:** Add to environment variables:
```bash
NODE_OPTIONS=--max-old-space-size=4096
```

### Issue: "Cannot find module" errors
**Solution:** Clear cache and rebuild:
1. In Vercel, go to Settings → Advanced
2. Delete "BUILD_CACHE" 
3. Redeploy

### Issue: Sharp installation failures
**Solution:** Ensure Node 20.x and add to install command:
```bash
npm install --legacy-peer-deps --platform=linux --arch=x64 sharp
```

## 📌 Deployment Checklist

Before deploying, verify:

- [ ] Node version set to 20.x
- [ ] Build command includes `--legacy-peer-deps`
- [ ] Environment variables are set (CONTENTFUL_*)
- [ ] vercel.json is committed (if using)
- [ ] gatsby-plugin-webpack-bundle-analyzer is removed
- [ ] All changes are pushed to repository

## 🚀 Deploy Command

If using Vercel CLI locally:
```bash
vercel --prod
```

Or push to your connected Git repository to trigger automatic deployment.

## 📊 Expected Build Output

A successful build should show:
- "success compile gatsby files"
- "info Creating 32 Contentful artist nodes"
- "success Building production JavaScript and CSS bundles"
- "success Building static HTML for pages"
- "info Done building in [time]"

## 🔗 Useful Links

- [Vercel Gatsby Documentation](https://vercel.com/guides/deploying-gatsby-with-vercel)
- [Node.js Version Support](https://vercel.com/docs/runtimes/node-js)
- [Environment Variables](https://vercel.com/docs/environment-variables)
