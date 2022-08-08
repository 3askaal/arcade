import { darken, brighten, mix } from '3oilerplate'

const positive = '#66DE93'
const negative = '#EA2C62'

const greys: any = {
  grey10: darken('white', 0.5),
  grey20: darken('white', 1),
  grey30: darken('white', 1.5),
  grey40: darken('white', 2),
  grey50: darken('white', 2.5),
  grey60: darken('white', 3),
  grey70: darken('white', 3.5),
  grey80: darken('white', 4),
  grey90: darken('white', 4.5),
}

const backgroundGray = mix(brighten('black', .4), '#937DC2', .005)

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
  ...greys,
  element: {
    background: darken(backgroundGray, 3.8),
    color: 'white'
  }
}
