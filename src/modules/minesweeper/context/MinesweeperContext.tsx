import React, { createContext, useEffect, useState } from 'react'
import { IGameMode, IGrid, IPosition, ISettings } from '../types';
import { flag, reveal } from '../mutations';

interface MinesweeperContextType {
  settings: ISettings;
  grid: IGrid | null;
  remainingBlocks: number | null;
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
  remainingBlocks: null,
  currentTime: 0
})

export const MinesweeperProvider = ({ children }: any) => {
  const [settings, setSettings] = useState({ mode: GAME_MODES.intermediate })
  const [grid, setGrid] = useState<IGrid | null>(null)
  const [gameActive, setGameActive] = useState(false)
  const [gameResult, setGameResult] = useState<{ won: boolean } | null>(null)
  const [remainingBlocks, setRemainingBlocks] = useState<number | null>(null)
  const [startTime, setStartTime] = useState<number | null>(null)
  const [endTime, setEndTime] = useState<number | null>(null)

  useEffect(() => {
    if (grid) {
      const newRemainingBlocks = Object.values(grid).filter((position: IPosition) => {
        return position.block && !position.mine
      }).length

      setRemainingBlocks(newRemainingBlocks)

      if (!newRemainingBlocks) {
        setGameResult({ won: true })
      }
    }
  }, [grid])

  useEffect(() => {
    if (gameActive) {
      setStartTime(Date.now())
    } else {
      setStartTime(null)
    }
  }, [gameActive])

  useEffect(() => {
    if (gameResult) {
      setEndTime(Date.now())
    } else {
      setEndTime(null)
    }
  }, [gameResult])

  const onClick = (e: React.MouseEvent, block: IPosition) => {
    if (!grid) return

    if (!gameActive) {
      setGameActive(true)
    }

    const [newGrid, gameOver] = e.shiftKey ? flag(grid, block) : block.flag ? flag(grid, block) : reveal(grid, block)
    setGrid(newGrid)

    if (gameOver) {
      setGameResult({ won: false })
    }
  }

  return (
    <MinesweeperContext.Provider
      value={{
        settings,
        setSettings,
        grid,
        setGrid,
        gameResult,
        setGameResult,
        remainingBlocks,
        setRemainingBlocks,
        startTime,
        setStartTime,
        endTime,
        setEndTime,
        setGameActive,
        onClick
      }}
    >
      {children}
    </MinesweeperContext.Provider>
  )
}
