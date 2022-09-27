import React, { FC, useContext, useEffect, useState } from 'react';
import { Spacer } from '3oilerplate';
import { capitalize } from 'lodash';
import { GameContext } from '../../context';
import { MenuItem } from './Menu.styled';

export interface MenuItemProps {
  name: string;
  action: () => void;
  color?: string;
  disabled?: boolean;
  selected?: boolean;
  index?: number
}

interface MenuProps {
  content?: string;
  items: MenuItemProps[];
  controlledSelectedIndex?: number;
}

export const Menu: FC<MenuProps> = ({ items, controlledSelectedIndex }) => {
  const { setControls } = useContext(GameContext)
  const [selectedIndex, setSelectedIndexState] = useState(!controlledSelectedIndex && 0)

  const setSelectedIndex = (newSelectedIndex: number) => {
    const item = items[newSelectedIndex];

    if (item && !item.disabled) {
      setSelectedIndexState(newSelectedIndex);
    }
  }

  useEffect(() => {
    if (selectedIndex !== false) {
      setControls({
        onUp: () => setSelectedIndex(selectedIndex - 1),
        onDown: () => setSelectedIndex(selectedIndex + 1),
        onA: () => items[selectedIndex] ? items[selectedIndex].action() : null
      })
    }
  }, [selectedIndex])

  return (
    <Spacer size="m" s={{ alignItems: 'center' }}>
      { items.map(({ action, ...item }: any, index) => (
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
