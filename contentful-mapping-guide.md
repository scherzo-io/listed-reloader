# Contentful to Listed Site Content Mapping Guide

## Content Models Required in Contentful

### 1. Artist Content Model

Create a content type called `Artist` with these fields:

| Contentful Field Name | Field Type | Maps To (Current Site) | Required | Notes |
|----------------------|------------|------------------------|----------|--------|
| name | Short Text | title | Yes | Artist name |
| slug | Short Text | URL slug | Yes | URL-friendly version (e.g., "niki-sadeki") |
| biography | Long Text | Body content | Yes | Artist bio/description |
| featuredImage | Media | featuredImage | Yes | Main artist photo |
| gigwellId | Short Text | gigwellID | No | Gigwell booking ID |
| facebookUrl | Short Text | fblk | No | Facebook profile URL |
| instagramUrl | Short Text | instalk | No | Instagram profile URL |
| residentAdvisorUrl | Short Text | ralk | No | Resident Advisor URL |
| spotifyUrl | Short Text | spotifylk | No | Spotify artist URL |
| soundcloudUrl | Short Text | sclk | No | SoundCloud profile URL |
| pressKit | Short Text | presskit | No | Dropbox/Drive link to press kit |
| soundcloudWidget | Long Text | scwidg | No | SoundCloud embed URL |
| youtubeWidget | Long Text | videowidg | No | YouTube embed URL |
| spotifyWidget | Long Text | spotifywidg | No | Spotify embed URL |
| publishedDate | Date & Time | date | Yes | Publication date |
| status | Short Text | status | Yes | "Published" or "Draft" |

### 2. Blog Post Content Model

Create a content type called `BlogPost` with these fields:

| Contentful Field Name | Field Type | Maps To | Required | Notes |
|----------------------|------------|---------|----------|--------|
| title | Short Text | title | Yes | Post title |
| slug | Short Text | URL slug | Yes | URL-friendly version |
| featuredImage | Media | featuredImage | No | Post hero image |
| content | Rich Text | Body content | Yes | Main post content |
| category | Reference | Category | No | Link to Category content type |
| publishedDate | Date & Time | date | Yes | Publication date |
| excerpt | Long Text | excerpt | No | Post summary |
| status | Short Text | status | Yes | "Published" or "Draft" |

### 3. Category Content Model

Create a content type called `Category` with these fields:

| Contentful Field Name | Field Type | Maps To | Required |
|----------------------|------------|---------|----------|
| title | Short Text | title | Yes |
| slug | Short Text | URL slug | Yes |
| subtitle | Short Text | subtitle | No |
| featuredImage | Media | featuredImage | No |

### 4. Page Content Model

Create a content type called `Page` for static pages:

| Contentful Field Name | Field Type | Maps To | Required | Notes |
|----------------------|------------|---------|----------|--------|
| title | Short Text | title | Yes | Page title |
| slug | Short Text | URL slug | Yes | URL (e.g., "productions", "contact") |
| featuredImage | Media | featuredImage | No | Page hero image |
| section1 | Rich Text | section1 | No | First content section |
| section2 | Rich Text | section2 | No | Second content section |
| gallery | Media (Multiple) | gallery | No | For productions page gallery |
| video | Short Text | video | No | Video URL |
| videoPoster | Media | videoPoster | No | Video thumbnail |
| videoTitle | Short Text | videoTitle | No | Video caption |

## Current Artists to Migrate (35 total)

Here's your complete artist list with their current slugs:

1. Niki Sadeki - `/artists/niki-sadeki`
2. Camea - `/artists/camea`
3. Formerly - `/artists/formerly`
4. Beauty & The Beast - `/artists/beauty-the-beast`
5. Saqib - `/artists/saqib`
6. Reza Safinia - `/artists/reza-safinia`
7. Matt Caines - `/artists/matt-caines`
8. N-UM - `/artists/n-um`
9. Sinca - `/artists/sinca`
10. Atnarko - `/artists/atnarko`
11. Anja Schneider - `/artists/anja-schneider`
12. Philipp Jung - `/artists/philipp-jung`
13. Ray Zuniga (Touch of Class Living) - `/artists/ray-zuniga-touch-of-class-living`
14. H Foundation - `/artists/h-foundation`
15. Bilaliwood - `/artists/bilaliwood`
16. Nitin - `/artists/nitin`
17. Galen - `/artists/galen`
18. Holmar - `/artists/holmar`
19. Nikita - `/artists/nikita`
20. Nico Stojan - `/artists/nico-stojan`
21. Naveen G - `/artists/naveen-g`
22. Mr. C - `/artists/mr-c`
23. MightyKat - `/artists/mightykat`
24. Maxi Storrs - `/artists/maxi-storrs`
25. Mark Slee - `/artists/mark-slee`
26. M.O.N.R.O.E - `/artists/m-o-n-r-o-e`
27. Lovestruckk - `/artists/lovestruckk`
28. KMLN - `/artists/kmln`
29. Justin Marchacos - `/artists/justin-marchacos`
30. Jay Tripwire - `/artists/jay-tripwire`
31. Halo Varga - `/artists/halo-varga`
32. Dory - `/artists/dory`
33. Ben Annand - `/artists/ben-annand`
34. Atish - `/artists/atish`
35. sadgasdgdasgsdg - `/artists/sadgasdgdasgsdg` (test entry?)

## Images to Migrate

All artist images are currently hosted on:
- Uploadcare (ucarecdn.com) - 57 images
- listedbookings.com - 2 images
- Local static files - 2 images

You can either:
1. Keep the existing URLs (quickest)
2. Upload to Contentful's Media library (recommended for long-term)

## Gatsby Configuration

Add this to your `gatsby-config.js`:

```javascript
{
  resolve: `gatsby-source-contentful`,
  options: {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    host: process.env.CONTENTFUL_HOST || 'cdn.contentful.com',
  },
}
```

## GraphQL Query Examples

After setting up, you'll query Contentful data like:

```graphql
# All Artists
query {
  allContentfulArtist(
    sort: {fields: [publishedDate], order: DESC}
    filter: {status: {eq: "Published"}}
  ) {
    edges {
      node {
        name
        slug
        biography {
          biography
        }
        featuredImage {
          gatsbyImageData(width: 800)
        }
        facebookUrl
        instagramUrl
        # ... other fields
      }
    }
  }
}
```

## Migration Steps

1. **Create Content Models** in Contentful matching the structure above
2. **Set Environment Variables** in `.env.development`:
   ```
   CONTENTFUL_SPACE_ID=your_space_id
   CONTENTFUL_ACCESS_TOKEN=your_access_token
   ```
3. **Update gatsby-config.js** with the Contentful plugin
4. **Create entries** in Contentful for each artist
5. **Update templates** to use Contentful data instead of markdown files

## Widget URLs Format

For embed widgets, use these formats:
- **SoundCloud**: `https://w.soundcloud.com/player/?url=TRACK_URL&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`
- **YouTube**: `https://www.youtube.com/embed/VIDEO_ID`
- **Spotify**: `https://open.spotify.com/embed/artist/ARTIST_ID?utm_source=generator`

## Notes

- The `status` field should be "Published" for live content
- Use slugs that match current URL structure to maintain SEO
- Consider using Contentful's preview API for draft content
- Rich Text fields in Contentful can include embedded assets and entries
