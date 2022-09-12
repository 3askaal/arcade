import React, { useContext, useEffect } from 'react'
import ReactGA4 from 'react-ga4'
import { Map, Score } from '../../components'
import { GameContext } from '../../context'
import { useParams } from 'react-router-dom'

const PlayView = () => {
  const { gameId }: any = useParams()
  const { selectedGame, setSelectedGame, start } = useContext(GameContext)

  useEffect(() => {
    if (selectedGame !== 'bomberman') start()
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
      <Score />
      <Map />
    </>
  )
}

export default PlayView
