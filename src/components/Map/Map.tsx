import React, { useContext } from 'react'
import { SMap } from './Map.styled'
import { MapContent } from '../../modules'
import { GameContext } from '../../context'

export const Map = () => {
  const { selectedGame, dimensions } = useContext(GameContext)
  const SelectedMapContent = selectedGame && MapContent[selectedGame]

  return (
    <SMap s={{
      aspectRatio: `${dimensions?.width} / ${dimensions?.height}`,
      flexGrow: 1,
      flexShrink: 1,
      // height: '100%',
      maxWidth: '100%',
      maxHeight: '100%',
    }}>
      { selectedGame && <SelectedMapContent /> }
    </SMap>
  )
}
