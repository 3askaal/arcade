import { s, rgba } from '3oilerplate'
import chroma from 'chroma-js'
import styleToCss from 'style-object-to-css-string';
import styled, { css, keyframes } from 'styled-components'

const blockColors = (color: string | false, noBlock?: boolean, alpha = 1) => ({
  borderTopColor: color && !noBlock ? chroma(color).brighten(1.25).alpha(alpha).hex() : 'rgba(0, 0, 0, 0)',
  borderRightColor: color && !noBlock ? chroma(color).brighten(1).alpha(alpha).hex() : 'rgba(0, 0, 0, 0)',
  backgroundColor: color ?  chroma(color).alpha(alpha).hex() : 'rgba(0, 0, 0, 0)',
  borderLeftColor: color && !noBlock ? chroma(color).darken(1).alpha(alpha).hex() : 'rgba(0, 0, 0, 0)',
  borderBottomColor: color && !noBlock ? chroma(color).darken(1.25).alpha(alpha).hex() : 'rgba(0, 0, 0, 0)',
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
  fontSize: '.9em'
}))

export const SMapMine = s.div(() => ({
  position: 'relative',
  borderRadius: '100%',
  width: '60%',
  height: '60%',
  backgroundColor: '#222',
}))

const flash = (block: boolean | undefined, color: string) => keyframes`
  0% { ${ styleToCss(blockColors(color, !block, .75)) } }
  35% { ${ styleToCss(blockColors(false, !block, .75)) } }
  65% { ${ styleToCss(blockColors(false, !block, .75)) } }
  100% { ${ styleToCss(blockColors(color, !block, .75)) } }
`

export const SMapSelector = styled.div<any>(
  () => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderStyle: 'solid',
    borderWidth: '.25rem',
    zIndex: 1,
    backgroundColor: 'transparent',
  }),
  ({ block, theme }: any) => css`
    animation: ${flash(block, theme.colors.active)} 2000ms ease both infinite
  `
)
