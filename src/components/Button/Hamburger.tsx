import React, { FC, ReactElement } from 'react'
import { s, ButtonReset } from '3oilerplate'

const SButtonBar: any = s.div(({ index }: any) => ({
  height: '.25rem',
  width: '100%',
  backgroundColor: 'element.color',
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
