const path = require('path')

// Example: How to create pages from Contentful data
// Add this to your existing gatsby-node.js or replace the current createPages function

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query for all Contentful artists
  const artistResult = await graphql(`
    query {
      allContentfulArtist(filter: { status: { eq: "Published" } }) {
        edges {
          node {
            slug
            id
          }
        }
      }
    }
  `)

  if (artistResult.errors) {
    console.error(artistResult.errors)
    throw artistResult.errors
  }

  // Create pages for each artist
  const artists = artistResult.data.allContentfulArtist.edges
  const artistTemplate = path.resolve('./src/templates/ContentfulArtist.js')

  artists.forEach(({ node }) => {
    createPage({
      path: `/artists/${node.slug}`,
      component: artistTemplate,
      context: {
        slug: node.slug,
        id: node.id,
      },
    })
  })

  // Query for all Contentful blog posts
  const blogResult = await graphql(`
    query {
      allContentfulBlogPost(filter: { status: { eq: "Published" } }) {
        edges {
          node {
            slug
            id
          }
        }
      }
    }
  `)

  if (blogResult.errors) {
    console.error(blogResult.errors)
    throw blogResult.errors
  }

  // Create pages for each blog post
  const posts = blogResult.data.allContentfulBlogPost.edges
  const postTemplate = path.resolve('./src/templates/ContentfulBlogPost.js')

  posts.forEach(({ node }) => {
    createPage({
      path: `/posts/${node.slug}`,
      component: postTemplate,
      context: {
        slug: node.slug,
        id: node.id,
      },
    })
  })

  // Query for all Contentful pages
  const pageResult = await graphql(`
    query {
      allContentfulPage {
        edges {
          node {
            slug
            id
          }
        }
      }
    }
  `)

  if (pageResult.errors) {
    console.error(pageResult.errors)
    throw pageResult.errors
  }

  // Create static pages
  const pages = pageResult.data.allContentfulPage.edges
  const pageTemplate = path.resolve('./src/templates/ContentfulPage.js')

  pages.forEach(({ node }) => {
    createPage({
      path: node.slug === 'home' ? '/' : `/${node.slug}`,
      component: pageTemplate,
      context: {
        slug: node.slug,
        id: node.id,
      },
    })
  })
}

// You can keep your existing onCreateNode function or modify it
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  
  // Handle both markdown and Contentful nodes
  if (node.internal.type === 'MarkdownRemark') {
    // Your existing markdown handling code
  } else if (node.internal.type === 'ContentfulArtist') {
    // Create URL field for Contentful artists
    createNodeField({
      node,
      name: 'url',
      value: `/artists/${node.slug}`,
    })
  } else if (node.internal.type === 'ContentfulBlogPost') {
    // Create URL field for Contentful blog posts
    createNodeField({
      node,
      name: 'url',
      value: `/posts/${node.slug}`,
    })
  }
}
