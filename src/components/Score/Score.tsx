import React, { useContext } from 'react'
import { Spacer } from '3oilerplate'
import { SScore } from './Score.styled'
import { GameContext } from '../../context'
import { capitalize } from 'lodash'

export const Score = () => {
  const { score } = useContext(GameContext)

  return (
    <SScore>
      <Spacer size="m" s={{ flexDirection: 'row' }}>
        { Object.entries(score).map(([scoreKey, scoreValue]) => (
          <span key={scoreKey}>{ capitalize(scoreKey) }: { scoreValue }</span>
        )) }
      </Spacer>
    </SScore>
  )
}
