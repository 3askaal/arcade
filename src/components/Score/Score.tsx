import React, { useContext } from 'react'
import { Spacer } from '3oilerplate'
import { SScore } from './Score.styled'
import { GameContext } from '../../context'
import { capitalize } from 'lodash'

export const Score = () => {
  const { score } = useContext(GameContext)

  return (
    <SScore>
      <Spacer size="s" s={{ flexDirection: 'row' }}>
        { Object.entries(score).map(([key, value]) => (
          <span>{ capitalize(key) }: { value }</span>
        )) }
      </Spacer>
    </SScore>
  )
}
