import { s } from '3oilerplate'
import chroma from 'chroma-js'

// export const SMap = s.div(({ mode, gameOver }: any) => ({
//   display: 'flex',
//   flexWrap: 'wrap',
//   position: 'relative',
//   width: '100%',
//   maxWidth: '500px',
//   aspectRatio: `${(mode.width / mode.height) || 1} / 1`,
//   border: '.25rem solid',
//   userSelect: 'none',

//   // Light
//   borderRightColor: chroma('#fff').darken(0.5).hex(),
//   borderTopColor: chroma('#fff').darken(0.5).hex(),
//   // Middle
//   backgroundColor: chroma('#fff').darken(1).hex(),
//   // Dark
//   borderLeftColor: chroma('#fff').darken(1.5).hex(),
//   borderBottomColor: chroma('#fff').darken(1.5).hex(),

//   ...(gameOver && {
//     cursor: 'not-allowed',

//     [SMapBlock]: {
//       pointerEvents: 'none',
//       // Light
//       borderTopColor: chroma('#FD0054').brighten(1).hex(),
//       borderRightColor: chroma('#FD0054').brighten(1).hex(),
//       // Middle
//       backgroundColor: chroma('#FD0054').hex(),
//       // Dark
//       borderLeftColor: chroma('#FD0054').darken(1).hex(),
//       borderBottomColor: chroma('#FD0054').darken(1).hex(),
//     }
//   })
// }))

const blockColors = (color: string) => ({
  borderTopColor: chroma(color).brighten(1.25).hex(),
  borderRightColor: chroma(color).brighten(1).hex(),
  backgroundColor: chroma(color).hex(),
  borderLeftColor: chroma(color).darken(1).hex(),
  borderBottomColor: chroma(color).darken(1.25).hex(),
})

export const SMapBlock = s.div(({ theme, hidden, flag }: any) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  borderStyle: 'solid',
  borderWidth: '.25rem',
  cursor: 'pointer',
  ...blockColors('#656565'),

  ...(flag && {
    ...blockColors('#C9485B')
  }),

  ...(hidden && {
    opacity: 0,
    pointerEvents: 'none',
  })
}))

const threadColors = [
  '#07689F',
  '#019267',
  '#E84545',
  '#27496D',
  '#630606',
  '#069A8E',
  '#383838',
  '#6D8299'
]

export const SMapMineThread = s.div(({ amount }: any) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: threadColors[amount - 1],
  fontWeight: 'bold',
  fontSize: '.8em'
}))

export const SMapMine = s.div(() => ({
  position: 'relative',
  borderRadius: '100%',
  width: '60%',
  height: '60%',
  backgroundColor: '#222',
}))
