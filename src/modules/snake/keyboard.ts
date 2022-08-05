import React, { useContext } from "react"
import useMousetrap from "react-hook-mousetrap"
import { SnakeContext } from "../../modules/snake/context/SnakeContext"

export function useSnakeKeyboard() {
  const { changeDirection, onStartGame } = useContext(SnakeContext)

  useMousetrap('space', () => onStartGame())
  useMousetrap('up', () => changeDirection('up'))
  useMousetrap('down', () => changeDirection('down'))
  useMousetrap('left', () => changeDirection('left'))
  useMousetrap('right', () => changeDirection('right'))
}
