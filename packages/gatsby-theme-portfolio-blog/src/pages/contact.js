/** @jsx jsx */

import { jsx, useThemeUI, Styled } from 'theme-ui'
import { Heading } from '@theme-ui/components'
import Layout from '../gatsby-theme-ui-blog/layout'
import SEO from '../gatsby-theme-ui-blog/seo'

export default () => {
  const context = useThemeUI()
  const { theme } = context
  return (
    <Layout>
      <SEO title="Contact" />
      <Heading>
        Contact
      </Heading>
      <Styled.pre>{JSON.stringify(theme, null, 2)}</Styled.pre>
    </Layout>
  )
}