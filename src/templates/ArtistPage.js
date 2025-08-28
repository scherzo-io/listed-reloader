import React from 'react'
import { graphql } from 'gatsby'
import ContentfulArtistSection from '../components/ContentfulArtistSection'
import Layout from '../components/Layout'

export const ArtistPageTemplate = () => (
  <main className="Blog">
    <div style={{ marginBottom: '6rem' }}>
      <div>
        <h1>Artists</h1>
      </div>
    </div>
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <ContentfulArtistSection />
      </div>
    </section>
  </main>
)

// Export Default ArtistPage for front-end
const ArtistPage = ({ data }) => (
  <Layout
    meta={data?.page?.frontmatter?.meta || false}
    title={data?.page?.frontmatter?.title || "Artists"}
  >
    <ArtistPageTemplate />
  </Layout>
)

export default ArtistPage

export const pageQuery = graphql`
  ## Query for ArtistPage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query ArtistPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      fields {
        contentType
      }
      frontmatter {
        url
        title
        template
      }
    }
  }
`
