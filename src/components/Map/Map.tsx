import React, { useContext, useEffect, useState } from 'react'
import { Box } from '3oilerplate'
import { SMap, SMapBlock } from './Map.styled'
import { GameContext } from '../../context'
import { generateShape, Shape } from '../../helpers/generate'
import { useInterval } from '../../helpers/interval'
import useMousetrap from 'react-hook-mousetrap'

export const Map = ({ style } : any) => {
  const { dimensions, grid, bombs, explosions, players }: any = useContext(GameContext)
  const [shape, setShape] = useState<Shape | null>(null)
  const [shapes, setShapes] = useState<Shape[]>([])

  // const getBombs = () => {
  //   return bombs ? Object.values(bombs).filter(({ bomb }: any) => bomb) : []
  // }

  // const getExplosions = () => {
  //   return explosions ? Object.values(explosions).filter(({ explosion }: any) => explosion) : []
  // }

  const getStones = () => {
    return grid ? Object.values(grid).filter(({ stone }: any) => stone) : []
  }

  const getActiveShape = () => {
    return shapes.filter(({ active }) => active)[0]
  }

  const getShapes = () => {
    return shapes.filter(({ active }) => !active)
  }

  // const getBricks = () => {
  //   return grid ? Object.values(grid).filter(({ brick }: any) => brick) : []
  // }

  // const getPlayers = () => {
  //   return players
  // }

  // const getActivePlayers = () => {
  //   return getPlayers().filter(({ health }: any) => health)
  // }

  // const getShape = () => {
  //   return generateShape()
  // }

  const move = (direction: 'left' | 'right') => {
    const movements =  {
      left: -1,
      right: 1
    }

    const movement = movements[direction]

    setShapes((currentShapes) => currentShapes.map((shape) => shape.active ? { ...shape, x: shape.x + movement } : shape))
  }

  useMousetrap('left', () => move('left'))
  useMousetrap('right', () => move('right'))
  // useMousetrap('space', () => )

  useEffect(() => {
    setShapes([generateShape(dimensions)])
    // setShapes((currentShapes): any => [generateShape()])
  }, [])

  useInterval(() => {
    setShapes((currentShapes) => {
      const activeShape = currentShapes.filter(({ active }) => active)[0]
      const bottomShapes = currentShapes.filter(({ active }) => !active)

      const hitsBottom = (activeShape?.y + activeShape?.height) === dimensions.height - 1

      const hitsBlock = bottomShapes.length && bottomShapes.some((bottomShape) =>
        bottomShape.blocks.some((bottomBlock) =>
          activeShape.blocks.some((activeBlock) => (activeShape.x + activeBlock.x) === (bottomShape.x + bottomBlock.x) && ((activeShape.y + 1) + activeBlock.y) === (bottomShape.y + bottomBlock.y))
        )
      )

      if (hitsBottom || hitsBlock) {
        return [ ...bottomShapes, { ...activeShape, active: false }, generateShape(dimensions)]
      }

      return [ ...bottomShapes, { ...activeShape, y: activeShape?.y + 1 }]
    })
  }, 200)

  return (
    <SMap style={{style}} width={dimensions.width} height={dimensions.height}>
      {/* { times(22 * 44, (i) => (
        <SMapBlock
          s={{
            left: `${x}rem`,
            top: `${y}rem`
          }}
        />

      )) } */}
      { getStones().map(({x, y}: any, index: number) => (
        <SMapBlock
          key={index}
          color="#787A91"
          s={{
            left: `${x}rem`,
            top: `${y}rem`
          }}
        />
      )) }
      { getActiveShape() ? (
        <Box s={{
          position: 'absolute',
          left: `${getActiveShape().x}rem`,
          top: `${getActiveShape().y}rem`,
          height: getActiveShape().height + 'rem',
          width: getActiveShape().width + 'rem'
        }}>
          { getActiveShape().blocks.map((block: any, index: number) => (
            <SMapBlock
              color={getActiveShape().color}
              s={{
                left: `${block.x}rem`,
                top: `${block.y}rem`
              }}
            />
          )) }
        </Box>
      ) : null }
      { getShapes().length && getShapes().map((shape: any, index: number) => (
        <Box s={{
          position: 'absolute',
          left: `${shape.x}rem`,
          top: `${shape.y}rem`,
          height: shape.height + 'rem',
          width: shape.width + 'rem'
        }}>
          { shape.blocks.map((block: any, index: number) => (
            <SMapBlock
              color={shape.color}
              s={{
                left: `${block.x}rem`,
                top: `${block.y}rem`
              }}
            />
          )) }
        </Box>
      )) }
    </SMap>
  )
}
