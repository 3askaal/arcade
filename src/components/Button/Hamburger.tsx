import React, { FC, ReactElement } from 'react'
import { s } from '3oilerplate'

export const ButtonReset: any = {
  backgroundColor: 'transparent',
  border: 0,
  outline: 0,
  cursor: 'pointer',
}

const SButtonBar: any = s.div(({ index }: any) => ({
  height: '.25rem',
  width: '100%',
  backgroundColor: 'grey20',
}))

export const SButton: any = s.button(({ color }: any) =>
  ({
    ...ButtonReset,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '1.5rem',
    height: '1.25rem',
    color: 'white',
    padding: 0,

    '&:hover': {
      [SButtonBar]: {
        backgroundColor: color,

        '&:after': {
          backgroundColor: color,
        }
      }
    }
  })
)

export const HamburgerButton: FC<any> = ({ children, ...props }: any): ReactElement => {
  return (
    <SButton sRef="Button" {...props}>
      <SButtonBar />
      <SButtonBar />
      <SButtonBar />
    </SButton>
  )
}
