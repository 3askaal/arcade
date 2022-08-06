import { s, brighten } from '3oilerplate'

export const SScore = s.div(({ theme, isDesktop }: any) => ({
  paddingY: 's',
  paddingX: 'm',
  borderRadius: '.25rem',
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  backgroundColor: brighten('#000', .4),
  boxShadow: '0 0 0 2px ' + brighten('#000', .6),
  fontSize: '.75em',
}))

export const SScoreItem = s.button(({ theme, isDesktop, type, isPressed }: any) => ({

}))
