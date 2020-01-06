/** @jsx jsx */

import { jsx } from 'theme-ui'
import { Container } from '@theme-ui/components'

export default ({ children, ...props }) =>
  <Container as="main" {...props}>
    {children}
  </Container>
