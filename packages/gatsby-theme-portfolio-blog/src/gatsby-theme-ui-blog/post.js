/** @jsx jsx */

import { jsx } from 'theme-ui'
import { Container, Heading, Text } from '@theme-ui/components'
import Layout from './layout'

export default ({ title, date, children, ...props }) =>
  <Layout>
    <Container
      sx={{
        padding: '3rem 0'
      }}
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
    </Container>
  </Layout>
