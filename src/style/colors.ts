import { darken, brighten, mix } from '3oilerplate'
import chroma from 'chroma-js';
import { times } from 'lodash';

const positive = '#66DE93'
const negative = '#EA2C62'

const getGreyPercentage = (percentage: number) => {
  return chroma('white').darken((percentage / 100) * 5.6).hex();
}

export const greys: any = Object.assign({}, ...times(100, (i) => ({ [`grey${i}`]: getGreyPercentage(i) })))

const bgDark = mix(brighten('black', .2), '#937DC2', .005)

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
    border: greys.grey80,
  },
  controls: {
    bg: greys.grey86,
    text: greys.grey60,
  }
}

const bgLight = mix(darken('white', 1.6), '#937DC2', .005)

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
  },
  controls: {
    bg: greys.grey34,
    text: greys.grey50,
  }
}
