import React from 'react'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Seo = ({ 
  title, 
  description, 
  pathname, 
  image,
  noindex,
  canonicalLink,
  children 
}) => {
  const { 
    siteTitle, 
    siteUrl, 
    siteDescription, 
    socialMediaCard,
    googleTrackingId 
  } = useSiteMetadata()

  const seo = {
    title: title || siteTitle,
    description: description || siteDescription,
    image: image || (socialMediaCard && socialMediaCard.image),
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      
      {/* Open Graph */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={seo.image} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      
      {/* SEO Controls */}
      {noindex && <meta name="robots" content="noindex" />}
      {canonicalLink && <link rel="canonical" href={canonicalLink} />}
      
      {/* Preconnect */}
      <link href="https://ucarecdn.com" rel="preconnect" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://ucarecdn.com" />
      
      {/* Google Analytics */}
      {googleTrackingId && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleTrackingId}`}
          />
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleTrackingId}');
            `}
          </script>
        </>
      )}
      
      {children}
    </>
  )
}

export default Seo
