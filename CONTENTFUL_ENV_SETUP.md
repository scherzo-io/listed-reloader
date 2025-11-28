# Contentful Environment Setup

## Required Environment Variables

Create a `.env.local` file in your project root with these variables:

```bash
# Your Contentful Space ID
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your_space_id_here

# Your Contentful Content Delivery API Access Token
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your_access_token_here

# Optional: Contentful Environment (defaults to 'master')
# NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT=master
```

## How to Get Your Contentful Credentials

1. **Login to Contentful**: Go to [app.contentful.com](https://app.contentful.com)

2. **Select Your Space**: Choose the space for Listed Productions

3. **Get Space ID**:
   - Go to Settings → General settings
   - Copy the Space ID

4. **Get Access Token**:
   - Go to Settings → API keys
   - Select or create a Content Delivery API key
   - Copy the Content Delivery API access token

## For Vercel Deployment

Add the same environment variables in your Vercel project:

1. Go to your project in Vercel Dashboard
2. Navigate to Settings → Environment Variables
3. Add:
   - `NEXT_PUBLIC_CONTENTFUL_SPACE_ID`
   - `NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN`
   - Optional: `NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT`

## Content Types Required in Contentful

Your Contentful space should have these content types:

### 1. Artist
- `name` (Short text, required)
- `slug` (Short text, required, unique)
- `bio` (Rich text)
- `image` (Media)
- `soundcloud` (Short text, URL)
- `video` (Short text, URL)
- `instagram` (Short text, URL)
- `facebook` (Short text, URL)
- `spotify` (Short text, URL)
- `residentAdvisor` (Short text, URL)

### 2. Post
- `title` (Short text, required)
- `slug` (Short text, required, unique)
- `excerpt` (Long text, required)
- `content` (Rich text)
- `featuredImage` (Media)
- `category` (Short text)
- `publishDate` (Date & time)

### 3. Event
- `title` (Short text, required)
- `slug` (Short text, required, unique)
- `description` (Rich text)
- `date` (Date & time, required)
- `venue` (Short text, required)
- `image` (Media)
- `artists` (References, many, accept only Artist)

## Testing the Connection

After setting up your environment variables, test the connection:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and check:
- Artists page should show your Contentful artists
- News page should show your Contentful posts
- Events page should show your Contentful events

If no content appears, check:
1. Environment variables are correctly set
2. Content is published in Contentful
3. Console for any error messages

## Fallback Data

The site includes sample data that displays when:
- Contentful is not configured
- No content is available
- API requests fail

This ensures the site always displays content during development and demos.
