import { Box } from '3oilerplate'
import { useContext } from 'react'
import { GameContext } from '../../../context'
import { SnakeContext } from '../context/SnakeContext'
import { useSnakeKeyboard } from '../keyboard'
import { SMapFood, SMapSnake } from './MapContent.styled'

export const SnakeMapContent = ({ blockSize }: any) => {
  const { dimensions } = useContext(GameContext)
  const { snake, food } = useContext(SnakeContext)

  const blockSizeX = 100 / dimensions.width
  const blockSizeY = 100 / dimensions.height

  useSnakeKeyboard()

  return (
    <>
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
            left: `${blockSizeX * position.x}%`,
          }}
          key={`block-${index}`}
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
            left: `${blockSizeX * food.x}%`,
          }}
        >
          <SMapFood />
        </Box>
      ) : null }
    </>
  )
}
