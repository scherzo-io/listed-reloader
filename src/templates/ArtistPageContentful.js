import React from 'react'
import { graphql } from 'gatsby'
import ContentfulArtistSection from '../components/ContentfulArtistSection'
import Layout from '../components/Layout'

const ArtistPageContentful = ({ data: { page } }) => (
  <Layout
    meta={page?.frontmatter?.meta || false}
    title="Artists"
  >
    <div>
      <div>
        <h1>Artists</h1>
      </div>
    </div>
    <main className="Blog">
      <section className="section">
        <div className="container">
          <ContentfulArtistSection />
        </div>
      </section>
    </main>
  </Layout>
)

export default ArtistPageContentful

export const pageQuery = graphql`
  query ArtistPageContentful($id: String!) {
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
