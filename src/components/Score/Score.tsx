import React, { useContext } from 'react'
import { SScore, SScoreDivider, SScoreItem } from './Score.styled'
import { GameContext } from '../../context'
import { capitalize } from 'lodash'
import moment from 'moment'

export const Score = () => {
  const { score } = useContext(GameContext)
  const { time, ...stats } = score

  return (
    <SScore>
      <SScoreItem>time: { moment.utc(time || 0).format('m:ss') }</SScoreItem>
      { Object.entries(stats).map(([scoreKey, scoreValue]) => (
        <>
          <SScoreDivider key={`divider-${scoreKey}`} />
          <SScoreItem key={`score-${scoreKey}`}>{ capitalize(scoreKey) }: { scoreValue }</SScoreItem>
        </>
      )) }
    </SScore>
  )
}
