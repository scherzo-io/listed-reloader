import React from 'react'
import Layout from '../components/Layout'
import ContentfulArtistSection from '../components/ContentfulArtistSection'

const TestContentful = () => (
  <Layout>
    <div style={{ padding: '2rem' }}>
      <h1>Contentful Artists Test</h1>
      <p>This page shows your 32 artists from Contentful:</p>
    </div>
    <ContentfulArtistSection />
  </Layout>
)

export default TestContentful
