/** @jsx jsx */
import { jsx } from 'theme-ui'
import { NavLink, Flex } from '@theme-ui/components'
import { Link } from 'gatsby'
import Headroom from 'react-headroom'
import Logo from './Logo'
import ColourToggle from './ColourToggle'

export default () =>
  <Headroom
    calcHeightOnResize
  >
    <header
      sx={{
        variant: 'styles.header',
      }}>
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.75rem 1.5rem',
          maxWidth: 900,
          height: '70px',
          margin: '0 auto'
        }}
      >
        <NavLink to='/'
          as={Link}
          sx={{
            fontSize: 4,
            mr: 3,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Logo
            sx={{
              ':hover': {
                color: 'secondary'
              }
            }}
          />
          {/* <span>Christian Kirkeby</span> */}
        </NavLink>
        <div sx={{ mx: 'auto' }} />
        <Flex
          sx={{
            alignItems: 'center'
          }}
        >
          <NavLink to='/blog'
            as={Link}
            sx={{
              mr: 3,
              variant: 'styles.navlink'
            }}>
            Blog
          </NavLink>
          <NavLink to='/contact'
            as={Link}
            sx={{
              mr: 3,
              variant: 'styles.links.nav'
            }}
          >
            Contact
          </NavLink>
          <ColourToggle />
        </Flex>
      </div>
    </header >
  </Headroom>

