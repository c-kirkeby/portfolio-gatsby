/** @jsx jsx */

import { jsx } from 'theme-ui'
import { Flex } from '@theme-ui/components'
import { Global } from '@emotion/core'
import Nav from '../components/Nav'
import Main from '../components/Main'

export default ({ children, ...props }) =>
  <Flex
    sx={{
      flexDirection: 'column',
      minHeight: '100vh'
    }}
    {...props}
  >
    <Global
      styles={_theme => ({
        html: {
          overflowY: 'scroll'
        },
        body: {
          margin: '0'
        }
      })}
    />
    <Nav />
    <Main
      sx={{
        display: 'flex',
        flex: '1 1 0%',
        flexDirection: 'column'
      }}
    >
      {children}
    </Main>
  </Flex>


