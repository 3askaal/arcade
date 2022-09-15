import React, { createContext, Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import ReactGA4 from 'react-ga4'
import { MapDimensions } from '../modules';
import { MinesweeperProvider } from '../modules/minesweeper/context/MinesweeperContext';
import { SnakeProvider } from '../modules/snake/context/SnakeContext';
import { TetrisProvider } from '../modules/tetris/context/TetrisContext';

export interface Controls {
  onUp?: Function;
  onDown?: Function;
  onLeft?: Function;
  onRight?: Function;
  onA?: Function;
  onB?: Function;
  onSelect?: Function;
  onStart?: Function;
}

export interface TetrisScore {
  level: number;
  points: number;
  rows: number;
}

export interface SnakeScore {
  length: number;
}
export interface MinesweeperScore {
  remaining: number;
}

type Score = TetrisScore | SnakeScore | MinesweeperScore | {};
export interface GameContextType {
  selectedGame: string | null;
  setSelectedGame: Dispatch<SetStateAction<string | null>>;
  controls: Controls;
  setControls: (controls: Controls) => void;
  [key: string]: any;
}

export const GameContextDefaults = {
  selectedGame: null,
  setSelectedGame: () => {},
  controls: {},
  setControls: () => {},
}

const PROVIDERS: any = {
  tetris: TetrisProvider,
  snake: SnakeProvider,
  minesweeper: MinesweeperProvider,
}

export const GameContext = createContext<GameContextType>(GameContextDefaults)

export const GameProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<string>('light')
  const [selectedGame, setSelectedGame] = useState<string | null>(null)
  const [menuActive, setMenuActive] = useState<boolean | null>(null)
  const [gameActive, setGameActive] = useState(false)
  const [gameOver, setGameOver] = useState<{ won: boolean } | null>(null)
  const [score, setScore] = useState<Score>({})
  const [startTime, setStartTime] = useState<number | null>(null)
  const [endTime, setEndTime] = useState<number | null>(null)
  const [controls, setControlsState] = useState<Controls>({})

  const SelectedProvider = selectedGame && PROVIDERS[selectedGame]
  const dimensions = selectedGame && MapDimensions[selectedGame]

  const launch = () => {
    setGameOver(null)
    setGameActive(true)

    ReactGA4.event({
      category: "actions",
      action: "game:start",
      label: selectedGame || ''
    });
  }

  const setControls = (newControls: Controls) => {
    setControlsState({
      ...controls,
      ...newControls
    })
  }

  const onStart = () => {
    setMenuActive(!menuActive)
    setGameActive(!gameActive)
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
        launch,
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
