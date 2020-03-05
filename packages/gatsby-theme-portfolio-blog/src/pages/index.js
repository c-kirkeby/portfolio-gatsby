/** @jsx jsx */

import { jsx } from 'theme-ui'
import { Heading, Flex, Text, Card } from '@theme-ui/components'
import { Link, graphql } from 'gatsby'
import Layout from '../gatsby-theme-ui-blog/layout'
import SEO from '../gatsby-theme-ui-blog/seo'

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Flex
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: '1 1 0%',
          flexDirection: ['column', 'column', 'row']
        }}
      >
        <div
          sx={{
            margin: '0.75rem 1.5rem 0.75rem 1.5rem',
            padding: '1.5rem 1.5rem',
          }}
        >
          <Heading as="h1">Hi I'm Christian.</Heading>
          <Text
            sx={{
              variant: 'styles.p'
            }}
          >A Brisbane-based Front-end web developer, QA Analyst and bread-baking hobbyist.</Text>
        </div>
        <Card
          sx={{
            variant: 'cards.primary'
          }}
        >
          <Heading
            sx={{
              variant: 'cards.primary.heading'
            }}
          >
            {data.allMdxBlogPost.nodes[0].title}
          </Heading>
          <Text
            sx={{
              variant: 'cards.primary.p'
            }}
          >
            {data.allMdxBlogPost.nodes[0].excerpt}
          </Text>
          <Link to={data.allMdxBlogPost.nodes[0].slug}
            sx={{
              variant: 'cards.primary.a'
            }}
          >Read more</Link>
        </Card>
      </Flex>
    </Layout>
  )
}

export const query = graphql`
  query LatestPostQuery {
    allMdxBlogPost(sort: {fields: date, order: DESC}, limit: 1) {
      nodes {
        title
        slug
        date
        excerpt
      }
    }
  }
`
