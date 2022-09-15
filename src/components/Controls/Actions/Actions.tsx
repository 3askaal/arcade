import React from 'react'
import { SActions, SActionsButton } from './Actions.styled'
import isMobile from 'is-mobile'

export const Actions = ({ controls = {}, color, ...props }: any) => {
  const { onA, onB } = controls

  return (
    <SActions {...props}>
      <SActionsButton
        color={color}
        type="B"
        onClick={() => onB && onB()}
        s={{ touchAction: isMobile() ? 'auto' : 'none' }}
      >
        B
      </SActionsButton>
      <SActionsButton
        color={color}
        type="A"
        onClick={() => onA && onA()}
        s={{ touchAction: isMobile() ? 'auto' : 'none' }}
      >
        A
      </SActionsButton>
    </SActions>
  )
}
