import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import './ArtistPost.css'
import { SocialIcon } from 'react-social-icons'

const ContentfulArtist = ({ data }) => {
  const artist = data?.contentfulArtist
  
  // Handle case where artist data doesn't exist
  if (!artist) {
    return (
      <Layout>
        <div className="container">
          <h1>Artist Not Found</h1>
        </div>
      </Layout>
    )
  }
  
  // Safely parse social links from the JSON object
  let socialLinks = {};
  try {
    if (artist.socialLinks?.internal?.content) {
      socialLinks = JSON.parse(artist.socialLinks.internal.content);
    }
  } catch (e) {
    console.error('Error parsing social links:', e);
  }

  // Parse bio content
  let bioText = '';
  try {
    if (artist.bio?.raw) {
      const bioContent = JSON.parse(artist.bio.raw);
      // Extract text from rich text format
      const extractText = (nodes) => {
        if (!nodes || !Array.isArray(nodes)) return '';
        return nodes.map(node => {
          if (!node) return '';
          if (node.nodeType === 'text') return node.value || '';
          if (node.content) return extractText(node.content);
          return '';
        }).join('\n\n');
      };
      bioText = extractText(bioContent.content);
    }
  } catch (e) {
    console.error('Error parsing bio:', e);
  }

  const imageUrl = artist.featuredImage?.file?.url 
    ? `https:${artist.featuredImage.file.url}` 
    : '/images/default-artist.jpg';

  return (
    <Layout>
      <div>
        {/* Book Now button - if Gigwell IDs exist */}
        {artist.gigwellArtistId && artist.gigwellAgencyId && (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <button 
              className="booking"
              style={{
                backgroundColor: '#00b0ff',
                color: '#fff',
                padding: '0 20px',
                lineHeight: '36px',
                minHeight: '36px',
                textTransform: 'uppercase',
                fontSize: '14px',
                border: '0',
                borderRadius: '3px',
                cursor: 'pointer'
              }}
            >
              Book Now
            </button>
          </div>
        )}

        {/* Presskit and Book Artist buttons */}
        <div style={{ textAlign: 'center' }}>
          {socialLinks.pressKit && (
            <a 
              href={socialLinks.pressKit}
              target="_blank"
              rel="noopener noreferrer"
              className="example_d" 
              style={{ margin: '30px', textAlign: 'center', textDecoration: 'none' }}
            >
              <span className="artistBTN">Presskit</span>
            </a>
          )}
          <a 
            href="/contact" 
            className="example_d" 
            style={{ margin: '30px', textAlign: 'center', textDecoration: 'none' }}
          >
            <span className="artistBTN">Book Artist</span>
          </a>
        </div>

        <main>
          <article itemScope itemType="http://schema.org/BlogPosting">
            {/* Hero Image Section */}
            <div className="card rainbow">
              <div className="htoone" id="demo">
                <div className="img2 shadow item">
                  <div 
                    className="anim active" 
                    style={{ 
                      backgroundColor: 'rgb(248, 236, 33)', 
                      left: '77%', 
                      height: '53%' 
                    }}
                  ></div>
                  <img 
                    className="thisone" 
                    src={imageUrl} 
                    alt={artist.title}
                  />
                </div>
              </div>
            </div>

            <span></span>
            <h1 itemProp="title" className="artistTitle">{artist.title}</h1>

            {/* Bio Section */}
            <div className="text-holder right">
              <div className="pg1-2-txt">
                <p>
                  <span className="Content">
                    {bioText.split('\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </span>
                </p>
              </div>
            </div>

            {/* Video and Audio Embeds */}
            <div className="marginbox">
              {/* YouTube Video */}
              {socialLinks.youtubeWidget && (
                <iframe 
                  title="video widget" 
                  className="vid" 
                  src={socialLinks.youtubeWidget}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}

              {/* SoundCloud Embed */}
              {socialLinks.soundcloudWidget && (
                <iframe 
                  src={socialLinks.soundcloudWidget}
                  title="sc widget" 
                  className="sc" 
                  frameBorder="0" 
                  allowTransparency="true" 
                  allow="encrypted-media" 
                  style={{ backgroundColor: 'black' }}
                ></iframe>
              )}
            </div>
          </article>
        </main>

        {/* Upcoming Shows Section */}
        <div className="marginbox">
          <div>
            <div className="scroll">
              <h2 className="shows">Upcoming Shows</h2>
              <div>
                {/* Gigwell integration would go here */}
                {artist.gigwellArtistId && artist.gigwellAgencyId && (
                  <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
                    <p>Shows calendar coming soon</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="smlist" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', alignItems: 'center' }}>
            {socialLinks.soundcloud && (
              <SocialIcon 
                url={socialLinks.soundcloud} 
                style={{ height: 25, width: 25, margin: '0 10px' }}
              />
            )}
            {socialLinks.spotify && (
              <SocialIcon 
                url={socialLinks.spotify} 
                style={{ height: 25, width: 25, margin: '0 10px' }}
              />
            )}
            {socialLinks.facebook && (
              <SocialIcon 
                url={socialLinks.facebook} 
                style={{ height: 25, width: 25, margin: '0 10px' }}
              />
            )}
            {socialLinks.instagram && (
              <SocialIcon 
                url={socialLinks.instagram} 
                style={{ height: 25, width: 25, margin: '0 10px' }}
              />
            )}
            {socialLinks.twitter && (
              <SocialIcon 
                url={socialLinks.twitter} 
                style={{ height: 25, width: 25, margin: '0 10px' }}
              />
            )}
          </ul>
        </div>

        {/* Spotify Embed */}
        {socialLinks.spotifyWidget && (
          <div style={{ textAlign: 'center', width: '100%' }}>
            <iframe 
              className="spotifyc" 
              title="spotify widget" 
              width="80%" 
              height="300px" 
              scrolling="no" 
              frameBorder="no" 
              allow="autoplay" 
              src={socialLinks.spotifyWidget}
            ></iframe>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default ContentfulArtist

export const pageQuery = graphql`
  query ContentfulArtistBySlug($slug: String!) {
    contentfulArtist(slug: { eq: $slug }) {
      title
      slug
      bio {
        raw
      }
      featuredImage {
        file {
          url
        }
      }
      socialLinks {
        internal {
          content
        }
      }
      dateCreated
      gigwellAgencyId
      gigwellArtistId
    }
  }
`