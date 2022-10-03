import { last } from 'lodash';
import React, { createContext, Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import ReactGA4 from 'react-ga4'
import { useIntervalWhen } from 'rooks';
import { MapDimensions } from '../modules';
import { MinesweeperProvider } from '../modules/minesweeper/context/MinesweeperContext';
import { SnakeProvider } from '../modules/snake/context/SnakeContext';
import { TetrisProvider } from '../modules/tetris/context/TetrisContext';

export interface IControls {
  onUp?: Function;
  onDown?: Function;
  onLeft?: Function;
  onRight?: Function;
  onA?: Function;
  onB?: Function;
  onSelect?: Function;
  onStart?: Function;
}

export interface IDimensions {
  width: number;
  height: number;
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
  controls: IControls;
  setControls: (controls: IControls, comp?: string) => void;
  time: number[][];
  setTime: any;
  [key: string]: any;
}

export const GameContextDefaults = {
  selectedGame: null,
  setSelectedGame: () => {},
  controls: {},
  setControls: () => {},
  time: [],
  setTime: () => {},
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
  const [usingKeyboard, setUsingKeyboard] = useState<boolean | null>(null)
  const [score, setScore] = useState<Score>({})
  const [time, setTime] = useState<number[][]>([])

  const onStart = () => {
    setMenuActive(!menuActive)
    setGameActive(!gameActive)
  }

  const [controls, setControlsState] = useState<IControls>({
    onStart
  })

  const SelectedProvider = selectedGame && PROVIDERS[selectedGame]
  const dimensions = selectedGame && MapDimensions[selectedGame]

  const launch = () => {
    setGameOver(null)
    setGameActive(true)
    setScore({})

    ReactGA4.event({
      category: "actions",
      action: "game:start",
      label: selectedGame || ''
    });
  }

  const setControls = (newControls: IControls, comp?: string) => {
    setControlsState({
      ...controls,
      ...newControls
    })
  }

  const updateTime = (type: 'start' | 'end') => {
    if (type === 'start') {
      setTime([...time, [Date.now()]])
    }

    if (type === 'end') {
      const currentTime = last(time)
      if (!currentTime) return
      time.pop()
      setTime([ ...time, [currentTime[0], Date.now()] ])
    }
  }

  const isRunning = !gameOver && last(time)?.length === 1

  const milliseconds = (): number => {
    return time.reduce((acc, [startTime, endTime]) => {
      acc += (endTime || Date.now()) - startTime
      return acc;
    }, 0)
  }

  useEffect(() => {
    if (gameActive) {
      updateTime('start')
    } else {
      updateTime('end')
    }
  }, [gameActive])

  useEffect(() => {
    if (gameOver) {
      setTime([])
      setGameActive(false)

      ReactGA4.event({
        category: "actions",
        action: "game:over",
        label: selectedGame || ''
      });
    }
  }, [gameOver])

  useIntervalWhen(() => {
    setScore({
      ...score,
      time: time.length ? milliseconds() : 0
    })
  }, 1000, isRunning)

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
        theme,
        setTheme,
        onStart,
        menuActive,
        controls,
        setControls,
        usingKeyboard,
        setUsingKeyboard,
        time,
        setTime,
        milliseconds
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
