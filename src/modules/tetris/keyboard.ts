import { useContext } from "react"
import useMousetrap from "react-hook-mousetrap"
import { GameContext } from "../../context"
import { TetrisContext } from "./context/TetrisContext"

export function useTetrisKeyboard() {
  const { gameOver, gameActive, setGameActive } = useContext(GameContext)
  const { onMoveX, onDrop, onRotate } = useContext(TetrisContext)

  useMousetrap('left', () => (!gameOver && gameActive) && onMoveX('left'))
  useMousetrap('right', () => (!gameOver && gameActive) && onMoveX('right'))
  useMousetrap('space', () => (!gameOver && gameActive) && onDrop())
  useMousetrap('shift', () => (!gameOver && gameActive) && onRotate())
  useMousetrap('escape', () => !gameOver && setGameActive(!gameActive))
}
