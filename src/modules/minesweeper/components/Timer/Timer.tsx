import React, { useContext, useEffect, useState } from 'react'
import { Box } from '3oilerplate'
import moment from 'moment'
import { MinesweeperContext } from '../../MinesweeperContext'
import { useIntervalWhen } from 'rooks'

export const Timer = ({ s }: any) => {
  const { startTime, endTime }: any = useContext(MinesweeperContext)
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    setCurrentTime('0:00')
  }, [startTime])

  useIntervalWhen(() => {
    setCurrentTime(moment.utc(Date.now() - startTime).format('m:ss'))
  }, 1000, !!startTime && !endTime)

  return <Box s={s}>{ currentTime }</Box>
}
