import React, { FC, ReactElement } from 'react'
import { s, rgba } from '3oilerplate'
import { Outline } from '../Retro/Outline'
import { MenuItemProps } from '../../helpers/useMenu'

export const SMenu = s.div(({ theme }: any) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  p: 'l',
  backgroundColor: rgba(theme.colors.grey90, .96),
  zIndex: 1000
}))

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
