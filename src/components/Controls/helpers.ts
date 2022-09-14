import { rgba } from '3oilerplate'

export const bevelEmbossDepth = .15

export const getBevelEmboss = (depth = bevelEmbossDepth, inverted = false, whiteColor?: string, blackColor?: string) => {
  const depthString = `${depth}rem`;

  return `inset ${depthString} ${depthString} ${depthString} 0 ${rgba(inverted ? blackColor || 'black' : whiteColor || 'white', 0.3)},
    inset -${depthString} -${depthString} ${depthString} 0 ${rgba(inverted ? whiteColor || 'white' : blackColor || 'black', 0.3)}`;
}

export const getDropShadow = () => {
  return `drop-shadow(0 0 .25rem rgba(0, 0, 0, .25))`;
}
