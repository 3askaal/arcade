import { rgba } from '3oilerplate'

export const getBevelEmboss = (depth = 0.05, inverted = false) => {
  const depthString = `${depth}em`;

  return `inset ${depthString} ${depthString} ${depthString} 0 ${rgba(inverted ? 'black' : 'white', 0.3)},
    inset -${depthString} -${depthString} ${depthString} 0 ${rgba(inverted ? 'white' : 'black', 0.3)}`;
}
