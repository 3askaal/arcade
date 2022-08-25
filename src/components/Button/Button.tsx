import React, { FC, ReactElement } from 'react'
import { s } from '3oilerplate'
import { Outline } from '../Retro/Outline'

export const ButtonReset: any = {
  backgroundColor: 'transparent',
  border: 0,
  outline: 0,
  cursor: 'pointer',
}

export const SButton: any = s.button(({ color }: any) =>
  ({
    ...ButtonReset,
    position: 'relative',
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 's',
    paddingX: 'm',
    paddingY: 's',
    color: 'element.color',
    backgroundColor: 'element.background',
    fontWeight: 'bold',

    '&:hover': {
      color
    }
  }),
  {
    isDisabled: {
      opacity: '.4'
    }
  }
)

export const Button: FC<any> = ({ children, color, ...props }: any): ReactElement => {
  return (
    <SButton color={color} {...props}>
      <Outline color={color} />
      { children }
    </SButton>
  )
}
