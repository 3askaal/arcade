import React, { useContext } from 'react'
import { SControls, SControlsButton, SControlsMiddle } from './Controls.styled'
import {
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from 'react-feather'
import isMobile from 'is-mobile'
import { GameContext } from '../../context'

export const Controls = () => {
  const { changeDirection } = useContext(GameContext)

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
        <ChevronLeft />
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
        <ChevronUp />
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
        <ChevronDown />
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
        <ChevronRight />
      </SControlsButton>
    </SControls>
  )
}
