import React, { createContext, Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import ReactGA4 from 'react-ga4'
import { useInterval } from '../../helpers/interval';
import { Block, generateShape, Shape } from './generate';
import { checkBlocks, moveX, moveY, rotate } from './mutations';

export interface Dimensions {
  width: number;
  height: number;
}

export interface Score {
  level: number;
  points: number;
  rows: number;
}

export interface TetrisContextType {
  shape: Shape | null;
  setShape: any;
  blocks: Block[];
  setBlocks: Dispatch<SetStateAction<Block[]>>;
  dimensions: Dimensions;
  score: Score;
  gameOver: boolean;
  gamePaused: boolean;
  setGamePaused: Dispatch<SetStateAction<boolean>>;
  start(initialShape?: Shape): void;
  onMoveX(direction: string): void;
  onRotate(): void;
  onDrop(): void;
}

export const TetrisContextDefaults = {
  shape: generateShape({ height: 36, width: 20 }),
  setShape: () => {},
  blocks: [],
  setBlocks: () => {},
  dimensions: { height: 36, width: 20 },
  score: { level: 1, points: 0, rows: 0 },
  gameOver: false,
  gamePaused: false,
  setGamePaused: () => {},
  start: () => {},
  onMoveX: () => {},
  onRotate: () => {},
  onDrop: () => {},
}

export const TetrisContext = createContext<TetrisContextType>(TetrisContextDefaults)

export const TetrisProvider = ({ children }: any) => {
  const [shape, setShapeState] = useState<Shape | null>(generateShape({ height: 36, width: 20 }))
  const [blocks, setBlocksState] = useState<Block[]>([])
  const shapeRef = useRef<any>(null)
  const gameHasStarted = useRef(false)
  const blocksRef = useRef<any>([])
  const [dimensions] = useState({ height: 36, width: 20 })
  const [gameOver, setGameOver] = useState(false)
  const [gamePaused, setGamePaused] = useState(false)
  const [score, setScore] = useState<Score>({ level: 1, points: 0, rows: 0 })

  const start = (initialShape = generateShape(dimensions)) => {
    gameHasStarted.current = true;
    setGameOver(false)
    setScore({ level: 1, points: 0, rows: 0 })
    setBlocks([])
    setShape(initialShape)

    ReactGA4.event({
      category: "actions",
      action: "game:start",
    });
  }

  const setShape = (shape: Shape | null) => {
    shapeRef.current = shape
    setShapeState(shape)
  }

  const setBlocks = (blocks: any) => {
    blocksRef.current = blocks
    setBlocksState(blocks)
  }

  const onMoveX = (direction: 'left' | 'right') => {
    const nextShape = moveX(shapeRef.current, blocksRef.current, dimensions, direction);
    if (nextShape) setShape(nextShape)
  }

  const onMoveY = async (shouldUpdateState: boolean = true) => {
    if (!gameHasStarted.current) throw new Error('Game has not been started yet');
    if (!shapeRef.current) throw new Error('Could not find active shape');

    const [newShape, newBlocks, newGameOver] = await moveY(shapeRef.current, blocksRef.current, dimensions, shouldUpdateState)

    if (newBlocks) setBlocks(newBlocks)
    if (newShape) setShape(newShape)
    if (newGameOver) setGameOver(newGameOver)
  }

  const onDrop = async () => {
    const initialBlocksLength = blocksRef.current.length
    let isHit = false

    while (!isHit) {
      const [newShape, newBlocks, newGameOver] = await moveY(shapeRef.current, blocksRef.current, dimensions)
      isHit = (newBlocks?.length || 0) > initialBlocksLength

      if (isHit) {
        if (newBlocks) setBlocks(newBlocks)
        if (newShape) setShape(newShape)
        if (newGameOver) setGameOver(newGameOver)
      }
    }
  }

  const onRotate = () => {
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

  useEffect(() => {
    if (gameOver) {
      ReactGA4.event({
        category: "actions",
        action: "game:over",
      });
    }
  }, [gameOver])

  useInterval(() => {
    onMoveY()
  }, (!gameOver && !gamePaused) ? 200 : null)

  return (
    <TetrisContext.Provider
      value={{
        start,
        dimensions,
        gameOver,
        onMoveX,
        onDrop,
        onRotate,
        score,
        blocks,
        setBlocks,
        shape,
        setShape,
        gamePaused,
        setGamePaused
      }}
    >
      {children}
    </TetrisContext.Provider>
  )
}
