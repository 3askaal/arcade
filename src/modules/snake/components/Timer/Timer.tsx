import React, { useContext } from 'react'
import { Box } from '3oilerplate'
import moment from 'moment'
import { SnakeContext } from '../../SnakeContext'

export const Timer = ({ s }: any) => {
  const { currentTime }: any = useContext(SnakeContext)

  const getTimeLabel = () => {
    return moment.utc(currentTime || 0).format('m:ss')
  }

  return <Box s={s}>{ getTimeLabel() }</Box>
}
