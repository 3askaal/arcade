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
        onClick={() => onLeft && onLeft()}
        s={{ touchAction: isMobile() ? 'auto' : 'none' }}
      >
        <ChevronLeft />
      </SDirectionsButton>
      <SDirectionsButton
        type="up"
        onClick={() => onUp && onUp()}
        s={{ touchAction: isMobile() ? 'auto' : 'none' }}
      >
        <ChevronUp />
      </SDirectionsButton>
      <SDirectionsButton
        type="down"
        onClick={() => onDown && onDown()}
        s={{ touchAction: isMobile() ? 'auto' : 'none' }}
      >
        <ChevronDown />
      </SDirectionsButton>
      <SDirectionsButton
        type="right"
        onClick={() => onRight && onRight()}
        s={{ touchAction: isMobile() ? 'auto' : 'none' }}
      >
        <ChevronRight />
      </SDirectionsButton>
    </SDirections>
  )
}
