import React, { createContext, FC, useContext, useEffect, useRef, useState } from 'react'
import { useIntervalWhen } from 'rooks';
import { IControls, GameContext } from '../../../context';
import { Block, generateShape, Shape } from '../generate';
import { checkBlocks, moveX, moveY, rotate } from '../mutations';

export interface TetrisContextType {
  shape: Shape | null;
  blocks: Block[];
  onMoveX(direction: string): void;
  onRotate(): void;
  onDrop(): void;
  controls: IControls;
  [key: string]: any;
}

export const TetrisContextDefaults = {
  shape: null,
  setShape: () => {},
  blocks: [],
  setBlocks: () => {},
  onMoveX: () => {},
  onRotate: () => {},
  onDrop: () => {},
  controls: {},
}

export const TetrisContext = createContext<TetrisContextType>(TetrisContextDefaults)

export const TetrisProvider: FC = ({ children }) => {
  const { gameOver, setGameOver, gameActive, score, setScore, dimensions } = useContext(GameContext)
  const [shape, setShapeState] = useState<Shape | null>(null)
  const shapeRef = useRef<any>(null)
  const [blocks, setBlocksState] = useState<Block[]>([])
  const blocksRef = useRef<Block[]>([])

  const reset = () => {
    setShape(generateShape({ height: 36, width: 20 }))
    setBlocks([])
    setScore({ level: 1, points: 0, rows: 0 })
  }

  const setShape = (shape: Shape | null) => {
    shapeRef.current = shape
    setShapeState(shape)
  }

  const setBlocks = (blocks: Block[]) => {
    blocksRef.current = blocks
    setBlocksState(blocks)
  }

  const onMoveX = (direction: 'left' | 'right') => {
    if (!gameActive) throw new Error('Game has not been started yet');
    if (!shapeRef.current) throw new Error('Could not find active shape');

    const nextShape = moveX(shapeRef.current, blocksRef.current, dimensions, direction);
    if (nextShape) setShape(nextShape)
  }

  const onMoveY = async (shouldUpdateState: boolean = true) => {
    if (!gameActive) throw new Error('Game has not been started yet');
    if (!shapeRef.current) throw new Error('Could not find active shape');

    const [newShape, newBlocks, newGameOver] = await moveY(shapeRef.current, blocksRef.current, dimensions, shouldUpdateState)

    if (newBlocks) setBlocks(newBlocks)
    if (newShape) setShape(newShape)
    if (newGameOver) setGameOver(newGameOver)
  }

  const onDrop = async () => {
    if (!gameActive) throw new Error('Game has not been started yet');
    if (!shapeRef.current) throw new Error('Could not find active shape');

    const initialBlocksLength = Number(blocksRef.current.length)
    let isHit = false

    while (!isHit) {
      const [newShape, newBlocks, newGameOver] = await moveY(shapeRef.current, blocksRef.current, dimensions)

      isHit = !!newBlocks && newBlocks?.length > initialBlocksLength

      if (newBlocks) setBlocks(newBlocks)
      if (newGameOver) setGameOver(newGameOver)
      if (newShape && isHit) setShape(newShape)
      if (newShape && !isHit) shapeRef.current = newShape
    }
  }

  const onRotate = () => {
    if (!gameActive) throw new Error('Game has not been started yet');
    if (!shapeRef.current) throw new Error('Could not find active shape');

    const rotatedShape = rotate(shapeRef.current, blocksRef.current, dimensions)

    if (rotatedShape) setShape(rotatedShape)
  }

  useEffect(() => {
    const res = checkBlocks(blocksRef.current, score, dimensions)

    if (res) {
      const [newScore, deadBlocks, newBlocks] = res

      if (newScore) setScore(newScore)
      if (deadBlocks) setBlocks(deadBlocks)
      if (newBlocks) setTimeout(() => setBlocks(newBlocks), 500)
    }
  }, [blocks.length])

  useIntervalWhen(() => {
    onMoveY()

  }, 200, gameActive && !gameOver)

  useEffect(() => {
    if (!gameOver) {
      reset()
    }
  }, [gameOver])

  const controls = {
    onLeft: () => onMoveX('left'),
    onRight: () => onMoveX('right'),
    onB: () => onRotate(),
    onA: () => onDrop(),
  }

  return (
    <TetrisContext.Provider
      value={{
        shape,
        blocks,
        onMoveX,
        onDrop,
        onRotate,
        controls
      }}
    >
      {children}
    </TetrisContext.Provider>
  )
}
