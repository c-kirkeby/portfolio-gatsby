/** @jsx jsx */

import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { Heading, Flex, Text } from '@theme-ui/components'
import Layout from '../gatsby-theme-ui-blog/layout'

export default () =>
  <Layout>
    <Flex
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: '1 1 0%',
        flexDirection: 'column'
      }}
    >
      <Heading as="h1">Page not found (404)</Heading>
      <Text
        sx={{
          variant: 'styles.p'
        }}
      >I couldn't find the page you were looking for. If this is a mistake, you can <Link>contact me.</Link></Text>
    </Flex>
  </Layout>