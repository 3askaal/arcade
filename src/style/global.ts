import { createGlobalStyle } from 'styled-components'

export const LocalGlobalStyle: any = createGlobalStyle<any>({
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
    maxWidth: '20px !important',
    maxHeight: '20px !important',
    stroke: 'currentcolor !important'
  },

  button: {
    appearance: 'none',
    outline: '0',
    '-webkit-tap-highlight-color': 'transparent',
  }
})
