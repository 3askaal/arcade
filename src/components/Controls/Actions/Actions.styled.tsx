import { s, ButtonReset } from '3oilerplate'

export const SActions = s.div(({ theme, index }: any) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  height: '5.4rem',
  alignItems: 'flex-end',
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

  boxShadow: `inset 0.05em 0.05em 0.05em 0 rgba(255,255,255,0.3), inset -0.05em -0.05em 0.05em 0 rgba(0,0,0, 0.3)`,

  '&:first-child': {
    alignSelf: 'flex-end'
  },

  '&:last-child': {
    alignSelf: 'flex-start'
  }
}))
