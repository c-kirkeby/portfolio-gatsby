/** @jsx jsx */

import { jsx, Styled } from 'theme-ui'
import { Heading, Flex, Text, Box } from '@theme-ui/components'
import Layout from '../gatsby-theme-ui-blog/layout'

export default () =>
  <Layout>
    <Flex
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: '1 1 0%',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          transform: 'rotate(6deg)',
          backgroundColor: 'primary',
          boxShadow: theme => theme.shadows.card,
          margin: '1.5rem 1.5rem'
        }}
      >
        <Box
          sx={{
            transform: 'rotate(-6deg)',
            backgroundColor: 'secondary',
            padding: '4rem',
            boxShadow: theme => theme.shadows.card
          }}
        >
          <Box
            sx={{
              transform: 'rotate(0deg)'
            }}
          >
            <Heading
              sx={{
                transform: 'skew(-8deg)'
              }}
              as="h1">Page not found (404)</Heading>
            <Text
              sx={{
                variant: 'styles.p'
              }}
            >I couldn't find the page you were looking for. If this is a mistake, you can <Styled.a href="/contact">contact me.</Styled.a>
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  </Layout>