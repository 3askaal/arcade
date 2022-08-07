import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react'
import ReactGA4 from 'react-ga4'
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

export const GameProvider = ({ children }: any) => {
  const [selectedGame, setSelectedGame] = useState<string | null>('minesweeper')
  const [gameActive, setGameActive] = useState(false)
  const [gameOver, setGameOver] = useState<{ won: boolean } | null>(null)
  const [score, setScore] = useState<any>({})
  const [startTime, setStartTime] = useState<number | null>(null)
  const [endTime, setEndTime] = useState<number | null>(null)

  const SelectedProvider = selectedGame && PROVIDERS[selectedGame]
  const dimensions = selectedGame && MapDimensions[selectedGame]

  const start = () => {
    setGameOver(null)
    setGameActive(true)

    ReactGA4.event({
      category: "actions",
      action: "game:start",
    });
  }

  // const startBomberman = (args?: any) => {
  //   const { grid: newGrid, players: newPlayers, time: remainingTime, roomId } = args || {}
  //   setGrid(newGrid || generateGrid(blocks))
  //   setPlayers((currentPlayers) => newPlayers || generatePlayers(currentPlayers, blocks))
  //   setRemainingTime(remainingTime || 3 * 60 * 1000)

  //   history.push(`/play/${roomId || 'local'}`);

  //   ReactGA4.event({
  //     category: "actions",
  //     action: "game:start",
  //     label: players.map(({ name }: any) => name).join(' vs. '),
  //   });
  // }

  useEffect(() => {
    if (gameOver) {
      ReactGA4.event({
        category: "actions",
        action: "game:over",
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
      }}
    >
      <SelectedProvider>
        {children}
      </SelectedProvider>
    </GameContext.Provider>
  )
}
