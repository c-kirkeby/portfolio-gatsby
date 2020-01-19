/** @jsx jsx */

import { jsx, Styled } from 'theme-ui'
// React is imported here to use the shorthand React.Fragment, but the compiler
// is not recognising that it's being used.
import React from 'react' // eslint-disable-line no-unused-vars
import { Global } from '@emotion/core'
import Nav from '../components/Nav'
import Main from '../components/Main'
import Footer from '../components/footer'

export default ({ children, ...props }) =>
  <>
    <Styled.root
      sx={{
        flexDirection: 'column',
        minHeight: '100vh',
        display: 'flex'
      }}
    >
      <Global
        styles={theme => ({
          ':root': {
          },
          // https://css-tricks.com/revisiting-prefers-reduced-motion-the-reduced-motion-media-query/
          // Turning off animations for people with disabilities, or thoe 
          // who simply prefer to have animations disabled.
          '@media screen and (prefers-reduced-motion: reduce)': {
            '*': {
              animationDuration: '0.001ms !important',
              animationIterationCount: '1 !important',
              transitionDuration: '0.001ms !important'
            }
          },
          html: {
            overflowY: 'scroll',
            fontSize: '16px',
            letterSpacing: '-0.011em'
          },
          body: {
            margin: 0,
            transition: theme.transitions.colormode
          },
          '.headroom--pinned': {
            boxShadow: 'rgba(39,44,49,0.06) 8px 14px 38px,rgba(39,44,49,0.03) 1px 3px 8px',
            header: {
              div: {
                height: '40px',
                transition: 'height 0.2s ease-in-out, box-shadow 0.2s ease-in-out'
              }
            }
          },
          '.headroom--unfixed': {
            boxShadow: 'none',
            header: {
              div: {
                height: '70px',
                transition: 'height 0.1s ease-in-out, box-shadow 0.1s ease-in-out'
              }
            }
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
      <Footer />
    </Styled.root>
  </>


