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
  grey95: darken('white', 4.75),
  grey100: darken('white', 5),
  grey110: darken('white', 5.5),
  grey120: darken('white', 6),
  grey130: darken('white', 6.5),
  grey140: darken('white', 7),
  grey150: darken('white', 7.5),
  grey160: darken('white', 8),
  grey170: darken('white', 8.5),
  grey180: darken('white', 9),
  grey190: darken('white', 9.5),
}

const bgDark = mix(brighten('black', .4), '#937DC2', .005)

export const colors: any = {
  primary: '#494786',
  primaryDark: darken('#494786', 0.5),
  secondary: '#9a2257',
  secondaryDark: darken('#9a2257', 0.25),
  background: bgDark,
  backgroundLight: brighten(bgDark, .1),
  backgroundBorderLight: brighten(bgDark, 1),
  backgroundBorderDark: darken(bgDark, 1),
  positive,
  negative,
  white: darken('white', 1),
  black: brighten('black', .25),
  ...greys,
  element: {
    background: darken(bgDark, 3.8),
    color: 'white',
    border: greys.grey90,
  }
}

const bgLight = mix(darken('white', 1.4), '#937DC2', .005)

export const lightColors = {
  ...colors,
  background: bgLight,
  backgroundLight: brighten(bgLight, .1),
  backgroundBorderLight: brighten(bgLight, 1),
  backgroundBorderDark: darken(bgLight, 1),
  element: {
    background: brighten(bgLight, .4),
    color: 'black',
    border: greys.grey60,
  }
}
