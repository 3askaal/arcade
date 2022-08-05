import React, { createContext, Dispatch, Provider, SetStateAction, useState } from 'react'
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
  const [selectedGame, setSelectedGame] = useState<string | null>('tetris')
  const [gameActive, setGameActive] = useState(false)
  const [gameOver, setGameOver] = useState<{ won: boolean } | null>(null)
  const [score, setScore] = useState<any>({ level: 1, points: 0, rows: 0 })

  const SelectedProvider = selectedGame && PROVIDERS[selectedGame]

  const start = () => {
    setGameOver(null)
    setGameActive(true)
  }

  // const startTetris = (initialShape = generateShape(dimensions)) => {
  //   gameHasStarted.current = true;
  //   setGameOver(false)
  //   setScore({ level: 1, points: 0, rows: 0 })
  //   setBlocks([])
  //   setShape(initialShape)

  //   ReactGA4.event({
  //     category: "actions",
  //     action: "game:start",
  //   });
  // }

  // const startBomberman = (args?: any) => {
  //   console.log('onStartGame')
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

  // const startMinesweeper = () => {
  //   setGrid(generateGrid(settings))
  //   setGameResult(null)
  //   setGameActive(false)
  //   setStartTime(null)
  //   setEndTime(null)
  // }

  // const startSnake = () => {
  //   const snake = generateSnake(settings.mode)
  //   setSnake(snake)
  //   snakeRef.current = snake
  //   spawnFood()
  //   setGameOver(null)
  //   setCurrentTime(0)
  // }

  return (
    <GameContext.Provider
      value={{
        selectedGame,
        setSelectedGame,
        start,
        gameActive,
        setGameActive,
        gameOver,
        setGameOver
      }}
    >
      <SelectedProvider>
        {children}
      </SelectedProvider>
    </GameContext.Provider>
  )
}
