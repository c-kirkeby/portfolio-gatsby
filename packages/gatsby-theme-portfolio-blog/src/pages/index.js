/** @jsx jsx */

import { jsx, useColorMode, useThemeUI } from 'theme-ui'
import { Heading, Flex, Text, Card } from '@theme-ui/components'
import { Link, graphql } from 'gatsby'
import Layout from '../gatsby-theme-ui-blog/layout'
import SEO from '../gatsby-theme-ui-blog/seo'

export default ({ data }) => {
  /**
   * @todo remove !important tag from the link in the card. It's not clear how
   *       to get theme-ui to add higher specificity at this time. Essentially,
   *       since we're making the card background white we want the link to
   *       have a higher contrast, but links in dark mode need to have contrast
   *       with the background.
   */
  const [mode, _setMode] = useColorMode()
  const { theme } = useThemeUI()
  const linkColor = mode === 'light' ? theme.colors.primary : theme.colors.modes.dark.secondary
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
              color: `${linkColor} !important`
            }}
          >Read more</Link>
        </Card>
      </Flex>
    </Layout >
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
