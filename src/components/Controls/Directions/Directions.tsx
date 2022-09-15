import React from 'react'
import { SDirections, SDirectionsButton, SDirectionsMiddle, SDirectionsMiddleCircle } from './Directions.styled'
import { ChevronUp, ChevronLeft, ChevronRight, ChevronDown } from 'react-feather'
import isMobile from 'is-mobile'

export const Directions = ({ controls = {} }: any) => {
  const { onLeft, onRight, onDown, onUp } = controls

  return (
    <SDirections>
      <SDirectionsMiddle>
        <SDirectionsMiddleCircle />
      </SDirectionsMiddle>
      <SDirectionsButton
        type="left"
        {...{ [isMobile() ? 'onTouchStart' : 'onMouseDown']: () => onLeft && onLeft() }}
        s={{ touchAction: isMobile() ? 'auto' : 'none' }}
      >
        <ChevronLeft />
      </SDirectionsButton>
      <SDirectionsButton
        type="up"
        {...{ [isMobile() ? 'onTouchStart' : 'onMouseDown']: () => onUp && onUp() }}
        s={{ touchAction: isMobile() ? 'auto' : 'none' }}
      >
        <ChevronUp />
      </SDirectionsButton>
      <SDirectionsButton
        type="down"
        {...{ [isMobile() ? 'onTouchStart' : 'onMouseDown']: () => onDown && onDown() }}
        s={{ touchAction: isMobile() ? 'auto' : 'none' }}
      >
        <ChevronDown />
      </SDirectionsButton>
      <SDirectionsButton
        type="right"
        {...{ [isMobile() ? 'onTouchStart' : 'onMouseDown']: () => onRight && onRight() }}
        s={{ touchAction: isMobile() ? 'auto' : 'none' }}
      >
        <ChevronRight />
      </SDirectionsButton>
    </SDirections>
  )
}
