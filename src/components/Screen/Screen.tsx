import React from 'react'
import { s } from '3oilerplate'

export const SScreen = s.div(({ theme }: any) => ({
  position: 'relative',
  backgroundColor: 'grey95',
  display: 'flex',
  flexDirection: 'column',
  fontSize: '.8em',
  fontWeight: 'bold',
  maxWidth: '420px',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  aspectRatio: '1 / 1',
  borderRadius: '1.2rem',
  fontFamily: 'retro',
  textTransform: 'uppercase',
  p: 'm',

  '> *': {
    margin: 'auto'
  }
}))


export const Screen = (props: any) => {
  return (
    <SScreen {...props} />
  )
}
