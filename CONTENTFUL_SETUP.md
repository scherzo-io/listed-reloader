# Contentful Setup Guide for Listed Productions

## ✅ Contentful Integration Complete!

I've integrated Contentful with your Next.js site. Here's how to connect your Contentful space:

## 1. Environment Variables

Create a `.env.local` file in your project root with your Contentful credentials:

```bash
# Required
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your_space_id_here
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your_access_token_here

# Optional
NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT=master
```

## 2. Getting Your Contentful Credentials

1. **Log in to Contentful**: https://app.contentful.com
2. **Go to Settings** → **API keys**
3. **Create or select an API key**
4. Copy:
   - **Space ID** 
   - **Content Delivery API - access token**

## 3. Content Models Required

Your Contentful space should have these content types:

### Artist Content Type
```
- name (Text, required)
- slug (Text, required, unique)
- bio (Rich Text)
- image (Media/Asset)
- soundcloud (URL)
- video (URL)
- instagram (URL)
- facebook (URL)
- spotify (URL)
- residentAdvisor (URL)
```

### Post Content Type
```
- title (Text, required)
- slug (Text, required, unique)
- excerpt (Text)
- content (Rich Text)
- featuredImage (Media/Asset)
- category (Text)
- publishDate (Date)
```

### Event Content Type
```
- title (Text, required)
- slug (Text, required, unique)
- description (Rich Text)
- date (Date, required)
- venue (Text, required)
- image (Media/Asset)
- artists (References, many Artist)
```

## 4. Import Your Existing Content

### Artists to Import:
- Atish
- Ben Annand
- Camea
- Dory
- Halo Varga
- Jay Tripwire
- Justin Marchacos
- KMLN
- Lovestruckk
- M.O.N.R.O.E
- Mark Slee
- Maxi Storrs
- Mightykat
- Mr. C
- Naveen G
- Nico Stojan
- Nikita
- Holmar
- Galen
- Nitin
- Bilaliwood
- H-Foundation
- Ray Zuniga
- Philipp Jung
- Anja Schneider
- Atnarko
- Sinca
- N/UM
- Matt Caines
- Reza Safinia
- Saqib
- Beauty & The Beast
- Formerly
- Niki Sadeki

### Posts to Import:
- Art With Me Miami
- Lee Coombs Live at The Cityfox Odyssey NYE
- The Real Deal Party Feel Feat. Atish
- Ben Annand Stellar Mix
- EMC² Podcast with Gunita

## 5. Testing the Integration

After setting up your environment variables:

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit http://localhost:3000 and your content should load from Contentful!

## 6. Deployment on Vercel

Add these environment variables in your Vercel dashboard:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add:
   - `NEXT_PUBLIC_CONTENTFUL_SPACE_ID`
   - `NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN`
   - `NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT` (optional)

## 7. Features Enabled

✅ **Dynamic content loading** from Contentful
✅ **Image optimization** using Contentful's Image API
✅ **Rich text rendering** for artist bios and post content
✅ **Fallback to sample data** if Contentful is not configured
✅ **Type-safe** content models
✅ **Error handling** with graceful fallbacks

## 8. Optional: Preview Mode

To enable preview mode for draft content:

1. Get your Preview API token from Contentful
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_token
   ```
3. Access preview content at `/api/preview?secret=your-secret`

## Troubleshooting

### Content not showing?
- Check environment variables are set correctly
- Verify content is published in Contentful
- Check browser console for errors
- Ensure content type names match exactly

### Images not loading?
- Verify images are uploaded to Contentful
- Check image field names match

### Build errors?
- Run `npm install` to ensure Contentful packages are installed
- Clear Next.js cache: `rm -rf .next`

## Next Steps

1. Set up your Contentful space
2. Import your content
3. Add environment variables
4. Deploy to Vercel
5. Your site will now pull content from Contentful! 🎉
