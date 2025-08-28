// Quick script to test what Contentful content we have
const fetch = require('node-fetch');

async function queryContentful() {
  const query = `{
    allContentfulArtist {
      nodes {
        id
      }
    }
    allContentfulEvent {
      nodes {
        id
      }
    }
    allContentfulDj {
      nodes {
        id
        name
      }
    }
    allContentfulNews {
      nodes {
        id
      }
    }
    __schema {
      types {
        name
      }
    }
  }`;

  try {
    const response = await fetch('http://localhost:8000/___graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    });
    
    const data = await response.json();
    
    // Filter for Contentful types
    const contentfulTypes = data.data.__schema.types
      .filter(type => type.name.includes('Contentful'))
      .map(type => type.name);
    
    console.log('Contentful Content Types Found:');
    console.log(contentfulTypes);
    
  } catch (error) {
    console.error('Error:', error);
  }
}

queryContentful();
