import React, { useContext, useEffect, useState } from 'react'
import { s } from '3oilerplate'
import moment from 'moment'
import { GameContext } from '../../context'
import { useIntervalWhen } from 'rooks'
import { last } from 'lodash'

const STimer = s.div({
  fontSize: '.7em'
})

export const Timer = () => {
  const { time, milliseconds } = useContext(GameContext)
  const [currentTime, setCurrentTime] = useState('')

  return <STimer>{ currentTime }</STimer>
}
