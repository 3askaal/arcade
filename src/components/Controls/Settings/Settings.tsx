import React from 'react'
import { SSettings, SSettingsButton } from './Settings.styled'
import isMobile from 'is-mobile'
import { IControls } from '../../../context'

export const Settings = ({ onStart, onSelect }: IControls) => {

  return (
    <SSettings>
      <SSettingsButton
        type="B"
        {...{ [isMobile() ? 'onTouchStart' : 'onMouseDown']: () => onSelect && onSelect() }}
        s={{ touchAction: isMobile() ? 'auto' : 'none' }}
      />
      <SSettingsButton
        type="A"
        {...{ [isMobile() ? 'onTouchStart' : 'onMouseDown']: () => onStart && onStart() }}
        s={{ touchAction: isMobile() ? 'auto' : 'none' }}
      />
    </SSettings>
  )
}
