import React, { FC } from 'react';
import { Spacer } from '3oilerplate';
import { capitalize } from 'lodash';
import { MenuItem } from './Menu.styled';
import { MenuItemProps, useMenu } from '../../helpers/useMenu';

interface MenuProps {
  content?: string;
  items: MenuItemProps[];
  controlledSelectedIndex?: number;
}

export const Menu: FC<MenuProps> = ({ items, controlledSelectedIndex }) => {
  const [selectedIndex] = useMenu(controlledSelectedIndex !== undefined ? null : items)

  return (
    <Spacer size="m" s={{ alignItems: 'center' }}>
      { items.filter(({ hidden }) => !hidden).map(({ action, ...item }: any, index) => (
        <MenuItem
          key={`list-item-${index}`}
          {...item}
          selected={(item.index || index) === (controlledSelectedIndex || selectedIndex)}
        >
          { capitalize(item.name) }
        </MenuItem>
      ))}
    </Spacer>
  )
}
