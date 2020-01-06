/** @jsx jsx */

import { jsx } from 'theme-ui'
import { darken } from '@theme-ui/color'

export default props => {
  return (
    <svg width={35} height={35} viewBox="0 0 256 256"
      {...props}>

      <circle cx={125} cy={125} r={125}
        sx={{
          fill: 'logoColor',
          ':hover': {
            fill: darken('logoColor', .25)
          }
        }}
      />
      <g>
        <rect
          transform="skewX(-15)"
          width={55.5}
          height={100}
          x={100}
          y={75}
          sx={{
            fill: 'background'
          }}
        />
        <rect
          transform="skewX(-15)"
          width={55.5}
          height={45}
          x={165.5}
          y={75}
          sx={{
            fill: 'background'
          }}
        />
        <rect
          transform="skewX(-15)"
          width={55.5}
          height={45}
          x={165.5}
          y={130}
          sx={{
            fill: 'background'
          }}
        />
      </g>
    </svg>
  )
}