import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import ReactGA4 from 'react-ga4'
import { Spacer, Container, Wrapper, Box } from '3oilerplate'
import { capitalize } from 'lodash'
import { Controls, Screen, Button } from '../../components'
import { GAMES } from '../../config/config'

const PlayView = () => {
  const [selectedGameIndex, setSelectedGameIndexState] = useState(0)
  const history = useHistory()

  useEffect(() => {
    ReactGA4.send({
      hitType: "pageview",
      page: `/`
    });
  }, [])

  const setSelectedGameIndex = (newSelectedGameIndex: number) => {
    const game = GAMES[newSelectedGameIndex];

    if (game && !game.disabled) {
      setSelectedGameIndexState(newSelectedGameIndex);
    }
  }

  const onUp = () => setSelectedGameIndex(selectedGameIndex - 1)
  const onDown = () => setSelectedGameIndex(selectedGameIndex + 1)

  const onA = () => {
    history.push(`/play/${GAMES[selectedGameIndex].name}`)
  }

  const onSelect = () => {}
  const onStart = () => {}

  return (
    <Wrapper s={{ p: ['s', 'm', 'l'] }}>
      <Container s={{ p: 0 }}>
        <Spacer size="l" s={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
          <Box s={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
            <Screen>
              <Spacer size="m" >
                { GAMES.map(({ name, color, disabled }, index) => (
                  <Button isBlock isDisabled={disabled} selected={index === selectedGameIndex} color={color}>{ capitalize(name) }</Button>
                ))}
              </Spacer>
            </Screen>
          </Box>
          <Controls controls={{ onUp, onDown, onA, onSelect, onStart }} />
        </Spacer>
      </Container>
    </Wrapper>
  )
}

export default PlayView
