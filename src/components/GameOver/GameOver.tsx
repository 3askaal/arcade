import React, { FC, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Spacer, Text, Title } from '3oilerplate';
import { Overlay } from "../Overlay/Overlay";
import { GameContext } from "../../context";
import { Input } from "../Input/Input";
import { Menu } from "../Menu/Menu";
import useAxios from "axios-hooks";
import { API_URL } from "../../config";
import { useHistory } from "react-router-dom";
import { displayPartsToString } from "typescript";

export const GameOver: FC = () => {
  const history = useHistory()
  const [selectedIndex, setSelectedIndexState] = useState(0)
  const { selectedGame, setControls, score, launch } = useContext(GameContext)
  const [name, setName] = useState('')
  const [scoreSubmitted, setScoreSubmitted] = useState(false)

  const [{ data }, submitScore] = useAxios(
    {
      url: `${API_URL}/score`,
      method: 'POST',
      data: {
        gameId: selectedGame,
        score: JSON.stringify(score),
        name
      }
    },
    { manual: true }
  )

  useEffect(() => {
    if (data?._id) {
      setScoreSubmitted(true)
      setSelectedIndexState(2)
    }
  }, [data])

  useEffect(() => {
    console.log(name)
  }, [name])

  const items: any[] = useMemo(() => [
    {
      name: 'submit score',
      action: submitScore,
      disabled: name.length <= 2 && !scoreSubmitted,
      index: 1,
    },
    {
      name: 'scoreboard',
      action: () => history.push(`/score`),
      index: 2
    },
    {
      name: 'restart',
      action: () => launch(),
      index: 3
    },
  ], [name, scoreSubmitted])

  const setSelectedIndex = (newSelectedIndex: number) => {
    const item = items.find(({ index }) => index === newSelectedIndex) || items[newSelectedIndex];

    if (item && !item.disabled) {
      setSelectedIndexState(newSelectedIndex);
    }
  }

  useEffect(() => {
    const item = items.find(({ index }) => index === selectedIndex) || items[selectedIndex];

    setControls({
      onUp: () => setSelectedIndex(selectedIndex - 1),
      onDown: () => setSelectedIndex(selectedIndex + 1),
      onA: () => item?.action(),
    })
  }, [selectedIndex])

  return (
    <Overlay>
      <Title>Game Over</Title>
      <Spacer s={{ textAlign: 'center' }}>
        <Text s={{ fontSize: '.8em' }}>Your score:</Text>
        <Text s={{ fontSize: '.8em' }}>{ Object.entries(score).map(([key, value]) => `${key}: ${value}`) }</Text>
        <Input focus={selectedIndex === 0 && !scoreSubmitted} placeholder="Fill in your name" value={name} onChange={(e: any) => setName(e.target.value)} />
        <Menu items={[items[0]]} controlledSelectedIndex={selectedIndex} />
      </Spacer>
      <Menu items={[items[1], items[2]]} controlledSelectedIndex={selectedIndex} />
    </Overlay>
  )
}
