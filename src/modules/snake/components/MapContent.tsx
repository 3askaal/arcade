import { Box } from '3oilerplate'
import { useContext } from 'react'
import { SnakeContext } from '../context/SnakeContext'
import { SMapFood, SMapSnake } from './MapContent.styled'

export const SnakeMapContent = ({ blockSize }: any) => {
  const { snake, food } = useContext(SnakeContext)

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
            width: `${blockSize}%`,
            height: `${blockSize}%`,
            top: `${blockSize * position.y}%`,
            left: `${blockSize * position.x}%`,
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
            width: `${blockSize}%`,
            height: `${blockSize}%`,
            top: `${blockSize * food.y}%`,
            left: `${blockSize * food.x}%`,
          }}
        >
          <SMapFood />
        </Box>
      ) : null }
    </>
  )
}
