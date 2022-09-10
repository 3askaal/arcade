import { s } from '3oilerplate'
import chroma from 'chroma-js'
import styled from 'styled-components'

export const SMap = s.div(({ theme }: any) => ({
  display: 'flex',
  position: 'relative',
  margin: 'auto',
  overflow: 'hidden',
  width: 'auto',
  flexWrap: 'wrap',
  backgroundColor: 'map',
  border: 'map'
}))

export const SMapShape: any = styled.div.attrs(({ shape, blockSize = 20 }: any) => ({
  style: {
    position: 'absolute',
    left: `${shape.x * blockSize}px`,
    top: `${shape.y * blockSize}px`,
    height: `${shape.height * blockSize}px`,
    width: `${shape.width * blockSize}px`,
  }
}))({})


export const SMapPos = s.div(({ pos, blockSizeX, blockSizeY }: any) => ({
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  width: `${blockSizeX}%`,
  height: `${blockSizeY}%`,
  top: `${pos.y * blockSizeY}%`,
  left: `${pos.x * blockSizeY}%`,
}))

export const SMapBlock = s.div(({ theme, hidden, flag }: any) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  borderStyle: 'solid',
  borderWidth: ['0.8vw', '0.8vw', '4px'],
  cursor: 'pointer',

  // Light
  borderTopColor: chroma('#AAAAAA').darken(0.25).hex(),
  borderRightColor: chroma('#AAAAAA').darken(0.5).hex(),
  // Middle
  backgroundColor: chroma('#AAAAAA').darken(1.5).hex(),
  // Dark
  borderLeftColor: chroma('#AAAAAA').darken(2.5).hex(),
  borderBottomColor: chroma('#AAAAAA').darken(2.75).hex(),

  ...(hidden && {
    opacity: 0,
    pointerEvents: 'none',
  }),

  ...(flag && {
    // Light
    borderTopColor: chroma('#C9485B').brighten(1).hex(),
    borderRightColor: chroma('#C9485B').brighten(1).hex(),
    // Middle
    backgroundColor: chroma('#C9485B').hex(),
    // Dark
    borderLeftColor: chroma('#C9485B').darken(1).hex(),
    borderBottomColor: chroma('#C9485B').darken(1).hex(),
  })
}))
