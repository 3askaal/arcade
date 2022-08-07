import { s } from '3oilerplate'
import chroma from 'chroma-js'

export const SMapBlock = s.div(({ theme, color = '#fff', dead, shape, blockSizeX, blockSizeY, block }: any) => ({
  position: 'absolute',
  top: `${(shape?.y * blockSizeY || 0) + block.y * blockSizeY}%`,
  left: `${(shape?.x * blockSizeX || 0) + block.x * blockSizeX}%`,
  width: `${blockSizeX}%`,
  height: `${blockSizeY}%`,
  border: '.2rem solid',
  // Light
  borderRightColor: chroma(color).brighten(1).hex(),
  borderTopColor: chroma(color).brighten(1).hex(),
  // Middle
  backgroundColor: chroma(color).hex(),
  // Dark
  borderLeftColor: chroma(color).darken(1).hex(),
  borderBottomColor: chroma(color).darken(1).hex(),

  ...(dead && {
    // Light
    borderRightColor: chroma('#fff').darken(1.5).hex(),
    borderTopColor: chroma('#fff').darken(1.5).hex(),
    // Middle
    backgroundColor: chroma('#fff').darken(2.5).hex(),
    // Dark
    borderLeftColor: chroma('#fff').darken(3.5).hex(),
    borderBottomColor: chroma('#fff').darken(3.5).hex(),
  })
}))
