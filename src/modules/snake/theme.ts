import { darken } from "3oilerplate";
import { greys } from "../../style";

const accent = '#00FFAB'

export const SnakeTheme = {
  colors: {
    map: greys.grey95,
    accent,
    accentDark: darken(accent, .5),
    accentDarker: darken(accent, 4),
  }
}
