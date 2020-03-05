/** @jsx jsx */

import { jsx } from 'theme-ui'
import { Card, Text, Heading, Link, Flex } from '@theme-ui/components'
import Layout from './layout'
import SEO from './seo'

export default ({ posts }) =>
  <Layout>
    <SEO />
    <section>
      <Heading
        sx={{
          margin: '1.5rem 1.5rem'
        }}
      >Posts</Heading>
      <Flex
        sx={{
          flexDirection: ['column', 'column', 'row']
        }}
      >
        {posts.map(post => (
          <Link
            href={post.slug}
            sx={{
              flex: '1 1 300px',
              textDecoration: 'none',
              color: 'text'
            }}
            key={post.id}
          >
            <Card
              sx={{
                transform: 'perspective(500px) translate3d(0)',
                transition: 'transform 0.2s cubic-bezier(0.45, 0.25, 0.60, 0.95)',
                margin: '0.75rem',
                ':hover': {
                  transform: 'perspective(500px) translate3d(0, -5px, 5px)',
                  transition: 'transform 0.2s cubic-bezier(0.45, 0.25, 0.60, 0.95) reverse',
                }
              }}
              variant="cards.primary"
            >
              <Heading
                sx={{
                  variant: 'cards.primary.heading'
                }}
              >{post.title}</Heading>
              <Text
                sx={{
                  variant: 'cards.primary.p'
                }}
              >
                {post.excerpt}
              </Text>
            </Card>
          </Link>
        ))}
      </Flex>
    </section >
  </Layout>

