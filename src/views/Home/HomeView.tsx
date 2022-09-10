import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import ReactGA4 from 'react-ga4'
import { Spacer, Container, Wrapper, Link, Box } from '3oilerplate'
import { capitalize } from 'lodash'
import { Button } from '../../components/Button/Button'
import { GAMES } from '../../config/config'
import { Actions, Directions, Screen } from '../../components'

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
          <Box s={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            maxWidth: '420px',
            px: 'm'
          }}>
            <Directions controls={{ onUp, onDown }} />
            <Actions controls={{ onA }} />
          </Box>
        </Spacer>
      </Container>
    </Wrapper>
  )
}

export default PlayView
