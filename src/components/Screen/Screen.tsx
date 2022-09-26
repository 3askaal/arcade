import React, { FC } from 'react'
import { s } from '3oilerplate'

export const SScreen = s.div(() => ({
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
  px: 'l',
  overflowY: 'auto',

  '> *': {
    margin: 'auto'
  }
}))


export const Screen: FC = (props) => {
  return (
    <SScreen {...props} />
  )
}
