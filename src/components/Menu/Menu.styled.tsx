import React, { FC, ReactElement } from 'react'
import { s } from '3oilerplate'
import { MenuItemProps } from './Menu'
import { Outline } from '../Retro/Outline'

export const SMenuItem = s.div(({ color, selected }: MenuItemProps) =>
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

    ...(selected && {
      color
    })
  }),
  {
    disabled: {
      opacity: '.4'
    }
  },
)

export const MenuItem: FC<MenuItemProps> = ({ children, color = '#fff', ...props }): ReactElement => {
  return (
    <SMenuItem color={color} {...props}>
      <Outline color={color} isSelected={props.selected} />
      { children }
    </SMenuItem>
  )
}
