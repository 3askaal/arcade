import React, { useContext, useEffect } from 'react'
import ReactGA4 from 'react-ga4'
import { Box, Spacer, Container, Wrapper, Popup, Text, Button } from '3oilerplate'
import { Map, Score } from '../../components'
import { GameContext } from '../../context'
import { Controls } from '../../modules'
import { useParams } from 'react-router-dom'
import { Screen } from '../../components/Screen/Screen'
import { Directions } from '../../components/Controls/Directions/Directions'
import { Actions } from '../../components/Controls/Actions/Actions'

const PlayView = () => {
  const { gameId }: any = useParams()
  const { selectedGame, setSelectedGame, start, gameOver, gamePaused, setGamePaused } = useContext(GameContext)

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

  const CurrentControls = selectedGame && Controls[selectedGame]

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
          {/* <Screen></Screen> */}
          <Box s={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '420px',
            px: 'l'
          }}>
            <Directions />
            <Actions />
          </Box>
          {/* { CurrentControls ?  (
            <Box s={{
              display: 'flex',
              width: '100%',
              mt: 0,
            }}>
              <CurrentControls />
            </Box>
          ) : null } */}
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
