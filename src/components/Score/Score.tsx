import React, { useContext } from 'react'
import { Spacer } from '3oilerplate'
import { SScore } from './Score.styled'
import { TetrisContext } from '../../modules/tetris/TetrisContext'

export const Score = ({ s }: any) => {
  const { score } = useContext(TetrisContext)

  return (
    <SScore>
      <Spacer size="s" s={{ flexDirection: 'row' }}>
        <span>Level: { score?.level }</span>
        <span>Score: { score?.points }</span>
        <span>Rows: { score?.rows }</span>
      </Spacer>
    </SScore>
  )
}
