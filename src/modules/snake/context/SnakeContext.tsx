import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { last, random } from 'lodash';
import { IGrid } from '../types';
import { useIntervalWhen } from 'rooks';
import { generateSnake } from '../generate';
import { GameContext } from '../../../context';

interface IPosition {
  x?: number;
  y?: number;
}

interface SnakeContextType {
  grid: IGrid | null;
  snake: IPosition[];
  [key: string]: any;
}

export const SnakeContext = createContext<SnakeContextType>({
  grid: null,
  snake: [],
  controls: {}
})

export const SnakeProvider = ({ children }: any) => {
  const { gameOver, setGameOver, gameActive, dimensions, score, setScore } = useContext(GameContext)

  const [grid, setGrid] = useState<IGrid | null>(null)

  const [snake, setSnakeState] = useState<IPosition[]>([])
  const snakeRef = useRef<IPosition[]>([])

  const [food, setFood] = useState<IPosition>({})
  const [direction, setDirection] = useState('down')
  const directionRef = useRef('down')

  const reset = () => {
    setSnake(generateSnake(dimensions))
    spawnFood()
    changeDirection('down')
    setScore({ length: 5 })
  }

  const setSnake = (snake: IPosition[]) => {
    setSnakeState(snake)
    snakeRef.current = snake
  }

  const moveForward = () => {
    if (!snakeRef?.current) {
      return
    }

    const headPosition = last(snakeRef?.current || [])

    const getNextPosition: any = {
      up: ({ y, ...rest }: any) => ({ ...rest, y: y - 1 }),
      down: ({ y, ...rest }: any) => ({ ...rest, y: y + 1 }),
      left: ({ x, ...rest }: any) => ({ ...rest, x: x - 1 }),
      right: ({ x, ...rest }: any) => ({ ...rest, x: x + 1 }),
    }

    const nextPosition = getNextPosition[directionRef.current](headPosition)
    const isCorner = posHitsCorner(nextPosition)
    const isTail = posHitsSnake(nextPosition)
    const isFood = posHitsFood(nextPosition)

    if (isCorner || isTail) {
      setGameOver({ won: false })
    }

    if (isFood) {
      spawnFood()
      setScore({ ...score, length: score.length + 1 })
    }

    if (!isCorner && !isTail) {
      const newSnake = [ ...snake.slice(isFood ? 0 : 1), nextPosition ]
      setSnake(newSnake)
    }
  }

  function changeDirection (newDirection: string) {
    const isOpposite = (direction === 'left' && newDirection === 'right') ||
      (direction === 'right' && newDirection === 'left') ||
      (direction === 'up' && newDirection === 'down') ||
      (direction === 'down' && newDirection === 'up')

    if (isOpposite) {
      return
    }

    setDirection(newDirection)
    directionRef.current = newDirection
  }

  const spawnFood = () => {
    let newFood = null

    while (!newFood) {
      const newFoodPos = {
        x: random(0, dimensions.width - 1),
        y: random(0, dimensions.height - 1)
      }

      if (!posHitsSnake(newFoodPos)) {
        newFood = newFoodPos
      }
    }

    setFood(newFood)
  }

  const posHitsCorner = ({ x, y }: any) => {
    const hitsCorner = y < 0 ||
      y >= dimensions.height ||
      x < 0 ||
      x >= dimensions.width

    return hitsCorner
  }

  const posHitsFood = ({ x, y }: any) => {
    return x === food.x && y === food.y
  }

  const posHitsSnake = (pos: any) => {
    return !!snake.find(({ x, y }) => pos.x === x && pos.y === y)
  }

  useIntervalWhen(() => {
    moveForward()
  }, 100, gameActive && !gameOver)

  useEffect(() => {
    if (!gameOver) {
      reset()
    }
  }, [gameOver])

  const controls: any = {
    onUp: () => changeDirection('up'),
    onDown: () => changeDirection('down'),
    onLeft: () => changeDirection('left'),
    onRight: () => changeDirection('right'),
  }

  return (
    <SnakeContext.Provider
      value={{
        grid,
        setGrid,
        snake,
        food,
        changeDirection,
        controls
      }}
    >
      {children}
    </SnakeContext.Provider>
  )
}
