import React, { createContext, useContext, useEffect, useState } from 'react'
import { IGameMode, IGrid, IPosition, ISettings } from '../types';
import { flag, reveal } from '../mutations';
import { generateGrid } from '../generate';
import { GameContext } from '../../../context';

interface MinesweeperContextType {
  settings: ISettings;
  grid: IGrid | null;
  [key: string]: any;
}

export const GAME_MODES: {[key: string]: IGameMode} = {
  beginner: { width: 9, height: 9, mines: 10 },
  intermediate: { width: 16, height: 16, mines: 40 },
  expert: { width: 30, height: 16, mines: 99 },
}

export const MinesweeperContext = createContext<MinesweeperContextType>({
  settings: {
    mode: GAME_MODES.intermediate
  },
  grid: null,
  currentTime: 0
})

export const MinesweeperProvider = ({ children }: any) => {
  const { gameActive, setGameActive, gameOver, setGameOver, setStartTime, setEndTime, score, setScore } = useContext(GameContext)
  const [selectedBlock, setSelectedBlock] = useState({ x: 0, y: 0 });

  const [settings, setSettings] = useState({ mode: GAME_MODES.intermediate })
  const [grid, setGrid] = useState<IGrid | null>(null)

  const reset = () => {
    setGrid(generateGrid(settings))
    setScore({ remaining: 0 })
  }

  useEffect(() => {
    if (grid) {
      const newRemainingBlocks = Object.values(grid).filter((position: IPosition) => {
        return position.block && !position.mine
      }).length

      setScore({ remaining: newRemainingBlocks })

      if (!newRemainingBlocks) {
        setGameOver({ won: true })
      }
    }
  }, [grid, setGameOver])

  useEffect(() => {
    if (gameActive) {
      setStartTime(Date.now())
    } else {
      setStartTime(null)
    }
  }, [gameActive])

  useEffect(() => {
    if (gameOver) {
      setEndTime(Date.now())
    } else {
      setEndTime(null)
      reset()
    }
  }, [gameOver])

  const onClick = (type: string) => {
    if (!grid) return

    const block: any = Object.values(grid).find(({ x, y }) => x === selectedBlock.x && y === selectedBlock.y)

    if (!block) return

    if (!gameActive) {
      setGameActive(true)
    }

    const actions: any = {
      reveal,
      flag
    }

    const [newGrid, gameOver] = actions[type](grid, block)
    setGrid(newGrid)

    if (gameOver) {
      setGameOver({ won: false })
    }
  }

  const changePosition = ({ x, y }: { x: number, y: number }) => {
    if (!grid) return

    const currentBlockRef = `${selectedBlock.x}/${selectedBlock.y}`
    const currentBlock = grid[`${selectedBlock.x}/${selectedBlock.y}`]

    setSelectedBlock({ x, y })

    const nextBlockRef = `${x}/${y}`
    const nextBlock = grid[nextBlockRef]

    const newGrid = {
      ...grid,
      [nextBlockRef]: { ...nextBlock, selected: true },
      [currentBlockRef]: { ...currentBlock, selected: false }
    };

    setGrid(newGrid)
  }

  const controls = {
    onUp: () => changePosition({ ...selectedBlock, y: selectedBlock.y - 1 }),
    onDown: () => changePosition({ ...selectedBlock, y: selectedBlock.y + 1 }),
    onLeft: () => changePosition({ ...selectedBlock, x: selectedBlock.x - 1 }),
    onRight: () => changePosition({ ...selectedBlock, x: selectedBlock.x + 1 }),
    onB: () => onClick('flag'),
    onA: () => onClick('reveal'),
  }

  return (
    <MinesweeperContext.Provider
      value={{
        settings,
        setSettings,
        grid,
        setGrid,
        onClick,
        controls
      }}
    >
      {children}
    </MinesweeperContext.Provider>
  )
}
