import { useContext } from "react"
import useMousetrap from "react-hook-mousetrap"
import { TetrisContext } from "../modules/tetris/TetrisContext"

export function useKeyboardBindings() {
  const {
    gameOver,
    gamePaused,
    setGamePaused,
    onMoveX,
    onDrop,
    onRotate
  } = useContext(TetrisContext)

  useMousetrap('left', () => (!gameOver && !gamePaused) && onMoveX('left'))
  useMousetrap('right', () => (!gameOver && !gamePaused) && onMoveX('right'))
  useMousetrap('space', () => (!gameOver && !gamePaused) && onDrop())
  useMousetrap('shift', () => (!gameOver && !gamePaused) && onRotate())
  useMousetrap('escape', () => !gameOver && setGamePaused(!gamePaused))
}
