# Contentful Integration Setup

## ✅ What's Been Done

1. **Installed Packages:**
   - `gatsby-source-contentful` - Gatsby plugin to pull data from Contentful
   - `dotenv` - For managing environment variables

2. **Created Configuration Files:**
   - Updated `gatsby-config.js` with Contentful source plugin
   - Created mapping guide (`contentful-mapping-guide.md`)
   - Created example templates for Contentful data

3. **Example Files Created:**
   - `src/templates/ContentfulArtistExample.js` - Template for individual artist pages
   - `src/components/ContentfulArtistList.js` - Component to list all artists
   - `gatsby-node-contentful.js` - Example of how to create pages from Contentful

## 🔧 Setup Steps

### 1. Create Environment File
Create `.env.development` in your project root:
```bash
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_delivery_api_token_here
CONTENTFUL_HOST=cdn.contentful.com
```

### 2. Set Up Content Models in Contentful

Log into your Contentful space and create these content types:

#### Artist Content Type
- **Name:** Artist
- **API Identifier:** artist
- **Fields:** (See detailed mapping in `contentful-mapping-guide.md`)

#### Blog Post Content Type
- **Name:** Blog Post
- **API Identifier:** blogPost
- **Fields:** title, slug, featuredImage, content, category, publishedDate, status

#### Page Content Type
- **Name:** Page
- **API Identifier:** page
- **Fields:** title, slug, featuredImage, section1, section2, gallery

### 3. Test the Connection
After setting up your environment variables, restart your development server:
```bash
npm run develop
```

Then visit GraphiQL at http://localhost:8000/___graphql and try this query:
```graphql
{
  allContentfulArtist {
    edges {
      node {
        name
        slug
      }
    }
  }
}
```

## 📊 Data Mapping

### Current Site Structure → Contentful Fields

| Current File Location | Contentful Content Type | URL Pattern |
|----------------------|------------------------|-------------|
| `/content/artists/*.md` | Artist | `/artists/[slug]` |
| `/content/posts/*.md` | BlogPost | `/posts/[slug]` |
| `/content/pages/*.md` | Page | `/[slug]` |

### Artist Fields Mapping

| Markdown Frontmatter | Contentful Field | Type | Example |
|---------------------|------------------|------|---------|
| title | name | Short Text | "Niki Sadeki" |
| gigwellID | gigwellId | Short Text | "707426" |
| featuredImage | featuredImage | Media | Upload image |
| fblk | facebookUrl | Short Text | Facebook URL |
| instalk | instagramUrl | Short Text | Instagram URL |
| ralk | residentAdvisorUrl | Short Text | RA URL |
| spotifylk | spotifyUrl | Short Text | Spotify URL |
| sclk | soundcloudUrl | Short Text | SoundCloud URL |
| presskit | pressKit | Short Text | Dropbox link |
| scwidg | soundcloudWidget | Long Text | Embed URL |
| videowidg | youtubeWidget | Long Text | YouTube embed |
| spotifywidg | spotifyWidget | Long Text | Spotify embed |

## 🔄 Migration Strategy

### Phase 1: Parallel Setup (Recommended)
Keep both markdown files and Contentful running simultaneously:
1. Create content in Contentful
2. Update templates to check for both data sources
3. Gradually migrate content
4. Remove markdown files once everything works

### Phase 2: Full Migration
Replace all markdown content with Contentful:
1. Export all current content to CSV/JSON
2. Import into Contentful using their import tools
3. Update all templates to use Contentful queries
4. Remove markdown files and related plugins

## 📝 Example Queries

### Get All Artists
```graphql
query {
  allContentfulArtist(
    sort: { fields: [publishedDate], order: DESC }
    filter: { status: { eq: "Published" } }
  ) {
    edges {
      node {
        name
        slug
        biography {
          biography
        }
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
    name
    biography {
      biography
    }
    featuredImage {
      gatsbyImageData
    }
    facebookUrl
    instagramUrl
    soundcloudUrl
  }
}
```

## 🚀 Next Steps

1. **Create your content models** in Contentful matching the structure
2. **Add a few test entries** to verify the connection works
3. **Update your templates** to use Contentful data
4. **Migrate your content** from markdown files to Contentful
5. **Update navigation** components to pull from Contentful

## 📚 Resources

- [Gatsby Contentful Plugin Docs](https://www.gatsbyjs.com/plugins/gatsby-source-contentful/)
- [Contentful Content Modeling](https://www.contentful.com/help/content-modelling-basics/)
- [GraphQL Explorer](http://localhost:8000/___graphql) - Test your queries locally

## ⚠️ Important Notes

- The `status` field should be set to "Published" for content to appear
- Use the preview API token and set `host: 'preview.contentful.com'` to see draft content
- Rich Text fields require special rendering - see Contentful docs
- Images from Contentful work best with `gatsby-plugin-image`
