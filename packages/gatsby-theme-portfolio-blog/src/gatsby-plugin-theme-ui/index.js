import { base as baseTheme } from '@theme-ui/presets'
import prismTheme from '../../prism-theme.json'
import merge from 'lodash.merge'

const theme = merge({}, baseTheme, {
  useColorSchemeMediaQuery: true,
  fonts: {
    heading: 'Metropolis, system-ui, sans-serif',
    body: 'Inter, system-ui, sans-serif'
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      letterSpacing: '0.1rem'
    }
  },
  colors: {
    primary: '#8f4efc',
    background: ' #fefefe',
    logoColor: '#8f4efc',
    secondary: '#6004F9',
    black: '#18013D',
    muted: '#857d7d',
    modes: {
      dark: {
        primary: '#8f4efc',
        secondary: '#6004F9',
        background: '#18013D',
        text: '#fff',
        muted: '#cac4ce',
        logoColor: '#fff',
      }
    }
  },
  styles: {
    code: {
      ...prismTheme,
      padding: '1.5rem',
      borderRadius: '8px'
    },
    pre: {
      padding: '1.5rem'
    },
    a: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    }
  },
  cards: {
    primary: {
      minHeight: '200px',
      mt: '0',
      mr: '1.5rem',
      mb: '0.75rem',
      // backgroundColor: 'white',
      padding: '25px 25px 0',
      boxShadow: `rgba(39,44,49,0.06) 8px 14px 38px,rgba(39,44,49,0.03) 1px 3px 8px`,
      text: {

      }
    }
  },
  links: {
    nav: {
      fontFamily: 'body',
      color: 'inherit',
      ':hover,:active': {
        color: 'secondary',
        textDecoration: 'underline'
      }
    }
  },
  layout: {
    container: {
      maxWidth: '900px',
      backgroudColor: 'muted'
    }
  }
})

export default theme