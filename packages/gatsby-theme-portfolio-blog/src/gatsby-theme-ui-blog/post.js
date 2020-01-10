/** @jsx jsx */

import { jsx } from 'theme-ui'
import { Box, Heading, Text } from '@theme-ui/components'
import Layout from './layout'
import SEO from './seo'

export default ({ title, excerpt, date, children, ...props }) => {
  return (
    <Layout>
      <SEO
        title={title}
        description={excerpt}
        // date=
        {...props} />
      <Box
        sx={{
          padding: '1.25rem 1.25rem',
          margin: '0.75rem 1.25rem'
        }}
        as="article"
        {...props}
      >
        <Heading as="h1"
          variant="styles.h1"
        >
          {title}
        </Heading>
        <Text
          sx={{
            fontFamily: 'body',
            color: 'muted'
          }}
        >{date}</Text>
        <Text
          sx={{
            fontFamily: 'body'
          }}
        >
          {children}
        </Text>
      </Box>
    </Layout>

  )
}
