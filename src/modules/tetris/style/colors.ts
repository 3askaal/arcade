import { darken, brighten, mix } from '3oilerplate'

const positive = '#66DE93'
const negative = '#EA2C62'

const backgroundGray = mix('white', '#937DC2', .4)

export const colors: any = {
  primary: '#5463FF',
  primaryDark: darken('#5463FF', 0.5),
  secondary: '#04f2d5',
  secondaryDark: darken('#04f2d5', 0.25),
  background: darken(backgroundGray, 2),
  backgroundLight: darken(backgroundGray, 1.9),
  backgroundBorderLight: darken(backgroundGray, 1),
  backgroundBorderDark: darken(backgroundGray, 3),
  positive,
  negative,
  white: darken('white', 1),
  black: brighten('black', .25),
}
