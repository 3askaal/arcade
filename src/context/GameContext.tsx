import React, { createContext, Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react'
import ReactGA4 from 'react-ga4'
import { useLocalstorageState } from 'rooks';
import { MapDimensions } from '../modules';
import { BombermanProvider } from '../modules/bomberman/context/BombermanContext';
import { MinesweeperProvider } from '../modules/minesweeper/context/MinesweeperContext';
import { SnakeProvider } from '../modules/snake/context/SnakeContext';
import { TetrisProvider } from '../modules/tetris/context/TetrisContext';

export interface GameContextType {
  selectedGame: string | null;
  setSelectedGame: Dispatch<SetStateAction<string | null>>;
  [key: string]: any; // TODO: make typesafe
}

export const GameContextDefaults = {
  selectedGame: null,
  setSelectedGame: () => {},
}

const PROVIDERS: any = {
  bomberman: BombermanProvider,
  tetris: TetrisProvider,
  snake: SnakeProvider,
  minesweeper: MinesweeperProvider,
}

export const GameContext = createContext<GameContextType>(GameContextDefaults)

export const GameProvider: FC = ({ children }) => {
  const [theme, setTheme] = useLocalstorageState<string>('theme', 'dark')
  const [selectedGame, setSelectedGame] = useState<string | null>(null)
  const [menuActive, setMenuActive] = useState<boolean | null>(null)
  const [gameActive, setGameActive] = useState(false)
  const [gameOver, setGameOver] = useState<{ won: boolean } | null>(null)
  const [score, setScore] = useState<any>({})
  const [startTime, setStartTime] = useState<number | null>(null)
  const [endTime, setEndTime] = useState<number | null>(null)
  const [controls, setControlsState] = useState<any>({})

  const SelectedProvider = selectedGame && PROVIDERS[selectedGame]
  const dimensions = selectedGame && MapDimensions[selectedGame]

  const start = () => {
    setGameOver(null)
    setGameActive(true)

    ReactGA4.event({
      category: "actions",
      action: "game:start",
      label: selectedGame || ''
    });
  }

  const setControls = (newControls: any) => {
    setControlsState({
      ...controls,
      ...newControls
    })
  }

  const onStart = () => {
    setMenuActive(!menuActive)
  }

  useEffect(() => {
    if (gameOver) {
      ReactGA4.event({
        category: "actions",
        action: "game:over",
        label: selectedGame || ''
      });
    }
  }, [gameOver])

  return (
    <GameContext.Provider
      value={{
        selectedGame,
        setSelectedGame,
        dimensions,
        start,
        gameActive,
        setGameActive,
        gameOver,
        setGameOver,
        score,
        setScore,
        startTime,
        setStartTime,
        endTime,
        setEndTime,
        theme,
        setTheme,
        onStart,
        menuActive,
        controls,
        setControls
      }}
    >
      { selectedGame ? (
        <SelectedProvider>
          { children }
        </SelectedProvider>
      ) : children }
    </GameContext.Provider>
  )
}
