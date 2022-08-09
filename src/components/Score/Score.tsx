import React, { useContext } from 'react'
import { SScore, SScoreDivider, SScoreItem } from './Score.styled'
import { GameContext } from '../../context'
import { capitalize } from 'lodash'
import { Outline } from '../Retro/Outline'

export const Score = () => {
  const { score } = useContext(GameContext)

  return (
    <SScore>
      <Outline color="grey60" />
      { Object.entries(score).map(([scoreKey, scoreValue], index) => (
        <>
          { index ? <SScoreDivider key={`divider-${index}`} /> : null }
          <SScoreItem key={scoreKey}>{ capitalize(scoreKey) }: { scoreValue }</SScoreItem>
        </>
      )) }
    </SScore>
  )
}
