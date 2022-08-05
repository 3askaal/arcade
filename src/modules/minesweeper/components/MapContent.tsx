import { useContext, useMemo } from "react"
import { Box } from '3oilerplate'
import { SMapBlock, SMapMine, SMapMineThread } from "./MapContent.styled"
import { MinesweeperContext } from "../context/MinesweeperContext"
import { useLongPress } from "use-long-press"
import { flag } from "../mutations"
import { IGrid, IPosition } from "../types"
import { useMinesweeperKeyboard } from "../keyboard"

export const MinesweeperMapContent = ({ blockSize }: any) => {
  const { grid, gameResult, onClick } = useContext(MinesweeperContext)
  const positions = useMemo(() => Object.values(grid || {}), [grid])
  const bindLongPress = useLongPress((e, { context }) => flag(grid as IGrid, context as IPosition));

  useMinesweeperKeyboard()

  return (
    <>
      { positions.map((position: any, index: number) => (
        <Box
          key={`block-${index}`}
          s={{
            display: 'flex',
            position: 'relative',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            width: `${blockSize}%`,
            height: `${blockSize}%`
          }}
        >
          { position.mine ? (
            <SMapMine
              key={`mine-${index}`}
            />
          ) : null }
          { position.thread ? (
            <SMapMineThread
              key={`thread-${index}`}
              amount={position.amount}
            >
              { position.amount }
            </SMapMineThread>
          ): null}
          { (!gameResult || !position.mine) && (
            <SMapBlock
              key={`block-${index}`}
              flag={position.flag}
              block={position.block}
              {...bindLongPress(position)}
              onClick={(e: React.MouseEvent) => onClick(e, position)}
            />
          )}
        </Box>
      )) }
    </>
  )
}
