import React, { FC, useContext } from 'react';
import { Box, Spacer, Container, Wrapper, Popup, Button, Text } from '3oilerplate'
import { GameContext } from '../context';
import { Controls, Screen } from '../components';
import { Menu } from '../components/Menu/Menu';
import { useHistory } from 'react-router-dom';

export const AppWrapper: FC = ({ children }) => {
  const history = useHistory()
  const { menuActive, gameOver, gamePaused, start, setGamePaused } = useContext(GameContext)

  const navItems = [
    { name: 'home', action: () => history.push(`/`)},
    { name: 'leaderboards', action: () => history.push(`/leaderboards`)},
  ]

  return (
    <Wrapper s={{ p: ['s', 'm', 'l'] }}>
      <Container s={{ p: 0 }}>
        <Spacer size="l" s={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
          <Box s={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
            <Screen>
              { menuActive ? (
                <Menu items={navItems} />
              ) : children }
            </Screen>
          </Box>
          <Controls />
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
