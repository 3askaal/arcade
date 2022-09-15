import { useContext, useMemo } from "react"
import { SMapBlock, SMapMine, SMapMineThread, SMapSelector } from "./MinesweeperMap.styled"
import { MinesweeperContext } from "../context/MinesweeperContext"
import { GameContext } from "../../../context"
import { SMapPos } from "../../../components/Map/Map.styled"

export const MinesweeperMapContent = () => {
  const { dimensions } = useContext(GameContext)
  const { grid, gameResult } = useContext(MinesweeperContext)
  const positions = useMemo(() => Object.values(grid || {}), [grid])

  const blockSizeX = 100 / dimensions.width
  const blockSizeY = 100 / dimensions.height

  return (
    <>
      { positions.map((position: any, index: number) => (
        <SMapPos
          key={`pos-${index}`}
          pos={position}
          blockSizeX={blockSizeX}
          blockSizeY={blockSizeY}
        >
          { position.selected ? (
            <SMapSelector />
            ) : null }
          { position.mine ? (
            <SMapMine />
          ) : null }
          { position.thread ? (
            <SMapMineThread amount={position.amount}>
              { position.amount }
            </SMapMineThread>
          ): null}
          { (!gameResult || !position.mine) && (
            <SMapBlock
              flag={position.flag}
              hide={!position.block}
            />
          )}
        </SMapPos>
      )) }
    </>
  )
}
