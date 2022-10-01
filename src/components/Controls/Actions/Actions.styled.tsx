import { s, ButtonReset } from '3oilerplate'
import { getBevelEmboss, getDropShadow } from '../helpers'

export const SActions = s.div(() => ({
  position: 'relative',
  display: 'flex',
  flexBasis: '40%',
  aspectRatio: '1 / 0.6',
  justifyContent: 'flex-end',
}))

export const SActionsButton = s.button(() => ({
  ...ButtonReset,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '100%',
  flexBasis: '50%',
  aspectRatio: '1 / 1',
  overflow: 'hidden',
  padding: 0,
  fontSize: '1.2em',
  fontWeight: 'bold',
  color: 'controls.text',
  lineHeight: 1,
  backgroundColor: 'controls.bg',
  filter: getDropShadow(),

  '+ *': {
    ml: '12%',
  },

  boxShadow: getBevelEmboss(),

  '&:first-child': {
    alignSelf: 'flex-end'
  },

  '&:last-child': {
    alignSelf: 'flex-start'
  }
}))
