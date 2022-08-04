import React, { memo, useContext, useEffect } from 'react'
import { Container, Wrapper, Button, Text, Spacer, Popup } from '3oilerplate'
import { Smile as SmileIcon, Frown as FrownIcon } from 'react-feather'
import { Map } from '../components/Map/Map'
import { Timer } from '../components/Timer/Timer'
import { MinesweeperContext } from '../MinesweeperContext'
import { useKeyboardBindings } from '../keyboard'
import ReactGA4 from 'react-ga4'

const PlayView = () => {
  const { grid, onClick, onStartGame, gameResult, remainingBlocks, settings } = useContext(MinesweeperContext)

  useKeyboardBindings()

  useEffect(() => {
    onStartGame()

    ReactGA4.event({
      category: "actions",
      action: "game:start",
    });
  }, [settings?.mode])

  useEffect(() => {
    if (gameResult?.won) {
      ReactGA4.event({
        category: "actions",
        action: "game:won",
      });
    }

    if (gameResult?.won === false) {
      ReactGA4.event({
        category: "actions",
        action: "game:lost",
      });
    }
  }, [gameResult])

  return (
    <Wrapper>
      <Container s={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <Spacer size="l" s={{ pb: 'm', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Timer />
          <Button onClick={onStartGame} isOutline>
            { gameResult && !gameResult?.won ? <FrownIcon size={18} /> : <SmileIcon size={18} /> }
          </Button>
          <Text s={{ textAlign: 'center' }}>{ remainingBlocks }</Text>
        </Spacer>
        <Map grid={grid} gameResult={gameResult} settings={settings} onClick={onClick} />
      </Container>
      { gameResult?.won && (
        <Popup
          actions={[
            <Button onClick={onStartGame}>Restart</Button>
          ]}
        >
          <Text s={{ width: '100%', textAlign: 'center' }}>
            You won! Click restart to play again.
          </Text>
        </Popup>
      ) }
    </Wrapper>
  )
}

export default PlayView
