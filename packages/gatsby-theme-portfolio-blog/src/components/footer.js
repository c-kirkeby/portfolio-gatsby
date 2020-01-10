/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Box, Text } from '@theme-ui/components'

export default () => (
  <Box
    sx={{
      minHeight: "40px",
      display: 'flex',
      justifyContent: 'center'
    }}
  >
    <Text
      as="span"
      variant="styles.p"
    >Made using <Styled.a href="https://reactjs.org/">React</Styled.a> and <Styled.a href="https://www.gatsbyjs.org/">Gatsby</Styled.a>.</Text>
  </Box>
)