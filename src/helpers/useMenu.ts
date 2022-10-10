import { useContext, useEffect, useState } from "react";
import { GameContext } from "../context";

export interface MenuItemProps {
  name: string;
  action?: () => void;
  color?: string;
  disabled?: boolean;
  selected?: boolean;
  index?: number;
  hidden?: boolean;
}

export const useMenu = (items: MenuItemProps[] | null, updateValues: any[] = []): [number, (add: number) => void] => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { setControls } = useContext(GameContext)

  const getSelectedItem = (newIndex: number) => items?.length ? items.find(({ index }) => index === newIndex) || items[newIndex] : null;

  const changeIndex = (add: number) => {
    const newSelectedIndex = selectedIndex + add
    const item = getSelectedItem(newSelectedIndex);
    if (!item) return

    if (item.disabled) {
      changeIndex(add > 0 ? add + 1 : add - 1);
      return;
    }

    setSelectedIndex(newSelectedIndex);
  }

  useEffect(() => {
    const item = getSelectedItem(selectedIndex);
    if (!item) return

    setControls({
      onUp: () => changeIndex(-1),
      onDown: () => changeIndex(1),
      onA: () => item.action && item.action(),
    })
  }, [selectedIndex, ...updateValues]);

  return [selectedIndex, changeIndex]
}
