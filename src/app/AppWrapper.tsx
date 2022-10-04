import React, { FC, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Spacer, Container, Wrapper } from '3oilerplate'
import { GameContext } from '../context';
import { Controls, Screen, Menu, GameOver, Overlay } from '../components';

export const AppWrapper: FC = ({ children }) => {
  const history = useHistory()
  const { menuActive, gameOver } = useContext(GameContext)

  const menuNavItems = [
    { name: 'home', action: () => history.push(`/`)},
    { name: 'scoreboard', action: () => history.push(`/score`) },
  ]

  return (
    <Wrapper s={{ p: ['s', 'm', 'l'] }}>
      <Container s={{ p: 0 }}>
        <Spacer size="l" s={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
          <Box df w100p jcc>
            <Screen>
              { children }
              { menuActive && (
                <Overlay>
                  <Box df aic w100p h100p>
                    <Menu items={menuNavItems} />
                  </Box>
                </Overlay>
              ) }
              { gameOver && (
                <GameOver />
              ) }
            </Screen>
          </Box>
          <Controls />
        </Spacer>
      </Container>

    </Wrapper>
  )
}
