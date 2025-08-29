import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteUrl
          siteDescription
        }
      }
      settingsYaml {
        siteTitle
        siteDescription
        siteUrl
        googleTrackingId
        socialMediaCard {
          image
        }
      }
    }
  `)

  // Prefer settingsYaml over siteMetadata
  return {
    siteTitle: data.settingsYaml?.siteTitle || data.site?.siteMetadata?.siteTitle || 'Listed Productions',
    siteDescription: data.settingsYaml?.siteDescription || data.site?.siteMetadata?.siteDescription || 'Listed is a SF based initiative that showcases cutting-edge EDM',
    siteUrl: data.settingsYaml?.siteUrl || data.site?.siteMetadata?.siteUrl || '',
    googleTrackingId: data.settingsYaml?.googleTrackingId,
    socialMediaCard: data.settingsYaml?.socialMediaCard
  }
}
