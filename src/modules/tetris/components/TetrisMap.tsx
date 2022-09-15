import React, { useContext } from "react"
import { GameContext } from "../../../context"
import { TetrisContext } from "../context/TetrisContext"
import { useTetrisKeyboard } from "../keyboard"
import { SMapBlock } from "./TetrisMap.styled"

export const TetrisMapContent = () => {
  const { dimensions } = useContext(GameContext)
  const { shape, blocks } = useContext(TetrisContext)

  useTetrisKeyboard()

  const blockSizeX = 100 / dimensions.width
  const blockSizeY = 100 / dimensions.height

  return (
    <>
      { shape?.blocks ?
        shape.blocks.map((block: any, index: number) => (
          <SMapBlock
            data-testid={`shape-active-block-${index}`}
            key={`block-active-${index}`}
            color={shape.color}
            blockSizeY={blockSizeY}
            blockSizeX={blockSizeX}
            block={block}
            shape={shape}
          />
        )
      ) : null }
      { blocks ? blocks.map((block: any, index: number) => (
        <SMapBlock
          data-testid={`block-${index}`}
          key={`block-${index}`}
          color={block.color}
          dead={block.dead}
          blockSizeY={blockSizeY}
          blockSizeX={blockSizeX}
          block={block}
        />
      )) : null }
    </>
  )
}
