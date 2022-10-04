import { s, ButtonReset } from '3oilerplate'
import { getBevelEmboss, getDropShadow } from '../helpers'

export const SOptions = s.div(() => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  maxWidth: '11rem',
  justifyContent: 'flex-end',
}))

export const SOptionsButton = s.button(() => ({
  ...ButtonReset,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '1rem',
  width: '4rem',
  height: '1.75rem',
  overflow: 'hidden',
  padding: 0,
  fontSize: '1.4em',
  fontWeight: 'bold',
  color: 'controls.text',
  backgroundColor: 'controls.bg',
  filter: getDropShadow(),

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
