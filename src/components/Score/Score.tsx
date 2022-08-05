import React, { useContext } from 'react'
import { Spacer } from '3oilerplate'
import { SScore } from './Score.styled'
import { GameContext } from '../../context'

export const Score = () => {
  const { score } = useContext(GameContext)

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
