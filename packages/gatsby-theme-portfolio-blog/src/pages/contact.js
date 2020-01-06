/** @jsx jsx */

import { jsx, useThemeUI } from 'theme-ui'
import { Heading } from '@theme-ui/components'
import Layout from '../gatsby-theme-ui-blog/layout'

export default () => {
  const context = useThemeUI()
  const { theme } = context
  return (
    <Layout>
      <Heading>
        Contact
      <pre>{JSON.stringify(theme, null, 2)}</pre>
      </Heading>
    </Layout>
  )
}