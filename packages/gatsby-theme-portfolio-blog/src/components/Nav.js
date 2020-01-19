/** @jsx jsx */
import { jsx } from 'theme-ui'
import { NavLink, Flex } from '@theme-ui/components'
import { Link } from 'gatsby'
import Headroom from 'react-headroom'
import Logo from './Logo'
import ColourToggle from './ColourToggle'

export default () => {

  return (
    <Headroom
      calcHeightOnResize
    // disableInlineStyles
    >
      <header
        sx={{
          variant: 'styles.header',
          backgroundColor: 'background',
          transition: theme => theme.transitions.colormode
        }}>
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.75rem 1.5rem',
            maxWidth: 900,
            margin: '0 auto'
          }}
        >
          <Link to='/'
            aria-label="Link to the Home Page"
            sx={{
              fontSize: 4,
              mr: 3,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              variant: 'styles.links.logo'
            }}
          >
            <Logo />
          </Link>
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
              }}
              name="Link to Blog Page"
            >
              Blog
          </NavLink>
            <NavLink to='/portfolio'
              as={Link}
              sx={{
                mr: 3,
              }}
              name="Link to Portfolio Page"
            >
              Portfolio
          </NavLink>
            <NavLink to='/contact'
              as={Link}
              sx={{
                mr: 3,
              }}
              name="Link to Contact Page"
            >
              Contact
          </NavLink>
            {}
            <ColourToggle />
          </Flex>
        </div>
      </header >
    </Headroom>
  )
}


