import { createGlobalStyle } from 'styled-components'

export const LocalGlobalStyle = createGlobalStyle({
  '*': {
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },

  html: {
    height: '100%',
  },

  body: {
    height: '100%',
  },

  svg: {
    display: 'block',
    stroke: 'currentcolor !important'
    // maxWidth: '20px !important',
    // maxHeight: '20px !important',
  },

  button: {
    appearance: 'none',
    outline: '0',
    '-webkit-tap-highlight-color': 'transparent',
  }
})
