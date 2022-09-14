import React from 'react'
import { SControls, SControlsButton, SControlsMiddle, SControlsMiddleCircle } from './Directions.styled'
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
    <SControls>
      <SControlsMiddle>
        <SControlsMiddleCircle />
      </SControlsMiddle>
      <SControlsButton
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
      </SControlsButton>
      <SControlsButton
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
      </SControlsButton>
      <SControlsButton
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
      </SControlsButton>
      <SControlsButton
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
      </SControlsButton>
    </SControls>
  )
}
