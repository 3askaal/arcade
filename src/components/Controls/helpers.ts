import { rgba } from '3oilerplate'

export const bevelEmbossDepth = .15

export const getBevelEmboss = (depth = bevelEmbossDepth, inverted = false) => {
  const depthString = `${depth}rem`;

  return `inset ${depthString} ${depthString} ${depthString} 0 ${rgba(inverted ? 'black' : 'white', 0.25)},
    inset -${depthString} -${depthString} ${depthString} 0 ${rgba(inverted ? 'white' : 'black', 0.25)}`;
}

export const getDropShadow = () => {
  return `drop-shadow(0 0 .25rem rgba(0, 0, 0, .25))`;
}
