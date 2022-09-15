import { times } from 'lodash'
import { IDimensions } from '../../context'
import { IGrid } from './types'

const width = 64
const height = 64

export const generateGrid = () => {
  let newGrid: IGrid = {}
  const positionAmount = (width * height)

  times(positionAmount, (i) => {
    const y = (i - (i % width)) / height
    const x = i % (width)

    newGrid[`${x}/${y}`] = { x, y, block: true }
  })

  // newGrid = generateSnake(newGrid)

  return newGrid
}

export const generateSnake = (dimensions: IDimensions) => {
  let x = dimensions.width / 2
  let y = (dimensions.height / 2) - 8

  return times(5, (i) => {
    return { x, y: y + i }
  })
}
