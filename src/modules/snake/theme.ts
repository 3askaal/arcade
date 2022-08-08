import { brighten, darken } from "3oilerplate";

const accent = '#00FFAB'

export const SnakeTheme = {
  colors: {
    map: brighten('#000', .1),
    accent,
    accentDark: darken(accent, .5),
    accentDarker: darken(accent, 4),
  }
}
