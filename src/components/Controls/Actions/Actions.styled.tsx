import { s, darken, brighten, rgba } from '3oilerplate'
import { ButtonReset } from '../../Button/Button'

export const SActions = s.div(({ theme, index }: any) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '120px',
  height: '180px',
  alignItems: 'center',
  justifyContent: 'space-between',
}))

export const SActionsButton = s.button(({ theme, color }: any) => ({
  ...ButtonReset,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '100%',
  width: '5rem',
  height: '5rem',
  overflow: 'hidden',
  padding: 0,

  background: `radial-gradient(
    circle closest-side,
    ${darken(color, .6)},
    ${darken(color, 0)} 90%,
    ${darken(color, .6)}
  `,

  '&:first-child': {
    alignSelf: 'flex-end'
  },

  '&:last-child': {
    alignSelf: 'flex-start'
  }
}))


export const SActionsButtonPress = s.span(({ theme, color }: any) => ({
  ...ButtonReset,
  display: 'flex',
  width: '70%',
  height: '70%',
  borderRadius: '100%',
  boxShadow: `0 0 10px ${rgba('black', .8)}`,

  '&:hover': {
    boxShadow: `0 0 4px ${rgba('black', .6)}`,
    width: '66%',
    height: '66%',
  },

  background: `radial-gradient(
    ${darken(color, .6)},
    ${darken(color, .4)} 40%,
    ${brighten(color, .6)}
  )`
}))
