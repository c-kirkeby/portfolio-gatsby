/** @jsx jsx */
import Prism from '@theme-ui/prism'
import { jsx, Styled } from 'theme-ui'

const heading = Tag => props => {
  if (!props.id) return <Tag {...props} />
  return (
    <Tag
      sx={{
        display: 'inline'
      }}
      {...props}
    >
      <Styled.a
        href={`#${props.id}`}
        sx={{
          marginRight: '0.5rem',
          textDecoration: 'none',
          ':hover': {
            textDecoration: 'underline'
          }
        }}
      >
        #
      </Styled.a>
      {props.children}
    </Tag>
  )
}

export default {
  pre: props => props.children,
  code: Prism,
  h1: heading('h1'),
  h2: heading('h2'),
  h3: heading('h3'),
  h4: heading('h4'),
  h5: heading('h5'),
  h6: heading('h6')
}
