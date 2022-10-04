import React from 'react'
import { SOptions, SOptionsButton } from './Options.styled'
import isMobile from 'is-mobile'
import { IControls } from '../../../context'

export const Options = ({ onStart, onSelect }: IControls) => {

  return (
    <SOptions>
      <SOptionsButton
        type="B"
        {...{ [isMobile() ? 'onTouchStart' : 'onMouseDown']: () => onSelect && onSelect() }}
        s={{ touchAction: isMobile() ? 'auto' : 'none' }}
      />
      <SOptionsButton
        type="A"
        {...{ [isMobile() ? 'onTouchStart' : 'onMouseDown']: () => onStart && onStart() }}
        s={{ touchAction: isMobile() ? 'auto' : 'none' }}
      />
    </SOptions>
  )
}
