import React, { FC } from 'react'
import { s } from '3oilerplate'
import styled, { css, keyframes } from 'styled-components'

const spinnerDotPositions = [
  { x: 1, y: 1 },
  { x: 2, y: 0 },
  { x: 3, y: 0 },
  { x: 4, y: 0 },
  { x: 5, y: 1 },
  { x: 6, y: 2 },
  { x: 6, y: 3 },
  { x: 6, y: 4 },
  { x: 5, y: 5 },
  { x: 4, y: 6 },
  { x: 3, y: 6 },
  { x: 2, y: 6 },
  { x: 1, y: 5 },
  { x: 0, y: 4 },
  { x: 0, y: 3 },
  { x: 0, y: 2 }
]

export const SSpinner = s.div({
  display: 'flex',
  position: 'relative',
  width: `${.5 * 8}rem`,
  height: `${.5 * 8}rem`,
})

const flash = () => keyframes`
  0% { opacity: 1; }
  75% { opacity: 0; }
  100% { opacity: 0; }
`

export const SSpinnerDot = styled.div<any>(
  ({ x, y }: any) => ({
    position: 'absolute',
    width: '.5rem',
    height: '.5rem',
    top: `${.5 * y}rem`,
    left: `${.5 * x}rem`,
    backgroundColor: 'white',
    opacity: 0,
  }),
  ({ index }: any) => css`
    animation: ${100 * spinnerDotPositions.length}ms ${flash} ${index * 100}ms infinite running forwards;
  `
)

export const Spinner: FC = () => {
  return (
    <SSpinner>
      { spinnerDotPositions.map((pos, index) => (
        <SSpinnerDot
          index={index}
          x={pos.x}
          y={pos.y}
        />
      )) }
    </SSpinner>
  )
}
