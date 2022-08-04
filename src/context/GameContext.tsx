import React, { createContext, Dispatch, Provider, SetStateAction, useState } from 'react'
import { BombermanProvider } from '../modules/bomberman/BombermanContext';
import { MinesweeperProvider } from '../modules/minesweeper/MinesweeperContext';
import { SnakeProvider } from '../modules/snake/SnakeContext';
import { TetrisProvider } from '../modules/tetris/TetrisContext';

export interface GameContextType {
  selectedGame: string | null;
  setSelectedGame: Dispatch<SetStateAction<string | null>>;
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
  const [selectedGame, setSelectedGame] = useState<string | null>(null)

  const SelectedProvider = selectedGame && PROVIDERS[selectedGame]

  return (
    <GameContext.Provider
      value={{
        selectedGame,
        setSelectedGame,
      }}
    >
      <SelectedProvider>
        {children}
      </SelectedProvider>
    </GameContext.Provider>
  )
}
