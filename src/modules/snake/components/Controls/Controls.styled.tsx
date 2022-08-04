import { s, brighten, darken } from '3oilerplate'

export const SControls = s.div(({ theme, index }: any) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '12rem',
  width: '12rem',

  '&:before': {
    content: "''",
    position: 'absolute',
    width: '120%',
    height: '120%',
    borderRadius: '100%',
    backgroundColor: 'backgroundLight',
    pointerEvents: 'none',
  }
}))

export const SControlsMiddle = s.div(({ theme, index }: any) => ({
  position: 'absolute',
  width: '4rem',
  height: '4rem',
  backgroundColor: brighten('black', .2),
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
    backgroundColor: brighten('black', .4),
    pointerEvents: 'none',
  }
}))

export const SControlsButton = s.button(({ theme, type, color, index }: any) => ({
  position: 'absolute',
  display: 'flex',
  // alignItems: 'center',
  // justifyContent: 'center',
  width: '4rem',
  height: '4rem',
  backgroundColor: brighten('black', .2),
  border: 0,
  borderRadius: '.2rem',
  color: 'white',
  cursor: 'pointer',
  marginTop: 's',
  marginBottom: 's',
  padding: '.75rem',

  'svg': {
    strokeWidth: 3,
    stroke: darken('white', 1.8)
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
