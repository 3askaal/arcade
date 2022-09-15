import React from 'react'
import { SDirections, SDirectionsButton, SDirectionsMiddle, SDirectionsMiddleCircle } from './Directions.styled'
import {
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from 'react-feather'
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
        {...isMobile() ? {
          onTouchStart: () => onLeft && onLeft()
        } : {
          onMouseDown: () => onLeft && onLeft()
        }}
        s={{
          touchAction: isMobile() ? 'auto' : 'none',
        }}
      >
        <ChevronLeft size={'auto'} />
      </SDirectionsButton>
      <SDirectionsButton
        type="up"
        {...isMobile() ? {
          onTouchStart: () => onUp && onUp()
        } : {
          onMouseDown: () => onUp && onUp()
        }}
        s={{
          touchAction: isMobile() ? 'auto' : 'none',
        }}
      >
        <ChevronUp size={'auto'} />
      </SDirectionsButton>
      <SDirectionsButton
        type="down"
        {...isMobile() ? {
          onTouchStart: () => onDown && onDown()
        } : {
          onMouseDown: () => onDown && onDown()
        }}
        s={{
          touchAction: isMobile() ? 'auto' : 'none',
        }}
      >
        <ChevronDown size={'auto'} />
      </SDirectionsButton>
      <SDirectionsButton
        type="right"
        {...isMobile() ? {
          onTouchStart: () => onRight && onRight()
        } : {
          onMouseDown: () => onRight && onRight()
        }}
        s={{
          touchAction: isMobile() ? 'auto' : 'none',
        }}
      >
        <ChevronRight size={'auto'} />
      </SDirectionsButton>
    </SDirections>
  )
}
