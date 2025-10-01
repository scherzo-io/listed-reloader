import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'
import Layout from '../components/Layout'
import './HomePage.css'
// Export Template for use in CMS preview
export const HomePageTemplate = ({
  listedmix,
  listedmixlk,
  artists = []
}) => (
  <Location>
    {() => {
      return (
        <main className="Blog">
          <section className="section hide">
            <div className="container"></div>
          </section>
          <div>
            <div>
              <div className="home-artists-links" style={{}}>
                <h1>Artists</h1>
                
                <div style={{ textAlign: 'center' }}>
                  <p>
                    {artists.map(artist => (
                      <a style={{ marginRight: '1em' }} key={artist.slug} href={artist.slug}>
                        {artist.title.trim()}
                      </a>
                    ))}
                  </p>
                </div>
                <div className="dropdown">
                  <button
                    className="dropdown-button"
                    style={{ visibility: 'hidden' }}
                  >
                    Artists
                  </button>
                  <div className="dropdown-list"></div>
                </div>
              </div>
              
              <h1> {listedmix}</h1>
              <iframe
                title="listed-playlist"
                width="100%"
                height="300"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={listedmixlk}
              ></iframe>
              
              <div
                className="ctct-inline-form"
                data-form-id="77fa4a78-f78b-4c9b-9057-b015694f8ed3"
              ></div>
            </div>
          </div>
        </main>
      )
    }}
  </Location>
)

function SlideContent({ url }) {
  const [type, setType] = useState('')
  useEffect(() => {
    getType(url)
  }, [])
  async function getType(url) {
    const res = await fetch(url)
    setType(res.headers.get('Content-Type'))
  }
  return (
    <>
      {type && type.includes('image') && <img src={url} />}
      {type && type.includes('video') && <video controls src={url}></video>}
    </>
  )
}

// Export Default BlogIndex for front-end
const HomePage = ({ data: { page, artists, bannerImage, contentfulArtists } }) => {
  // Get the first banner image from Contentful if it exists
  const contentfulBanner = bannerImage?.edges?.[0]?.node?.bannerImage?.url;
  
  // Use Contentful artists if available, otherwise fall back to markdown
  const artistsList = contentfulArtists?.edges?.length > 0 
    ? contentfulArtists.edges.map(artist => ({
        title: artist.node.title,
        slug: `/artists/${artist.node.slug}`
      }))
    : artists.edges.map(artist => ({
        title: artist.node.frontmatter.title,
        slug: artist.node.fields.slug
      }));
  return (
    <Layout
      meta={page.frontmatter.meta || false}
      title={page.frontmatter.title || false}
    >
      <div className="fixcenter">
        {/* Display single banner image from Contentful */}
        {contentfulBanner ? (
          <div className="banner-image">
            <SlideContent url={contentfulBanner} />
          </div>
        ) : (
          // Fallback to first featured image from markdown if no Contentful banner
          page.frontmatter.featuredImage && (
            <div className="banner-image">
              <SlideContent url={page.frontmatter.featuredImage} />
            </div>
          )
        )}
      </div>

      <HomePageTemplate
        {...page}
        {...page.fields}
        {...page.frontmatter}
        artists={artistsList}
      />
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      fields {
        contentType
      }
      frontmatter {
        title
        listedmix
        listedmixlk
        date
        template
        subtitle
        featuredImage
        featuredImage2
        featuredImage3
        featuredImage4
        featuredImage5
        featuredImage6
      }
    }

    # Query for Contentful banner image
    bannerImage: allContentfulHomeBanner(limit: 1) {
      edges {
        node {
          bannerImage {
            url
            title
          }
        }
      }
    }

    posts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            url
            date
            featuredImage
          }
        }
      }
    }

    artists: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "artists" } } }
      sort: { order: ASC, fields: [frontmatter___title] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }

    # Query for Contentful artists
    contentfulArtists: allContentfulArtist(
      sort: { fields: [title], order: ASC }
    ) {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`
