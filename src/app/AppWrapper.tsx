import React, { FC, useContext } from 'react';
import { Box, Spacer, Container, Wrapper } from '3oilerplate'
import { GameContext } from '../context';
import { Controls, Screen } from '../components';
import { Menu } from '../components/Menu/Menu';
import { useHistory } from 'react-router-dom';

export const AppWrapper: FC = ({ children }) => {
  const history = useHistory()
  const { menuActive, gameOver, start } = useContext(GameContext)

  const menuNavItems = [
    { name: 'home', action: () => history.push(`/`)},
    { name: 'leaderboards', action: () => history.push(`/leaderboards`), disabled: true },
  ]

  const gameOverItems = [
    { name: 'restart', action: () => start()},
  ]

  return (
    <Wrapper s={{ p: ['s', 'm', 'l'] }}>
      <Container s={{ p: 0 }}>
        <Spacer size="l" s={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
          <Box s={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
            <Screen>
              { menuActive && !gameOver && (
                <Menu items={menuNavItems} />
              ) }
              { gameOver && (
                <Menu content="Game over" items={gameOverItems} />
              ) }
              { !menuActive && !gameOver && children }
            </Screen>
          </Box>
          <Controls />
        </Spacer>
      </Container>

    </Wrapper>
  )
}
