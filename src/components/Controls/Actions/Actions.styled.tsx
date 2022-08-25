import { s } from '3oilerplate'
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

  boxShadow: `inset 0.05em 0.05em 0.05em 0 rgba(255,255,255,0.3), inset -0.05em -0.05em 0.05em 0 rgba(0,0,0, 0.3)`,

  '&:first-child': {
    alignSelf: 'flex-end'
  },

  '&:last-child': {
    alignSelf: 'flex-start'
  }
}))
