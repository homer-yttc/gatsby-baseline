import { graphql, useStaticQuery } from 'gatsby'
import { siteMetadata } from '../../../site-settings'

/**
 * Retrieve site metadata, else use the original site settings as a fallback.
 *
 * @returns {any}
 */
const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return data ? data.site.siteMetadata : siteMetadata
}

export default useSiteMetadata
