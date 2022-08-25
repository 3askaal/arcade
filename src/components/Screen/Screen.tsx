import React from 'react'
import { s } from '3oilerplate'

export const SScreen = s.div(({ theme, isDesktop }: any) => ({
  position: 'relative',
  backgroundColor: 'grey100',
  // display: 'block',
  fontSize: '.8em',
  fontWeight: 'bold',
  maxWidth: '420px',
  // maxHeight: '420px',
  // maxHeight: '100%',
  width: '100%',
  aspectRatio: '1 / 1',
  borderRadius: '1rem',
  px: 'm',
}))

export const Screen = ({ children }: any) => {
  return (
    <SScreen>
      { children }
    </SScreen>
  )
}
