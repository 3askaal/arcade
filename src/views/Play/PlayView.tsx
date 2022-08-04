import React, { useContext, useEffect } from 'react'
import { Box, Container, Wrapper, Popup, Text, Button } from '3oilerplate'
import ReactGA from 'react-ga4'
import { Controls, Map, Score } from '../../components'
import { useKeyboardBindings } from '../../helpers/keyboard'
import { TetrisContext } from '../../modules/tetris/TetrisContext'

const PlayView = () => {
  const {
    start,
    gameOver,
    gamePaused,
    setGamePaused,
  } = useContext(TetrisContext)

  useKeyboardBindings()

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/play" });
    start()
  }, [])

  return (
    <Wrapper s={{ p: ['s', 'm', 'l'] }}>
      <Container s={{ p: 0 }}>
        <Box s={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <Box s={{ display: 'flex', alignItems: 'flex-end' }}>
            <Score />
          </Box>
          <Map />
          <Box s={{
            display: 'flex',
            width: '100%',
            alignItems: 'flex-end',
            justifyContent: 'center',
            mt: 's'
          }}>
            <Controls />
          </Box>
        </Box>
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
