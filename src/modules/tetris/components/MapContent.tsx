import React, { useContext } from "react"
import { TetrisContext } from "../context/TetrisContext"
import { SMapBlock, SMapShape } from "./MapContent.styled"

export const TetrisMapContent = ({ blockSize }: any) => {
  const { shape, blocks } = useContext(TetrisContext)

  return (
    <>
      { shape ? (
        <SMapShape
          data-testid="shape-active"
          key={`shape-active`}
          shape={shape}
          blockSize={blockSize}
        >
          { shape.blocks.map((block: any, index: number) => (
            <SMapBlock
              data-testid={`shape-active-block-${index}`}
              key={`block-active-${index}`}
              color={shape.color}
              blockSize={blockSize}
              block={block}
            />
          )) }
        </SMapShape>
      ) : null }
      { blocks ? blocks.map((block: any, index: number) => (
        <SMapBlock
          data-testid={`block-${index}`}
          key={`block-${index}`}
          color={block.color}
          dead={block.dead}
          blockSize={blockSize}
          block={block}
        />
      )) : null }
    </>
  )
}
