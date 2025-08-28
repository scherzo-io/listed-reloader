# Contentful Integration - Listed Productions

## ✅ Your Contentful Space Structure

Your Contentful space (ID: `tnmpb33y98ua`) contains:

### Content Types & Current Content

1. **Artists** (`artist`) - 32 entries
   - `title` - Artist name
   - `slug` - URL slug
   - `featuredImage` - Artist photo
   - `bio` - Rich text biography
   - `socialLinks` - JSON object containing:
     - facebook, instagram, soundcloud, spotify URLs
     - residentAdvisor link
     - pressKit link
     - Widget embed URLs (soundcloudWidget, youtubeWidget, spotifyWidget)
   - `dateCreated` - Creation date
   - `gigwellAgencyId`, `gigwellArtistId` - Gigwell integration

2. **Productions** (`productions`) - 1 entry
   - The main productions page content
   
3. **Contact Page** (`contactPage`) - 1 entry
   - Contact information and page content

4. **Home Banner** (`homeBanner`) - 4 entries
   - Banner images for the homepage

5. **Articles** (`article`) - 3 entries
   - News/blog posts

## 🔧 Setup Complete

### Files Created/Updated

1. **Environment Configuration**
   - `.env.development` - Contains your Contentful credentials
   - `gatsby-config.js` - Added Contentful source plugin

2. **Templates**
   - `src/templates/ContentfulArtist.js` - Individual artist page template
   - `src/templates/ArtistPageContentful.js` - Artists listing page using Contentful
   - `src/components/ContentfulArtistSection.js` - Component to display all artists

3. **Page Creation**
   - `gatsby-node.js` - Updated to create pages from Contentful artists

## 🎯 How It Works

### Artist Pages
- URL: `/artists/[slug]` (e.g., `/artists/atish`)
- Template: `ContentfulArtist.js`
- Displays: Artist photo, bio, social links, and embedded widgets

### Artists Listing Page
- URL: `/artists`
- Shows grid of all 32 artists from Contentful
- Each card links to individual artist page

### Social Links Structure
Your `socialLinks` field in Contentful is a JSON object. Example:
```json
{
  "facebook": "https://facebook.com/artistname",
  "instagram": "https://instagram.com/artistname",
  "soundcloud": "https://soundcloud.com/artistname",
  "spotify": "https://open.spotify.com/artist/...",
  "residentAdvisor": "https://ra.co/dj/...",
  "pressKit": "https://dropbox.com/...",
  "soundcloudWidget": "https://w.soundcloud.com/player/?url=...",
  "youtubeWidget": "https://youtube.com/embed/...",
  "spotifyWidget": "https://open.spotify.com/embed/..."
}
```

## 📊 Current Artists in Contentful

Your 32 artists include:
- Galen
- Atish  
- Atnarko
- (and 29 more...)

## 🚀 Next Steps

### To Use Contentful Content:

1. **Restart Development Server**
   ```bash
   npm run develop
   ```

2. **View Your Artists**
   - Visit http://localhost:8000/artists to see all artists from Contentful
   - Click any artist to see their full profile

3. **GraphQL Playground**
   - Visit http://localhost:8000/___graphql
   - Try this query to explore your content:
   ```graphql
   {
     allContentfulArtist {
       edges {
         node {
           title
           slug
           bio {
             raw
           }
           socialLinks {
             internal {
               content
             }
           }
         }
       }
     }
   }
   ```

### To Fully Migrate:

1. **Option A: Use Both Sources** (Current Setup)
   - Keep markdown files for existing content
   - Use Contentful for artists
   - Gradually migrate other content

2. **Option B: Full Contentful Migration**
   - Remove markdown artist files from `/content/artists/`
   - Update all templates to use Contentful
   - Remove markdown dependencies

## 🔍 Querying Your Content

### Get All Artists
```graphql
query {
  allContentfulArtist(sort: { fields: [dateCreated], order: DESC }) {
    edges {
      node {
        title
        slug
        featuredImage {
          gatsbyImageData
        }
      }
    }
  }
}
```

### Get Single Artist
```graphql
query($slug: String!) {
  contentfulArtist(slug: { eq: $slug }) {
    title
    bio {
      raw
    }
    socialLinks {
      internal {
        content
      }
    }
  }
}
```

### Get Productions Page
```graphql
query {
  contentfulProductions {
    title
    section1 {
      raw
    }
    section2 {
      raw
    }
    gallery {
      gatsbyImageData
    }
  }
}
```

## 📝 Notes

- Rich text fields need to be parsed with `@contentful/rich-text-react-renderer`
- Social links are stored as JSON and need to be parsed with `JSON.parse()`
- Images use `gatsby-plugin-image` for optimization
- The setup preserves your URL structure for SEO continuity
