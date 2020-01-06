/** @jsx jsx */

import { jsx } from 'theme-ui'
import { Card, Text, Heading, Link, Flex } from '@theme-ui/components'
import Layout from './layout'

export default ({ posts }) =>
  <Layout>
    <section>
      <Heading>Posts</Heading>
      <Flex>
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
              // sx={{
              //   ':hover': {
              //     transform: 'translate(0px, -5px)',
              //     transition: 
              //   }
              // }}
              variant="cards.primary"
            >
              <Heading
              >{post.title}</Heading>
              <Text
                sx={{
                  variant: 'styles.p'
                }}
              >
                {post.excerpt}
              </Text>
            </ Card>
          </ Link>
        ))}
      </Flex>
    </section >
  </Layout>

