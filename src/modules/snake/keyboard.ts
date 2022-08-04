import React, { useContext } from "react"
import useMousetrap from "react-hook-mousetrap"
import { GameContext } from "../context"

export function useKeyboardBindings() {
  const { changeDirection, onStartGame } = useContext(GameContext)

  useMousetrap('space', () => onStartGame())
  useMousetrap('up', () => changeDirection('up'))
  useMousetrap('down', () => changeDirection('down'))
  useMousetrap('left', () => changeDirection('left'))
  useMousetrap('right', () => changeDirection('right'))
}
