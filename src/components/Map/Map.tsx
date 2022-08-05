import React, { useContext, useEffect, useRef, useState } from 'react'
import { SMap } from './Map.styled'
import { min } from 'lodash'
import { MapContent, MapDimensions } from '../../modules'
import { GameContext } from '../../context'

export const Map = () => {
  const mapRef = useRef<any>(null)
  const [blockSize, setBlockSize] = useState(0)
  const [mapDimensions, setMapDimensions] = useState<{ width?: string, height?: string }>({})
  const { selectedGame } = useContext(GameContext)

  const SelectedMapContent = selectedGame && MapContent[selectedGame]
  const dimensions = selectedGame && MapDimensions[selectedGame]

  useEffect(() => {
    if (!mapRef.current || !dimensions?.width || !dimensions?.height) return

    const maxMapWidth = mapRef.current.getBoundingClientRect().width * 0.98
    const maxMapHeight = mapRef.current.getBoundingClientRect().height * 0.98

    const evenMapWidth = maxMapWidth - (maxMapWidth % 2)
    const evenMapheight = maxMapHeight - (maxMapHeight % 2)

    const blockSizeX = Math.floor(evenMapWidth / dimensions.width)
    const blockSizeY = Math.floor(evenMapheight / dimensions.height)
    const newBlockSize = min([blockSizeX, blockSizeY]) as number

    setMapDimensions({
      width: newBlockSize * dimensions.width + 'px',
      height: newBlockSize * dimensions.height + 'px',
    })

    setBlockSize(newBlockSize)
  }, [mapRef, dimensions?.width, dimensions?.height])

  return (
    <div ref={mapRef} style={{ width: mapDimensions.width || '100%', height: mapDimensions.height || '100%' }}>
      <SMap s={{ width: mapDimensions.width || '100%', height: mapDimensions.height || '100%' }} >
        <SelectedMapContent blockSize={blockSize} />
      </SMap>
    </div>
  )
}
