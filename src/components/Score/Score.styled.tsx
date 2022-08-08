import { s, brighten } from '3oilerplate'

export const SScore = s.div(({ theme, isDesktop }: any) => ({
  paddingY: 'm',
  paddingX: 'l',
  borderRadius: '.5rem',
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  backgroundColor: brighten('#000', .1),
  fontSize: '.8em',
  fontWeight: 'bold'
}))

export const SScoreItem = s.button(({ theme, isDesktop, type, isPressed }: any) => ({

}))
