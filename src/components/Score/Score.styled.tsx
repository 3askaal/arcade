import { s } from '3oilerplate'

export const SScore = s.div(({ theme, isDesktop }: any) => ({
  position: 'relative',
  display: 'flex',
  height: '100%',
  backgroundColor: 'black',
  fontSize: '.8em',
  fontWeight: 'bold',
}))

export const SScoreDivider = s.div(({ color }: any) => ({
  display: 'block',
  position: 'relative',
  width: '.25rem',
  height: '100%',
  backgroundColor: 'grey80',
}))

export const SScoreItem = s.div(({ color }: any) => ({
  paddingY: 's',
  paddingX: 'm',
}))
