import React, { useContext, useEffect } from 'react'
import ReactGA4 from 'react-ga4'
import { Box } from '3oilerplate'
import { Map, Score, Timer } from '../../components'
import { GameContext } from '../../context'
import { useParams } from 'react-router-dom'

const PlayView = () => {
  const { gameId } = useParams<{ gameId?: string }>()
  const { selectedGame, setSelectedGame, launch } = useContext(GameContext)

  useEffect(() => {
    launch()
  }, [])

  useEffect(() => {
    if (gameId) {
      setSelectedGame(gameId)

      ReactGA4.send({
        hitType: "pageview",
        page: `/play/${selectedGame}`
      });
    }
  }, [gameId, setSelectedGame])

  return (
    <>
      <Box df jcsb s={{ pb: 's', px: 'm' }}>
        <Timer />
        <Score />
      </Box>
      <Map />
    </>
  )
}

export default PlayView
