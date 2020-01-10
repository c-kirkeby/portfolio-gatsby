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
            sx={{
              fontSize: 4,
              mr: 3,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              variant: 'styles.links.logo'
            }}
          >
            <Logo
            // sx={{
            //   ':hover': {
            //     color: 'secondary'
            //   }
            // }}
            />
            {/* <span>Christian Kirkeby</span> */}
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
              }}>
              Blog
          </NavLink>
            <NavLink to='/portfolio'
              as={Link}
              sx={{
                mr: 3,
              }}
            >
              Portfolio
          </NavLink>
            <NavLink to='/contact'
              as={Link}
              sx={{
                mr: 3,
              }}
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


