import { groupBy, includes, sum } from "lodash";
import { Dimensions, Score } from "../../modules/tetris/context/TetrisContext";
import { Block, generateShape, Shape } from "./generate";

export const checkShapePosition = (nextShape: Shape, currentBlocks: Block[], dimensions: Dimensions) => {
  const hitsBlock = currentBlocks.some((block: Block) =>
    nextShape.blocks.some((nextBlock) =>
      (nextShape.x + nextBlock.x) === block.x && (nextShape.y + nextBlock.y) === block.y
    )
  );

  const hitsBottom = (nextShape.y + nextShape.height) >= dimensions.height + 1;
  const hitsSide = (nextShape.x < 0) || (nextShape.x + nextShape.width > dimensions.width);

  return hitsBlock || hitsBottom || hitsSide
}

export const moveX = (currentShape: Shape, currentBlocks: Block[], dimensions: Dimensions, direction: 'left' | 'right') => {
  const movements =  {
    left: -1,
    right: 1
  }

  const nextShape = {
    ...currentShape,
    x: currentShape?.x + movements[direction]
  }

  const isHit = checkShapePosition(nextShape, currentBlocks, dimensions)

  if (isHit) {
    return
  }

  return nextShape
}

export const moveY = async (
  currentShape: Shape,
  currentBlocks: Block[],
  dimensions: Dimensions,
  shouldUpdateState: boolean = true
): Promise<[Shape | null, Block[] | null, boolean | null]> => {
  let newShape = null
  let newBlocks = null
  let newGameOver = null

  const nextShape: Shape = { ...currentShape, y: currentShape.y + 1 }
  const isHit = checkShapePosition(nextShape, currentBlocks, dimensions)
  const isGameOver = isHit && currentShape.y === 2

  if (isHit) {
    newBlocks = [
      ...currentBlocks,
      ...currentShape.blocks.map((currentBlock: any) => ({
        ...currentBlock,
        x: currentShape.x + currentBlock.x,
        y: currentShape.y + currentBlock.y,
        color: currentShape.color
      })),
    ]

    newShape = generateShape(dimensions)
  } else {
    if (shouldUpdateState) {
      newShape = nextShape
    } else {
      currentShape = nextShape
    }
  }

  if (isGameOver) {
    newShape = null
    newGameOver = true
  }

  return [newShape, newBlocks, newGameOver]
}

export const rotate = (currentShape: Shape, currentBlocks: Block[], dimensions: Dimensions) => {
  const rotatedShape = {
    ...currentShape,
    width: currentShape.height,
    height: currentShape.width,
  }

  rotatedShape.blocks = currentShape.blocks.map((block: Block) => ({
    x: (rotatedShape.width - 1) - block.y,
    y: block.x
  }))

  if (rotatedShape.width > currentShape.width) {
    if (rotatedShape.x + rotatedShape.width > dimensions.width) {
      rotatedShape.x -= (rotatedShape.width - currentShape.width)
    }
  }

  const isHit = checkShapePosition(rotatedShape, currentBlocks, dimensions)

  if (isHit) {
    return
  }

  return rotatedShape
}

const getFullRows = (currentBlocks: Block[], dimensions: Dimensions): number[] => {
  const inactiveRows = groupBy(currentBlocks, 'y')

  const fullRows = Object.entries(inactiveRows)
    .filter(([index, inactiveRow]) => inactiveRow.length > dimensions.width - 1 && index)
    .map(([index]) => Number(index))

  return fullRows
}

export const checkBlocks = (
  currentBlocks: Block[],
  score: Score,
  dimensions: Dimensions
): [Score | null, Block[] | null, Block[] | null] | null => {
  let newScore = null
  let deadBlocks = null
  let newBlocks = null

  const fullRows = getFullRows(currentBlocks, dimensions)

  if (!fullRows.length) {
    return null
  }

  const pointsForAmountRows = [40, 100, 300, 1200]
  const amountRowsIndex = fullRows.length - 1
  const newRows = score.rows + fullRows.length
  const newLevel = Math.floor(newRows / 10) + 1
  const newPoints = score.points + (pointsForAmountRows[amountRowsIndex] * score.level)

  newScore = {
    level: newLevel,
    points: newPoints,
    rows: newRows,
  }

  deadBlocks = currentBlocks
    .map((currentBlock: Block) => ({
      ...currentBlock,
      dead: includes(fullRows, currentBlock.y)
    }))

  newBlocks = deadBlocks
    .filter(({ dead }: Block) => !dead)
    .map((block: Block) => ({
      ...block,
      y: block.y + sum(
        fullRows.map((rowY) => block.y < rowY ? 1 : 0)
      )
    }))

  return [
    newScore,
    deadBlocks,
    newBlocks
  ]
}
