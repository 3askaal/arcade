import React from 'react'
import { SActions, SActionsButton } from './Actions.styled'
import isMobile from 'is-mobile'
import { IControls } from '../../../context'

export const Actions = ({ onA, onB }: IControls) => {
  return (
    <SActions>
      <SActionsButton
        type="B"
        {...{ [isMobile() ? 'onTouchStart' : 'onMouseDown']: () => onB && onB() }}
        s={{ touchAction: isMobile() ? 'auto' : 'none' }}
      >
        B
      </SActionsButton>
      <SActionsButton
        type="A"
        {...{ [isMobile() ? 'onTouchStart' : 'onMouseDown']: () => onA && onA() }}
        s={{ touchAction: isMobile() ? 'auto' : 'none' }}
      >
        A
      </SActionsButton>
    </SActions>
  )
}
