import React, { FC, useContext, useEffect, useState } from 'react';
import { Spacer, Text } from '3oilerplate';
import { capitalize } from 'lodash';
import { GameContext } from '../../context';
import { MenuItem } from './Menu.styled';

export interface MenuItemProps {
  name: string;
  action: () => void;
  color?: string;
  disabled?: boolean;
  selected?: boolean;
}

interface MenuProps {
  content?: string;
  items: MenuItemProps[];
}

export const Menu: FC<MenuProps> = ({ items, content }) => {
  const { setControls } = useContext(GameContext)
  const [selectedIndex, setSelectedIndexState] = useState(0)

  const setSelectedIndex = (newSelectedIndex: number) => {
    const item = items[newSelectedIndex];

    if (item && !item.disabled) {
      setSelectedIndexState(newSelectedIndex);
    }
  }

  useEffect(() => {
    setControls({
      onUp: () => setSelectedIndex(selectedIndex - 1),
      onDown: () => setSelectedIndex(selectedIndex + 1),
      onA: () => items[selectedIndex]?.action()
    })
  }, [selectedIndex])

  return (
    <Spacer size="m" s={{ alignItems: 'center' }}>
      { content && <Text>{ content }</Text> }
      { items.map((props, index) => (
        <MenuItem
          key={`list-item-${index}`}
          {...props}
          selected={index === selectedIndex}
        >
          { capitalize(props.name) }
        </MenuItem>
      ))}
    </Spacer>
  )
}
