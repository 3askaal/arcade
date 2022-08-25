import React from 'react'
import { SActions, SActionsButton } from './Actions.styled'
import isMobile from 'is-mobile'

export const Actions = ({ controls = {}, color }: any) => {
  const { onA, onB } = controls

  return (
    <SActions>
      <SActionsButton
        color={color}
        type="A"
        {...isMobile() ? {
          onTouchStart: () => onA && onA()
        } : {
          onMouseDown: () => onA && onA()
        }}
        s={{
          touchAction: isMobile() ? 'auto' : 'none',
        }}
      >
        {/* <SActionsButtonPress color={color} /> */}
        A
      </SActionsButton>
      <SActionsButton
        color={color}
        type="B"
        {...isMobile() ? {
          onTouchStart: () => onB && onB()
        } : {
          onMouseDown: () => onB && onB()
        }}
        s={{
          touchAction: isMobile() ? 'auto' : 'none',
        }}
      >
        {/* <SActionsButtonPress color={color} /> */}
        B
      </SActionsButton>
    </SActions>
  )
}
