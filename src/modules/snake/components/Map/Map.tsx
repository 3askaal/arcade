import React, { useContext } from 'react'
import { Box } from '3oilerplate'
import { SMap, SMapSnake, SMapFood } from './Map.styled'
import { SnakeContext } from '../../SnakeContext'

export const Map = () => {
  const { gameOver, settings, snake, food } = useContext(SnakeContext)

  const blockSizeX = 100 / settings.mode.width
  const blockSizeY = 100 / settings.mode.height

  return (
    <SMap mode={settings.mode} gameOver={!!gameOver}>
      { snake.map((position: any, index: number) => (
        <Box
          s={{
            display: 'flex',
            position: 'absolute',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            width: `${blockSizeX}%`,
            height: `${blockSizeY}%`,
            top: `${blockSizeY * position.y}%`,
            left: `${blockSizeY * position.x}%`,
          }}
        >
          <SMapSnake
            key={`block-${index}`}
            block={position.block}
          />
        </Box>
      )) }
      { food ? (
        <Box
          s={{
            display: 'flex',
            position: 'absolute',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            width: `${blockSizeX}%`,
            height: `${blockSizeY}%`,
            top: `${blockSizeY * food.y}%`,
            left: `${blockSizeY * food.x}%`,
          }}
        >
          <SMapFood />
        </Box>
      ) : null }
    </SMap>
  )
}
