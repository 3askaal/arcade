import { s, darken } from '3oilerplate'

export const SControls = s.div(({ theme, index }: any) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '14rem',
  aspectRatio: '1 / 1',
}))

export const SControlsMiddle = s.div(({ theme, index }: any) => ({
  position: 'absolute',
  width: '25%',
  height: '25%',
  backgroundColor: 'accent',
  pointerEvents: 'none',

  '&:before': {
    content: "''",
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    width: '80%',
    height: '80%',
    borderRadius: '100%',
    backgroundColor: 'accentDark',
    pointerEvents: 'none',
  }
}))

export const SControlsButton = s.button(({ theme, type, color, index }: any) => ({
  position: 'absolute',
  display: 'flex',
  width: '25%',
  height: '25%',
  backgroundColor: 'accent',
  border: 0,
  borderRadius: '.2rem',
  color: 'accentDarker',
  cursor: 'pointer',
  marginTop: 's',
  marginBottom: 's',
  padding: '.75rem',

  'svg': {
    strokeWidth: 3,
    stroke: darken('black', 1.8)
  },

  ...(type === 'up' && {
    transform: 'translateY(-99%)',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    justifyContent: 'center'
  }),

  ...(type === 'down' && {
    transform: 'translateY(99%)',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    justifyContent: 'center',
    alignItems: 'flex-end'
  }),

  ...(type === 'left' && {
    transform: 'translateX(-99%)',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: 'center',
  }),

  ...(type === 'right' && {
    transform: 'translateX(99%)',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    alignItems: 'center',
    justifyContent: 'flex-end'
  }),
}))
