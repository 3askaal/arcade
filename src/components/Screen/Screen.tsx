import React from 'react'
import { s } from '3oilerplate'

export const SScreen = s.div(({ theme, isDesktop }: any) => ({
  position: 'relative',
  backgroundColor: 'grey98',
  display: 'block',
  flexDirection: 'column',
  fontSize: '.8em',
  fontWeight: 'bold',
  maxWidth: '420px',
  justifyContent: 'center',
  width: '100%',
  aspectRatio: '1 / 1',
  borderRadius: '1rem',
  p: 's',

  '> *': {
    margin: 'auto'
  }
}))

export const Screen = (props: any) => {
  return (
    <SScreen {...props} />
  )
}
