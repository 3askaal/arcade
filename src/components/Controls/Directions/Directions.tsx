import React from 'react'
import { SControls, SControlsButton, SControlsMiddle } from './Directions.styled'
import {
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from 'react-feather'
import isMobile from 'is-mobile'

export const Directions = ({ onClick }: any) => {
  return (
    <SControls>
      <SControlsMiddle />
      <SControlsButton
        type="left"
        {...isMobile() ? {
          onTouchStart: () => onClick('left')
        } : {
          onMouseDown: () => onClick('left')
        }}
        s={{
          touchAction: isMobile() ? 'auto' : 'none',
        }}
      >
        <ChevronLeft size={24} />
      </SControlsButton>
      <SControlsButton
        type="up"
        {...isMobile() ? {
          onTouchStart: () => onClick('up')
        } : {
          onMouseDown: () => onClick('up')
        }}
        s={{
          touchAction: isMobile() ? 'auto' : 'none',
        }}
      >
        <ChevronUp size={24} />
      </SControlsButton>
      <SControlsButton
        type="down"
        {...isMobile() ? {
          onTouchStart: () => onClick('down')
        } : {
          onMouseDown: () => onClick('down')
        }}
        s={{
          touchAction: isMobile() ? 'auto' : 'none',
        }}
      >
        <ChevronDown size={24} />
      </SControlsButton>
      <SControlsButton
        type="right"
        {...isMobile() ? {
          onTouchStart: () => onClick('right')
        } : {
          onMouseDown: () => onClick('right')
        }}
        s={{
          touchAction: isMobile() ? 'auto' : 'none',
        }}
      >
        <ChevronRight size={24} />
      </SControlsButton>
    </SControls>
  )
}
