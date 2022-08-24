import React from 'react'
import { s } from '3oilerplate'

export const SScreen = s.div(({ theme, isDesktop }: any) => ({
  position: 'relative',
  display: 'flex',
  backgroundColor: 'black',
  fontSize: '.8em',
  fontWeight: 'bold',
  maxWidth: '320px',
  maxHeight: '320px',
  height: '100%',
  width: '100%',
  borderRadius: '1rem',
  padding: 's',
  border: '.25rem solid',
  borderColor: 'backgroundBorderDark'
}))

export const Screen = ({ children }: any) => {
  return (
    <SScreen>
      { children }
    </SScreen>
  )
}
