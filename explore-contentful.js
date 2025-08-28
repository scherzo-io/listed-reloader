// Script to explore your Contentful space structure
const contentful = require('contentful');

const client = contentful.createClient({
  space: 'tnmpb33y98ua',
  accessToken: 'yy1MT34uffo8vn_6N7Q02BqkYZ-BltesXraG5IbuQUk'
});

async function exploreContentful() {
  try {
    console.log('Fetching Content Types from your Contentful space...\n');
    
    // Get all content types
    const contentTypes = await client.getContentTypes();
    
    console.log(`Found ${contentTypes.items.length} content types:\n`);
    
    for (const type of contentTypes.items) {
      console.log(`\n📦 Content Type: ${type.name} (ID: ${type.sys.id})`);
      console.log('   Fields:');
      
      for (const field of type.fields) {
        const required = field.required ? ' (required)' : '';
        console.log(`   - ${field.name} (${field.id}): ${field.type}${required}`);
        
        if (field.type === 'Link' && field.linkType) {
          console.log(`     -> Links to: ${field.linkType}`);
        }
        if (field.type === 'Array' && field.items) {
          console.log(`     -> Array of: ${field.items.type}`);
          if (field.items.linkType) {
            console.log(`     -> Links to: ${field.items.linkType}`);
          }
        }
      }
      
      // Get entry count for this content type
      const entries = await client.getEntries({
        content_type: type.sys.id,
        limit: 1
      });
      console.log(`   Total entries: ${entries.total}`);
    }
    
    // Also check for specific DJ/Artist entries
    console.log('\n\n🎵 Checking for DJ/Artist-like content...\n');
    
    // Try common content type IDs
    const possibleTypes = ['dj', 'artist', 'artists', 'djs', 'performer', 'talent'];
    
    for (const typeId of possibleTypes) {
      try {
        const entries = await client.getEntries({
          content_type: typeId,
          limit: 3
        });
        
        if (entries.items.length > 0) {
          console.log(`Found "${typeId}" content type with ${entries.total} entries`);
          console.log('Sample entries:');
          entries.items.forEach(entry => {
            console.log(`  - ${entry.fields.name || entry.fields.title || 'No name field'}`);
          });
        }
      } catch (e) {
        // Content type doesn't exist, continue
      }
    }
    
  } catch (error) {
    console.error('Error connecting to Contentful:', error.message);
  }
}

exploreContentful();
