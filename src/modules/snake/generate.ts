import { times } from 'lodash'

const width = 64
const height = 64

export const generateGrid = () => {
  let newGrid: any = {}
  const positionAmount = (width * height)

  times(positionAmount, (i) => {
    const y = (i - (i % width)) / height
    const x = i % (width)

    newGrid[`${x}/${y}`] = { x, y, block: true }
  })

  // newGrid = generateSnake(newGrid)

  return newGrid
}

export const generateSnake = (mode: any) => {
  let x = mode.width / 2
  let y = (mode.height / 2) - 8

  return times(5, (i) => {
    return { x, y: y + i }
  })
}
