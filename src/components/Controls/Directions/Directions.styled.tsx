import { s, darken } from '3oilerplate'
import { bevelEmbossDepth, getBevelEmboss, getDropShadow } from '../helpers'

export const SControls = s.div(() => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '12rem',
  aspectRatio: '1 / 1',
  filter: getDropShadow(),
}))

export const SControlsMiddle = s.div(() => ({
  position: 'absolute',
  width: '30%',
  height: '30%',
  backgroundColor: 'controls.bg',
  pointerEvents: 'none',
  zIndex: 100
}))

export const SControlsMiddleCircle = s.div(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  margin: 'auto',
  width: '70%',
  height: '70%',
  borderRadius: '100%',
  backgroundColor: 'controls.bg',
  boxShadow: getBevelEmboss(bevelEmbossDepth, true),
  pointerEvents: 'none',
  zIndex: 100
}))

export const SControlsButton = s.button(({ type }: any) => ({
  position: 'absolute',
  display: 'flex',
  width: '34%',
  height: '34%',
  backgroundColor: 'controls.bg',
  color: 'controls.text',
  border: 0,
  cursor: 'pointer',
  padding: '1rem',
  borderRadius: '.2rem',
  boxShadow: getBevelEmboss(bevelEmbossDepth),

  'svg': {
    strokeWidth: 3,
    stroke: darken('black', 1.8),
    maxWidth: '1.5rem',
    maxHeight: '1.5rem',
  },

  // masking out buttons for overflowing bevel & emboss
  // clipPath: `polygon(
  //   25% 25%, // topLeft
  //   50% 0%, // triangleTop
  //   75% 25%, // topRight
  //   100% 50%, // triangleRight
  //   75% 75%, // bottomRight
  //   50% 100%, // triangleBottom
  //   25% 75%, // bottomLeft
  //   0% 50%, // triangleLeft
  // )`

  ...(type === 'up' && {
    height: '50%',
    transform: 'translateY(-50%)',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    justifyContent: 'center',

    clipPath: `polygon(
      0% 0%,
      100% 0%,
      100% 66%,
      50% 100%,
      0% 66%
    )`
  }),

  ...(type === 'down' && {
    height: '50%',
    transform: 'translateY(50%)',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',

    clipPath: `polygon(
      0% 34%,
      50% 0%,
      100% 34%,
      100% 100%,
      0% 100%
    )`
  }),

  ...(type === 'left' && {
    width: '50%',
    transform: 'translateX(-50%)',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: 'center',

    clipPath: `polygon(
      0% 0%,
      66% 0%,
      100% 50%,
      66% 100%,
      0% 100%
    )`
  }),

  ...(type === 'right' && {
    width: '50%',
    transform: 'translateX(50%)',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',

    clipPath: `polygon(
      34% 0%,
      100% 0%,
      100% 100%,
      34% 100%,
      0% 50%
    )`
  }),
}))
