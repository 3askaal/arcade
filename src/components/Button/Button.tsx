import React, { FC, ReactElement } from 'react'
import { s } from '3oilerplate'
import { Outline } from '../Retro/Outline'

interface ButtonProps {
  color?: string;
  isSelected?: boolean;
  isDisabled?: boolean;
}

export const SButton = s.div(({ color, isSelected }: ButtonProps) =>
  ({
    position: 'relative',
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 's',
    paddingX: 'm',
    paddingY: 's',
    color: 'white',

    ...(isSelected && {
      color
    })
  }),
  {
    isDisabled: {
      opacity: '.4'
    }
  },
)

export const Button: FC<ButtonProps> = ({ children, color = '#fff', ...props }): ReactElement => {
  return (
    <SButton color={color} {...props}>
      <Outline color={color} isSelected={props.isSelected} />
      { children }
    </SButton>
  )
}
