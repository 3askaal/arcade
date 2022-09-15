import React, { FC, ReactElement } from 'react'
import { s } from '3oilerplate'
import { Outline } from '../Retro/Outline'

export const SButton = s.div(({ color, selected }: any) =>
  ({
    position: 'relative',
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 's',
    paddingX: 'm',
    paddingY: 's',
    // TODO: fix color variable
    color: 'white',

    ...(selected && {
      color
    })
  }),
  {
    isDisabled: {
      opacity: '.4'
    }
  },
)

export const Button: FC<any> = ({ children, color = '#fff', ...props }: any): ReactElement => {
  return (
    <SButton color={color} {...props}>
      <Outline color={color} selected={props.selected} />
      { children }
    </SButton>
  )
}
