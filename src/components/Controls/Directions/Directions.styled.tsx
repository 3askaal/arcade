import { s, darken } from '3oilerplate'

export const SControls = s.div(({ theme, index }: any) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '10rem',
  aspectRatio: '1 / 1',
  filter: 'drop-shadow(0 0 3px rgba(0, 0, 0, .5))',
}))

export const SControlsMiddle = s.div(() => ({
  position: 'absolute',
  width: '32%',
  height: '32%',
  backgroundColor: 'controls.bg',
  pointerEvents: 'none',
  zIndex: 100,

  '&:before': {
    content: "''",
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    width: '70%',
    height: '70%',
    borderRadius: '100%',
    backgroundColor: 'controls.text',
    pointerEvents: 'none',
  }
}))

export const SControlsButton = s.button(({ type }: any) => ({
  position: 'absolute',
  display: 'flex',
  width: '32%',
  height: '32%',
  backgroundColor: 'controls.bg',
  color: 'controls.text',
  border: 0,
  borderRadius: '.2rem',
  cursor: 'pointer',
  marginTop: 's',
  marginBottom: 's',
  padding: '.5rem',
  boxShadow: `inset 0.05em 0.05em 0.05em 0 rgba(255,255,255, 0.3), inset -0.05em -0.05em 0.05em 0 rgba(0,0,0, 0.3)`,

  'svg': {
    strokeWidth: 3,
    stroke: darken('black', 1.8)
  },

  ...(type === 'up' && {
    height: '30%',
    transform: 'translateY(-99%)',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    justifyContent: 'center'
  }),

  ...(type === 'down' && {
    height: '30%',
    transform: 'translateY(99%)',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    justifyContent: 'center',
    alignItems: 'flex-end'
  }),

  ...(type === 'left' && {
    width: '30%',
    transform: 'translateX(-99%)',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: 'center',
  }),

  ...(type === 'right' && {
    width: '30%',
    transform: 'translateX(99%)',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    alignItems: 'center',
    justifyContent: 'flex-end'
  }),
}))
