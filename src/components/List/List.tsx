import React, { useContext, useEffect, useState } from 'react';
import { Text } from '3oilerplate';
import { capitalize } from 'lodash';
import { FC } from 'react';
import { GameContext } from '../../context';
import { SList, SListItem } from './List.styled';

export interface ListItem {
  name: string;
  value: string;
  isSelected?: boolean;
}

export interface ListProps {
  content?: string;
  items: ListItem[];
}

export const List: FC<ListProps> = ({ items, content }) => {
  const { setControls } = useContext(GameContext)
  const [selectedIndex, setSelectedIndexState] = useState(0)

  const setSelectedIndex = (newSelectedIndex: number) => {
    const item = items[newSelectedIndex];

    if (item) {
      setSelectedIndexState(newSelectedIndex);
    }
  }

  // useEffect(() => {
  //   setControls({
  //     onUp: () => setSelectedIndex(selectedIndex - 1),
  //     onDown: () => setSelectedIndex(selectedIndex + 1),
  //   })
  // }, [selectedIndex])

  return (
    <SList>
      { content && <Text>{ content }</Text> }
      { items.map(({ name, value }, index) => (
        <SListItem
          key={`list-item-${index}`}
          isSelected={index === selectedIndex}
        >
          <span>{ capitalize(name) }</span>
          <span>{ capitalize(value) }</span>
        </SListItem>
      ))}
    </SList>
  )
}
