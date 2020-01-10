import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            defaultTitle: title
            siteUrl
            titleTemplate
            defaultDescription: description
            logo
          }
        }
      }
    `
  )
  return site.siteMetadata
}
