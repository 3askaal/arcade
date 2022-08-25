import { s, darken, brighten, rgba } from '3oilerplate'
import chroma from 'chroma-js'
import { greys } from '../../../style'
import { ButtonReset } from '../../Button/Button'

export const SActions = s.div(({ theme, index }: any) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '80px',
  alignItems: 'center',
  justifyContent: 'space-between',
}))

export const SActionsButton = s.button(({ theme }: any) => ({
  ...ButtonReset,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '100%',
  width: '4rem',
  height: '4rem',
  overflow: 'hidden',
  padding: 0,
  fontSize: '1.2em',
  fontWeight: 'bold',
  color: 'controls.text',
  backgroundColor: 'controls.bg',
  filter: 'drop-shadow(0 0 3px rgba(0, 0, 0, .5))',

  '+ *': {
    mt: 'm',
  },

  boxShadow: `inset 0.05em 0.05em 0.05em 0 rgba(255,255,255,0.3), inset -0.05em -0.05em 0.05em 0 rgba(0,0,0,0.5)`,

  // background: `radial-gradient(
  //   circle closest-side,
  //   ${chroma(theme.colors.controls.bg).darken(1).hex()},
  //   ${chroma(theme.colors.controls.bg).darken(0.2).hex()} 85%,
  //   ${chroma(theme.colors.controls.bg).darken(0.6).hex()}
  // )`,

  // background: `radial-gradient(
  //   circle closest-side,
  //   ${chroma(theme.colors.controls.actions.bg).darken(1).hex()},
  //   ${chroma(theme.colors.controls.actions.bg).darken(0.2).hex()} 85%,
  //   ${chroma(theme.colors.controls.actions.bg).darken(0.6).hex()}
  // )`,

  '&:first-child': {
    alignSelf: 'flex-end'
  },

  '&:last-child': {
    alignSelf: 'flex-start'
  }
}))


// export const SActionsButtonPress = s.span(({ theme }: any) => ({
//   // ...ButtonReset,
//   display: 'flex',
//   width: '70%',
//   height: '70%',
//   borderRadius: '100%',
//   boxShadow: `0 0 6px ${rgba('black', .8)}`,

//   '&:hover': {
//     boxShadow: `0 0 4px ${rgba('black', .4)}`,
//     width: '66%',
//     height: '66%',
//   },

//   backgroundImage: `radial-gradient(
//     ${chroma(theme.colors.controls.actions.bg).darken(0.6).hex()},
//     ${chroma(theme.colors.controls.actions.bg).brighten(0).hex()}
//   )`
//     // ${chroma(color).darken(0.4).hex()} 40%,
// }))
