import React, { FC, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Spacer, Container, Wrapper } from '3oilerplate'
import { GameContext } from '../context';
import { Controls, Screen } from '../components';
import { Menu } from '../components/Menu/Menu';
import { GameOver } from '../components/GameOver/GameOver';
import { Overlay } from '../components/Overlay/Overlay';

export const AppWrapper: FC = ({ children }) => {
  const history = useHistory()
  const { menuActive, gameOver } = useContext(GameContext)

  const menuNavItems = [
    { name: 'home', action: () => history.push(`/`)},
    { name: 'scoreboard', action: () => history.push(`/score`), disabled: true },
  ]

  return (
    <Wrapper s={{ p: ['s', 'm', 'l'] }}>
      <Container s={{ p: 0 }}>
        <Spacer size="10%" s={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
          <Box s={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
            <Screen>
              { children }
              { menuActive && (
                <Overlay>
                  <Menu items={menuNavItems} />
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
