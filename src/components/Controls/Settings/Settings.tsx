import React from 'react'
import { SSettings, SSettingsButton } from './Settings.styled'
import isMobile from 'is-mobile'

export const Settings = ({ controls = {}, color, ...props }: any) => {
  const { onStart, onSelect } = controls

  return (
    <SSettings {...props}>
      <SSettingsButton
        color={color}
        type="B"
        {...{ [isMobile() ? 'onTouchStart' : 'onMouseDown']: () => onSelect && onSelect() }}
        s={{ touchAction: isMobile() ? 'auto' : 'none' }}
      />
      <SSettingsButton
        color={color}
        type="A"
        {...{ [isMobile() ? 'onTouchStart' : 'onMouseDown']: () => onStart && onStart() }}
        s={{ touchAction: isMobile() ? 'auto' : 'none' }}
      />
    </SSettings>
  )
}
