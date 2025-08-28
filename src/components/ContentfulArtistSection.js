import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Image from './Image'
import './ArtistSection.css'
import './ArtistCard.css'

const ContentfulArtistSection = () => {
  const data = useStaticQuery(graphql`
    query ContentfulArtistsListQuery {
      allContentfulArtist(sort: { fields: [dateCreated], order: DESC }) {
        edges {
          node {
            id
            title
            slug
            featuredImage {
              file {
                url
              }
              resize(width: 400, height: 400) {
                src
              }
            }
          }
        }
      }
    }
  `)

  const artists = data.allContentfulArtist.edges

  return (
    <div className="ArtistSection">
      <div className="ArtistSection--Grid">
        {artists.map(({ node }) => {
          // Use square resized image if available, fallback to original
          const imageUrl = node.featuredImage?.resize?.src 
            ? node.featuredImage.resize.src 
            : node.featuredImage?.file?.url 
              ? `https:${node.featuredImage.file.url}?w=400&h=400&fit=fill`
              : null
          
          return (
            <Link
              key={node.id}
              to={`/artists/${node.slug}`}
              className="ArtistCard"
            >
              {imageUrl && (
                <div className="ArtistCard--Image relative">
                  <div 
                    className="BackgroundImage absolute"
                    style={{ 
                      backgroundImage: `url(${imageUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                </div>
              )}
              <div className="ArtistCard--Content">
                <h3 className="ArtistCard--Title">{node.title}</h3>
                <div className="ArtistCard--Category"></div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default ContentfulArtistSection
