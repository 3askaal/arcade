import React from 'react'
import { SActions, SActionsButton, SActionsButtonPress } from './Actions.styled'
import isMobile from 'is-mobile'

export const Actions = ({ onClick, color = 'springgreen' }: any) => {
  return (
    <SActions>
      <SActionsButton
        color={color}
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
        <SActionsButtonPress color={color} />
      </SActionsButton>
      <SActionsButton
        color={color}
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
        <SActionsButtonPress color={color} />
      </SActionsButton>
    </SActions>
  )
}
