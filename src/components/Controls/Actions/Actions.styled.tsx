import { s, ButtonReset } from '3oilerplate'
import { getBevelEmboss } from '../helpers'

export const SActions = s.div(({ theme, index }: any) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  maxWidth: '11rem',
  height: '6rem',
  justifyContent: 'flex-end',
}))

export const SActionsButton = s.button(({ theme }: any) => ({
  ...ButtonReset,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '100%',
  width: '4.4rem',
  height: '4.4rem',
  overflow: 'hidden',
  padding: 0,
  fontSize: '1.4em',
  fontWeight: 'bold',
  color: 'controls.text',
  backgroundColor: 'controls.bg',
  filter: 'drop-shadow(0 0 3px rgba(0, 0, 0, .5))',

  '+ *': {
    ml: 'm',
  },

  boxShadow: getBevelEmboss(),

  '&:first-child': {
    alignSelf: 'flex-end'
  },

  '&:last-child': {
    alignSelf: 'flex-start'
  }
}))
