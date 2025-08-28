# Deploying to Vercel

This guide will walk you through deploying your Listed Productions Gatsby site to Vercel.

## Prerequisites

1. A [Vercel account](https://vercel.com/signup) (free tier is sufficient)
2. [Vercel CLI](https://vercel.com/cli) (optional, for command line deployment)
3. A GitHub, GitLab, or Bitbucket account (for automatic deployments)

## Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push to Git Repository

First, ensure your code is pushed to a Git repository:

```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin master
```

### Step 2: Import Project to Vercel

1. Go to [vercel.com](https://vercel.com) and log in
2. Click "Add New..." → "Project"
3. Import your Git repository
4. Vercel will auto-detect Gatsby framework

### Step 3: Configure Build Settings

Vercel should auto-detect these settings, but verify:

- **Framework Preset**: Gatsby
- **Build Command**: `npm run build` or `gatsby build`
- **Output Directory**: `public`
- **Install Command**: `npm install`

### Step 4: Add Environment Variables

In the "Environment Variables" section, add:

```
CONTENTFUL_SPACE_ID=tnmpb33y98ua
CONTENTFUL_ACCESS_TOKEN=yy1MT34uffo8vn_6N7Q02BqkYZ-BltesXraG5IbuQUk
CONTENTFUL_HOST=cdn.contentful.com
```

### Step 5: Deploy

Click "Deploy" and Vercel will:
1. Clone your repository
2. Install dependencies
3. Build your site
4. Deploy to a unique URL

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm i -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

From your project directory:

```bash
vercel
```

Follow the prompts:
- Set up and deploy: Y
- Which scope: Choose your account
- Link to existing project?: N (first time) or Y (subsequent deploys)
- What's your project's name?: listed-productions (or your choice)
- In which directory is your code located?: ./
- Want to override the settings?: N

### Step 4: Set Environment Variables

```bash
vercel env add CONTENTFUL_SPACE_ID production
vercel env add CONTENTFUL_ACCESS_TOKEN production
vercel env add CONTENTFUL_HOST production
```

Enter the values when prompted:
- CONTENTFUL_SPACE_ID: `tnmpb33y98ua`
- CONTENTFUL_ACCESS_TOKEN: `yy1MT34uffo8vn_6N7Q02BqkYZ-BltesXraG5IbuQUk`
- CONTENTFUL_HOST: `cdn.contentful.com`

### Step 5: Deploy to Production

```bash
vercel --prod
```

## Method 3: Direct Upload (Quick Test)

For a quick test without Git:

```bash
# Build locally first
npm run build

# Deploy the public folder directly
vercel --prod public
```

**Note**: This method doesn't set up automatic deployments.

## Post-Deployment

### Custom Domain

1. Go to your project settings in Vercel Dashboard
2. Navigate to "Domains"
3. Add your custom domain (e.g., listedproductions.com)
4. Follow DNS configuration instructions

### Automatic Deployments

With Git integration, Vercel automatically deploys:
- Production deployment on push to `main`/`master`
- Preview deployments for pull requests

### Build Hooks (Optional)

To trigger rebuilds when Contentful content changes:

1. In Vercel Dashboard → Settings → Git → Deploy Hooks
2. Create a hook for production branch
3. Copy the URL
4. In Contentful → Settings → Webhooks
5. Add webhook with Vercel URL
6. Select events (publish, unpublish, etc.)

## Troubleshooting

### Build Failures

If build fails, check:

1. **Environment Variables**: Ensure all are set correctly in Vercel
2. **Node Version**: The `vercel.json` specifies Node 18
3. **Build Logs**: Check Vercel dashboard for detailed error messages

### Common Issues

1. **Missing Environment Variables**
   - Solution: Add them in Vercel Dashboard → Settings → Environment Variables

2. **Build Timeout**
   - Solution: Optimize build or upgrade Vercel plan for longer builds

3. **404 on Routes**
   - Solution: Gatsby handles routing, this shouldn't occur with proper setup

## Monitoring

- View deployment status in Vercel Dashboard
- Check Functions tab for any serverless functions
- Monitor Analytics for performance metrics

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Gatsby on Vercel](https://vercel.com/guides/deploying-gatsby-with-vercel)
- [Vercel Support](https://vercel.com/support)

## Important Notes

1. The `vercel.json` file in this project is pre-configured for optimal Gatsby deployment
2. Environment variables are required for Contentful integration
3. The site uses Gatsby v4 with incremental builds support
4. Ensure `.env.production` is NOT committed to Git (it's in .gitignore)
