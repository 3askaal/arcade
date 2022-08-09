import React, { useContext, useEffect } from 'react'
import ReactGA4 from 'react-ga4'
import { Box, Spacer, Container, Wrapper, Popup, Text, Button } from '3oilerplate'
import { Map, Score } from '../../components'
import { GameContext } from '../../context'
import { Controls } from '../../modules'
import { useParams } from 'react-router-dom'

const PlayView = () => {
  const { gameId }: any = useParams()
  const { selectedGame, setSelectedGame, start, gameOver, gamePaused, setGamePaused } = useContext(GameContext)

  useEffect(start, [])

  useEffect(() => {
    if (gameId) {
      setSelectedGame(gameId)

      ReactGA4.send({
        hitType: "pageview",
        page: `/play/${selectedGame}}`
      });
    }
  }, [gameId, setSelectedGame])

  const CurrentControls = selectedGame && Controls[selectedGame]

  return (
    <Wrapper s={{ p: ['s', 'm', 'l'], pt: ['m', 'l'] }}>
      <Container s={{ p: 0 }}>
        <Spacer size="l" s={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <Box s={{ display: 'flex', }}>
            <Score />
          </Box>
          <Box s={{
            // display: 'flex',
            flexDirection: 'column',
            width: '100%',
            // flexGrow: 1,
            flexShrink: 1,
            maxHeight: '80%',
          }}>
            <Map />
          </Box>
          { CurrentControls ?  (
            <Box s={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              mt: 's',
            }}>
              <CurrentControls />
            </Box>
          ) : null }
        </Spacer>
      </Container>
      { gameOver && (
        <Popup
          actions={[
            <Button data-testid="restart" onClick={() => start()}>Restart</Button>
          ]}
        >
          <Text s={{ width: '100%', textAlign: 'center' }}>Game over! Click restart to play again.</Text>
        </Popup>
      ) }
      { gamePaused && (
        <Popup
          actions={[
            <Button data-testid="resume" onClick={() => setGamePaused(false)}>Resume</Button>
          ]}
        >
          <Text s={{ width: '100%', textAlign: 'center' }}>Game paused! Click resume to continue playing.</Text>
        </Popup>
      ) }
    </Wrapper>
  )
}

export default PlayView
