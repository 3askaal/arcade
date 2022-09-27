import React, { useContext } from 'react'
import { SScore, SScoreDivider, SScoreItem } from './Score.styled'
import { GameContext } from '../../context'
import { capitalize } from 'lodash'

export const Score = () => {
  const { score } = useContext(GameContext)

  return (
    <SScore>
      { Object.entries(score).map(([scoreKey, scoreValue], index) => (
        <>
          { index ? <SScoreDivider key={`divider-${scoreKey}`} /> : null }
          <SScoreItem key={`score-${scoreKey}`}>{ capitalize(scoreKey) }: { scoreValue }</SScoreItem>
        </>
      )) }
    </SScore>
  )
}
