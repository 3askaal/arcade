import { times, sampleSize, random } from 'lodash'
import { IGrid, ISettings } from './types'

export const generateEasterEgg = ({ mode }: ISettings) => {
  let newGrid: IGrid = {}
  const positionAmount = (mode.width * mode.height)

  const mines = [ { x: 5, y: 4, }, { x: 6, y: 4, }, { x: 9, y: 4, }, { x: 10, y: 4, }, { x: 4, y: 5, }, { x: 7, y: 5, }, { x: 8, y: 5, }, { x: 11, y: 5, }, { x: 3, y: 6, }, { x: 12, y: 6, }, { x: 3, y: 7, }, { x: 12, y: 7, }, { x: 3, y: 8, }, { x: 12, y: 8, }, { x: 4, y: 9, }, { x: 11, y: 9, }, { x: 5, y: 10, }, { x: 10, y: 10, }, { x: 6, y: 11, }, { x: 9, y: 11, }, { x: 7, y: 12, }, { x: 8, y: 12, } ]

  times(positionAmount, (i) => {
    const y = (i - (i % mode.width)) / mode.height
    const x = i % (mode.width)
    const isMine = !!mines.find(({ x: mineX, y: mineY }) =>  x === mineX && y === mineY)

    newGrid[`${x}/${y}`] = { x, y, block: true, mine: isMine, selected: x === Math.floor(mode.width / 2) - 1 && y === Math.floor(mode.height / 2) - 1 }
  })

  newGrid = generateThreads(newGrid)

  return newGrid
}

export const generateGrid = ({ mode }: ISettings) => {
  let newGrid: IGrid = {}
  const positionAmount = (mode.width * mode.height)

  if (random(1, 100) === 69) {
    return generateEasterEgg({ mode })
  }

  times(positionAmount, (i) => {
    const y = (i - (i % mode.width)) / mode.height
    const x = i % (mode.width)

    newGrid[`${x}/${y}`] = { x, y, block: true, selected: x === Math.floor(mode.width / 2) - 1 && y === Math.floor(mode.height / 2) - 1 }
  })

  newGrid = generateMines(newGrid, mode.mines)
  newGrid = generateThreads(newGrid)

  return newGrid
}

export const generateMines = (grid: IGrid, mines: number) => {
  let newGrid = { ...grid }

  const positions = Object.values(grid)

  const minePositions = sampleSize(positions, mines)

  minePositions.forEach(({x, y}) => {
    newGrid = { ...newGrid, [`${x}/${y}`]: { ...newGrid[`${x}/${y}`], mine: true }}
  })

  return newGrid
}

export const generateThreads = (grid: IGrid) => {
  let newGrid = { ...grid }

  const positions = Object.values(grid)

  positions.forEach((position) => {
    const { x: rootX , y: rootY } = position

    const amountMinesSurrounding = Object.values(newGrid)
      .map(({ x, y, ...rest }) => ({ ...rest, x: Math.abs(rootX - x), y: Math.abs(rootY - y)}))
      .filter(({ mine, x, y }) => mine && x < 2 && y < 2)
      .length

    const item = newGrid[`${rootX}/${rootY}`]

    if (amountMinesSurrounding && !item.mine) {
      newGrid = { ...newGrid, [`${rootX}/${rootY}`]: { ...newGrid[`${rootX}/${rootY}`], thread: true, amount: amountMinesSurrounding  }}
    }
  })

  return newGrid
}
