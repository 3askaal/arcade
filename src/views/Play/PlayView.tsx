import React, { createContext, useContext, useEffect } from 'react'
import ReactGA4 from 'react-ga4'
import { Box, Spacer, Container, Wrapper, Popup, Text, Button } from '3oilerplate'
import { Map, Score, Screen, Directions, Actions } from '../../components'
import { GameContext } from '../../context'
import { Contexts } from '../../modules'
import { useParams } from 'react-router-dom'

const PlayView = () => {
  const { gameId }: any = useParams()
  const { selectedGame, setSelectedGame, start, gameOver, gamePaused, setGamePaused } = useContext(GameContext)
  const { controls } = useContext((selectedGame && Contexts[selectedGame]) || createContext({}))

  useEffect(() => {
    if (selectedGame !== 'bomberman') start()
  }, [])

  useEffect(() => {
    if (gameId) {
      setSelectedGame(gameId)

      ReactGA4.send({
        hitType: "pageview",
        page: `/play/${selectedGame}}`
      });
    }
  }, [gameId, setSelectedGame])

  return (
    <Wrapper s={{ p: ['s', 'm', 'l'], pt: ['m', 'l'] }}>
      <Container s={{ p: 0 }}>
        <Spacer size="l" s={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
          <Box s={{ display: 'flex', }}>
            <Score />
          </Box>
          <Box s={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
            <Screen>
              <Map />
            </Screen>
          </Box>
          <Box s={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '420px',
            px: 'l'
          }}>
            <Directions controls={controls} />
            <Actions controls={controls} />
          </Box>
        </Spacer>
      </Container>
      { gameOver && (
        <Popup
          actions={[
            <Button data-testid="restart" key="restart" onClick={() => start()}>Restart</Button>
          ]}
        >
          <Text s={{ width: '100%', textAlign: 'center' }}>Game over! Click restart to play again.</Text>
        </Popup>
      ) }
      { gamePaused && (
        <Popup
          actions={[
            <Button data-testid="resume" key="resume" onClick={() => setGamePaused(false)}>Resume</Button>
          ]}
        >
          <Text s={{ width: '100%', textAlign: 'center' }}>Game paused! Click resume to continue playing.</Text>
        </Popup>
      ) }
    </Wrapper>
  )
}

export default PlayView
