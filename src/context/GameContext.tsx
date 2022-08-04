import React, { createContext, Dispatch, SetStateAction, useState } from 'react'

export interface GameContextType {
  selectedGame: string | null;
  setSelectedGame: Dispatch<SetStateAction<string | null>>;
}

export const GameContextDefaults = {
  selectedGame: null,
  setSelectedGame: () => {},
}

export const GameContext = createContext<GameContextType>(GameContextDefaults)

export const GameProvider = ({ children }: any) => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null)

  return (
    <GameContext.Provider
      value={{
        selectedGame,
        setSelectedGame
      }}
    >
      {children}
    </GameContext.Provider>
  )
}
