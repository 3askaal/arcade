import React, { useContext } from 'react'
import { SControls, SControlsButton, SControlsMiddle } from './Controls.styled'
import {
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from 'react-feather'
import isMobile from 'is-mobile'
import { SnakeContext } from '../../context/SnakeContext'

export const SnakeControls = () => {
  const { changeDirection } = useContext(SnakeContext)

  return (
    <SControls>
      <SControlsMiddle />
      <SControlsButton
        type="left"
        {...isMobile() ? {
          onTouchStart: () => changeDirection('left')
        } : {
          onMouseDown: () => changeDirection('left')
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
          onTouchStart: () => changeDirection('up')
        } : {
          onMouseDown: () => changeDirection('up')
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
          onTouchStart: () => changeDirection('down')
        } : {
          onMouseDown: () => changeDirection('down')
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
          onTouchStart: () => changeDirection('right')
        } : {
          onMouseDown: () => changeDirection('right')
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
