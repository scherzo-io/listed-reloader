# Build Test & Optimization Suite

## 🔧 1. Dependency Resolution

### Current Issues:
- [ ] Sharp version conflict (v0.29.3 → v0.30.7)
- [ ] google-map-react React 18 compatibility
- [ ] Legacy peer deps requirements

### Actions:
```bash
# Clean everything first
rm -rf node_modules package-lock.json .cache public

# Install with legacy peer deps
npm install --legacy-peer-deps

# Or use npm 7+ overrides in package.json
```

## 🧪 2. Local Build Testing

### Full Build Test:
```bash
# Development build
npm run develop
# Check: http://localhost:8000

# Production build
npm run build
npm run serve
# Check: http://localhost:9000
```

### Pages to Test:
- [ ] Homepage (`/`)
- [ ] Artists listing (`/artists`)
- [ ] Individual artist pages (`/artists/[slug]`)
- [ ] Productions (`/productions`)
- [ ] News/Buzz (`/news`)
- [ ] Contact (`/contact`)

### Features to Verify:
- [ ] Artist dropdown menu populates
- [ ] Artist grid displays square images
- [ ] Individual artist pages load with:
  - [ ] Header animation (random colors)
  - [ ] Bio content from Contentful
  - [ ] Social media links
  - [ ] Embedded media (SoundCloud, YouTube, Spotify)
  - [ ] Gigwell integration
- [ ] Navigation works on mobile
- [ ] Forms submit correctly

## 📊 3. Performance Optimization

### Bundle Analysis:
```bash
# Install bundle analyzer
npm install --save-dev gatsby-plugin-webpack-bundle-analyzer

# Add to gatsby-config.js:
{
  resolve: 'gatsby-plugin-webpack-bundle-analyzer',
  options: {
    production: true,
    disable: !process.env.ANALYZE_BUNDLE,
  },
}

# Run analysis
ANALYZE_BUNDLE=true npm run build
```

### Image Optimization:
- [ ] Use gatsby-plugin-image for all images
- [ ] Implement lazy loading
- [ ] Optimize Contentful image queries
- [ ] Add WebP/AVIF formats

### Code Splitting:
- [ ] Lazy load heavy components
- [ ] Split vendor bundles
- [ ] Remove unused CSS

## 🎯 4. Quality Checks

### Linting & Formatting:
```bash
# Add ESLint
npm install --save-dev eslint eslint-plugin-react

# Format code
npx prettier --write "src/**/*.{js,jsx,css}"

# Check for issues
npm run lint
```

### Console Errors:
- [ ] No errors in development console
- [ ] No errors in production build
- [ ] No missing dependencies warnings
- [ ] No React hydration errors

### SEO & Meta:
- [ ] Page titles set correctly
- [ ] Meta descriptions present
- [ ] Open Graph tags working
- [ ] Sitemap generates properly

## 🚀 5. Performance Metrics

### Lighthouse Audit:
```bash
# Build production
npm run build

# Serve locally
npm run serve

# Run Lighthouse (Chrome DevTools)
# Target scores:
# - Performance: > 90
# - Accessibility: > 95
# - Best Practices: > 90
# - SEO: > 95
```

### Core Web Vitals:
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1

## 🔒 6. Security & Environment

### Environment Variables:
```bash
# Test production env locally
cp .env.production .env.development.backup
npm run build
npm run serve
```

### Security Headers:
- [ ] CSP headers configured
- [ ] X-Frame-Options set
- [ ] X-Content-Type-Options set

## 📦 7. Pre-Deployment Checklist

### Git & Version Control:
```bash
# Ensure clean working directory
git status

# Update .gitignore
# Should include:
# - .env*
# - .cache/
# - public/
# - node_modules/
# - .vercel/

# Commit all changes
git add .
git commit -m "Production ready: dependencies fixed, optimized build"
git push origin master
```

### Package.json Scripts:
```json
{
  "scripts": {
    "develop": "gatsby develop",
    "build": "gatsby build",
    "serve": "gatsby serve",
    "clean": "gatsby clean",
    "test": "npm run build && npm run serve",
    "analyze": "ANALYZE_BUNDLE=true gatsby build"
  }
}
```

### Vercel Configuration:
```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "public",
  "framework": "gatsby",
  "installCommand": "npm install --legacy-peer-deps",
  "build": {
    "env": {
      "NODE_VERSION": "18"
    }
  }
}
```

## ✅ 8. Final Deployment Steps

### Local Verification:
```bash
# Final clean build
gatsby clean
npm install --legacy-peer-deps
npm run build
npm run serve
# Test everything at http://localhost:9000
```

### Deploy to Vercel:
```bash
# Deploy preview
vercel

# Deploy to production
vercel --prod
```

### Post-Deployment:
- [ ] Verify all environment variables set
- [ ] Test production URL
- [ ] Check all pages load
- [ ] Monitor for errors in Vercel dashboard
- [ ] Set up domain (if applicable)
- [ ] Configure webhooks for Contentful

## 🐛 Common Issues & Fixes

### Issue: Sharp installation fails
```bash
# Fix: Clear npm cache
npm cache clean --force
rm -rf node_modules
npm install --platform=linux --arch=x64 sharp
```

### Issue: Build fails on Vercel
```bash
# Add to vercel.json
"installCommand": "npm install --legacy-peer-deps --platform=linux --arch=x64 sharp"
```

### Issue: Contentful content not showing
```bash
# Verify env vars
echo $CONTENTFUL_SPACE_ID
echo $CONTENTFUL_ACCESS_TOKEN

# Clear cache and rebuild
gatsby clean
npm run develop
```

## 📈 Monitoring

### Setup monitoring for:
- [ ] Uptime monitoring (UptimeRobot, Pingdom)
- [ ] Error tracking (Sentry)
- [ ] Analytics (Google Analytics, Vercel Analytics)
- [ ] Performance monitoring (Web Vitals)

## 🎉 Success Criteria

Before deploying, ensure:
- ✅ All pages load without errors
- ✅ Lighthouse scores > 85 across all metrics
- ✅ No console errors or warnings
- ✅ All Contentful content displays correctly
- ✅ Navigation and interactions work smoothly
- ✅ Build completes successfully locally
- ✅ Production build serves correctly at localhost:9000
