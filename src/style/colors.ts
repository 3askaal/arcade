import { darken, brighten, mix } from '3oilerplate'

const positive = '#66DE93'
const negative = '#EA2C62'

const backgroundGray = mix('white', '#937DC2', .5)

export const colors: any = {
  primary: '#494786',
  primaryDark: darken('#494786', 0.5),
  secondary: '#9a2257',
  secondaryDark: darken('#9a2257', 0.25),
  background: backgroundGray,
  backgroundLight: brighten(backgroundGray, .1),
  backgroundBorderLight: brighten(backgroundGray, 1),
  backgroundBorderDark: darken(backgroundGray, 1),
  positive,
  negative,
  white: darken('white', 1),
  black: brighten('black', .25),
  element: {
    background: darken(backgroundGray, 3.8)
  }
}
