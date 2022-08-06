import { darken, mix } from '3oilerplate'

const positive = '#66DE93'
const negative = '#EA2C62'

const backgroundGray = mix('white', '#937DC2', .5)

export const colors: any = {
  primary: '#7459dc',
  primaryDark: darken('#7459dc', 0.25),
  secondary: '#04f2d5',
  secondaryDark: darken('#04f2d5', 0.25),
  background: darken(backgroundGray, 2),
  backgroundLight: darken(backgroundGray, 1.9),
  backgroundBorderLight: darken(backgroundGray, 1),
  backgroundBorderDark: darken(backgroundGray, 3),
  positive,
  negative,
}
