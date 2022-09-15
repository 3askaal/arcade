import React, { useContext, useEffect, useState } from 'react';
import { Spacer, Text } from '3oilerplate';
import { Button } from '../Button/Button';
import { capitalize } from 'lodash';
import { FC } from 'react';
import { GameContext } from '../../context';

interface MenuItem {
  name: string;
  action: () => void;
  color?: string;
  disabled?: boolean;
}

interface MenuProps {
  content?: string;
  items: MenuItem[];
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
      { items.map(({ name, color, disabled }, index) => (
        <Button
          key={`list-item-${index}`}
          isDisabled={disabled}
          isSelected={index === selectedIndex}
          color={color}
        >
          { capitalize(name) }
        </Button>
      ))}
    </Spacer>
  )
}
