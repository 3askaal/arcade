import { s, ButtonReset } from '3oilerplate'
import { getBevelEmboss } from '../helpers'

export const SActions = s.div(({ theme, index }: any) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  height: '5.4rem',
  alignItems: 'flex-end',
  maxWidth: '100%',
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
