import { s, darken } from '3oilerplate'

export const SControls = s.div(({ theme, index }: any) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '10rem',
  aspectRatio: '1 / 1',
}))

export const SControlsMiddle = s.div(({ theme, index }: any) => ({
  position: 'absolute',
  width: '30%',
  height: '30%',
  backgroundColor: 'grey100',
  pointerEvents: 'none',

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
    backgroundColor: 'grey90',
    pointerEvents: 'none',
  }
}))

export const SControlsButton = s.button(({ theme, type, color, index }: any) => ({
  position: 'absolute',
  display: 'flex',
  width: '32%',
  height: '32%',
  backgroundColor: 'grey100',
  border: 0,
  borderRadius: '.2rem',
  color: 'grey80',
  cursor: 'pointer',
  marginTop: 's',
  marginBottom: 's',
  padding: '.5rem',

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
