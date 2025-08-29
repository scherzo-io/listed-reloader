import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Nav from './Nav'
import Footer from './Footer'

// Global styles are imported in gatsby-browser.js to ensure consistent ordering

export default ({ children, meta, title }) => {
  return (
    <StaticQuery
      query={graphql`
        query IndexLayoutQuery {
          settingsYaml {
            siteTitle
            siteDescription
            googleTrackingId
            socialMediaCard {
              image
            }
          }
          contentfulArtists: allContentfulArtist(
            sort: { fields: [title], order: ASC }
          ) {
            edges {
              node {
                id
                title
                slug
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
          allPosts: allMarkdownRemark(
            filter: { fields: { contentType: { eq: "postCategories" } } }
            sort: { order: DESC, fields: [frontmatter___date] }
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
        }
      `}
      render={data => {
        // Use Contentful artists for the nav menu
        const artists = data.contentfulArtists || data.artists
        const { siteTitle, socialMediaCard, googleTrackingId } =
            data.settingsYaml || {},
          subNav = {
            posts: data.allPosts.hasOwnProperty('edges')
              ? data.allPosts.edges.map(post => {
                  return { ...post.node.fields, ...post.node.frontmatter }
                })
              : false
          }
        return (
          <Fragment>
            <Nav subNav={subNav} artists={artists} />

            <Fragment>{children}</Fragment>

            <Footer />
          </Fragment>
        )
      }}
    />
  )
}
