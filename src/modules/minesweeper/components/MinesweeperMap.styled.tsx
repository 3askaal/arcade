import { s, rgba } from '3oilerplate'
import chroma from 'chroma-js'
import styled, { css, keyframes } from 'styled-components'

const blockColors = (color: string | false, alpha = 1) => ({
  borderTopColor: color ? chroma(color).brighten(1.25).alpha(alpha).hex() : 'rgba(0, 0, 0, 0)',
  borderRightColor: color ? chroma(color).brighten(1).alpha(alpha).hex() : 'rgba(0, 0, 0, 0)',
  backgroundColor: color ?  chroma(color).alpha(alpha).hex() : 'rgba(0, 0, 0, 0)',
  borderLeftColor: color ? chroma(color).darken(1).alpha(alpha).hex() : 'rgba(0, 0, 0, 0)',
  borderBottomColor: color ? chroma(color).darken(1.25).alpha(alpha).hex() : 'rgba(0, 0, 0, 0)',
})

export const SMapBlock = s.div(({ hide, flag }: any) => ({
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

const flash = (color: string) => keyframes`
  0% { box-shadow: 0 0 0 .25rem ${ rgba(color, .8) }; }
  35% { box-shadow: 0 0 0 .25rem ${ rgba(color, 0) }; }
  65% { box-shadow: 0 0 0 .25rem ${ rgba(color, 0) }; }
  100% { box-shadow: 0 0 0 .25rem ${ rgba(color, .8) }; }
`

export const SMapSelector = styled.div<any>(
  () => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
  }),
  ({ theme }: any) => css`
    animation: ${flash(theme.colors.accent)} 2000ms ease both infinite
  `
)
