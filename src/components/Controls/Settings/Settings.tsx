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
        onClick={() => onSelect && onSelect()}
        s={{ touchAction: isMobile() ? 'auto' : 'none' }}
      />
      <SSettingsButton
        color={color}
        type="A"
        onClick={() => onStart && onStart()}
        s={{ touchAction: isMobile() ? 'auto' : 'none' }}
      />
    </SSettings>
  )
}
