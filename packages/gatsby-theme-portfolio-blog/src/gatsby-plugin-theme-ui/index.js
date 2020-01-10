import { base as baseTheme } from '@theme-ui/presets'
import prismTheme from '../../prism-theme.json'
import merge from 'lodash.merge'

const theme = merge({}, baseTheme, {
  useColorSchemeMediaQuery: true,
  space: [
    '0',
    '0.25rem',
    '0.5rem',
    '0.75rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2rem',
    '2.5rem',
    '4rem',
    '8rem',
    '16rem'
  ],
  lineHeights: {
    body: 1.6,
    heading: 1.125
  },
  fonts: {
    heading: 'Metropolis, system-ui, sans-serif',
    body: 'Inter, system-ui, sans-serif',
    // While I'm not bundling Cascadia Code or Fira Code, they're popular 
    // enough that many who prefer it will have it installed already.
    monospace: 'Cascadia Code, Fira Code, Consolas, Menlo, monospace'
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      letterSpacing: 'body',
      transition: 'transitions.colormode'
    }
  },
  colors: {
    primary: '#8f4efc',
    background: ' #fefefe',
    secondary: '#1EFFFF',
    black: '#18013D',
    muted: '#857d7d',
    modes: {
      dark: {
        primary: '#1EFFFF',
        secondary: '#6004F9',
        background: '#18013D',
        text: '#fff',
        muted: '#cac4ce',
      }
    }
  },
  styles: {
    code: {
      ...prismTheme,
      fontFamily: 'monospace',
      padding: '1.5rem',
      boxShadow: 'rgba(39,44,49,0.06) 8px 14px 38px,rgba(39,44,49,0.03) 1px 3px 8px',
      borderRadius: '8px'
    },
    pre: {
      padding: '1.5rem',
      boxShadow: 'rgba(39,44,49,0.06) 8px 14px 38px,rgba(39,44,49,0.03) 1px 3px 8px'
    },
    a: {
      fontFamily: 'body',
      color: 'primary',
      fontWeight: 'body',
      lineHeight: 'body',
      transition: 'color 0.2s ease-in-out'
    },
    p: {
      transition: 'color 0.2s ease-in-out'
    }
  },
  cards: {
    primary: {
      minHeight: '200px',
      margin: '0.75rem 1.5rem 0.75rem 1.5rem',
      padding: '1.5rem 1.5rem',
      boxShadow: 'rgba(39,44,49,0.06) 8px 14px 38px,rgba(39,44,49,0.03) 1px 3px 8px',
      // text: {

      // }
    }
  },
  links: {
    nav: {
      fontFamily: 'body',
      color: 'inherit',
      position: 'relative',
      ':hover,:active': {
        color: 'primary',
      },
      ':before': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '3px',
        bottom: -2,
        left: 0,
        backgroundColor: 'primary',
        visibility: 'hidden',
        transform: 'scaleX(0)',
        transition: 'all 0.1s ease-in-out 0s'
      },
      ':hover::before': {
        visibility: 'visible',
        transform: 'scaleX(1)'
      }
    },
    logo: {
      fontFamily: 'body',
      color: 'inherit',
      position: 'relative',
      ':hover,:active': {
        color: 'primary',
      }
    },
    heading: {
      marginRight: '1rem'
    }
  },
  layout: {
    container: {
      maxWidth: '900px',
      backgroudColor: 'muted'
    }
  },
  transitions: {
    headroom: 'background-color 0.25s ease-in-out',
    colormode: 'background-color 0.2s ease-in-out, fill 0.2s ease-in-out, color 0.2s ease-in-out'
  },
  shadows: {
    card: 'rgba(39,44,49,0.06) 8px 14px 38px,rgba(39,44,49,0.03) 1px 3px 8px',
  }
})

export default theme