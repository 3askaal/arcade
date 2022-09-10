import { s, rgba } from '3oilerplate'
import chroma from 'chroma-js'
import styleToCss from 'style-object-to-css-string';
import styled, { css, keyframes } from 'styled-components'
import { Themes } from '../..'

const blockColors = (color: string | false, noBlock?: boolean) => ({
  borderTopColor: color ? chroma(color).brighten(!noBlock ? 1.25 : 0).hex() : 'transparent',
  borderRightColor: color ? chroma(color).brighten(!noBlock ? 1 : 0).hex() : 'transparent',
  backgroundColor: color ?  chroma(color).hex() : 'transparent',
  borderLeftColor: color ? chroma(color).darken(!noBlock ? 1 : 0).hex() : 'transparent',
  borderBottomColor: color ? chroma(color).darken(!noBlock ? 1.25 : 0).hex() : 'transparent',
})

export const SMapBlock = s.div(({ theme, hide, flag }: any) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  borderStyle: 'solid',
  borderWidth: '.25rem',
  cursor: 'pointer',
  ...blockColors('#656565'),

  ...(flag && {
    ...blockColors('#C9485B')
  }),

  ...(hide && {
    opacity: 0,
    pointerEvents: 'none',
  })
}))

const threadColors = [
  '#07689F',
  '#019267',
  '#E84545',
  '#27496D',
  '#630606',
  '#069A8E',
  '#383838',
  '#6D8299'
]

export const SMapMineThread = s.div(({ amount }: any) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: threadColors[amount - 1],
  fontWeight: 'bold',
  fontSize: '.8em'
}))

export const SMapMine = s.div(() => ({
  position: 'relative',
  borderRadius: '100%',
  width: '60%',
  height: '60%',
  backgroundColor: '#222',
}))

const flash = (block?: boolean) => keyframes`
  0% { ${ styleToCss(blockColors('#7900FF', !block)) } }
  35% { ${ styleToCss(blockColors(false, !block)) } }
  65% { ${ styleToCss(blockColors(false, !block)) } }
  100% { ${ styleToCss(blockColors('#7900FF', !block)) } }
`

export const SMapSelector = styled.div<any>(
  () => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderStyle: 'solid',
    borderWidth: '.25rem',
    zIndex: '10000'
  }),
  ({ block }: any) => css`
    animation: ${flash(block)} 2000ms ease both infinite
  `
)
