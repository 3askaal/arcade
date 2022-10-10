import React, { FC, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useAxios from "axios-hooks";
import { Spacer, Text, Title } from '3oilerplate';
import { GameContext } from "../../context";
import { Input, Menu, Overlay, Score } from "..";
import { API_URL } from "../../config";
import { useMenu } from "../../helpers/useMenu";

export const GameOver: FC = () => {
  const history = useHistory()
  const { selectedGame, score, launch } = useContext(GameContext)
  const [name, setName] = useState('')
  const [nameIsValid, setNameIsValid] = useState(false)

  const [{ data }, submitScore] = useAxios(
    {
      url: `${API_URL}/score`,
      method: 'POST'
    },
    { manual: true }
  )

  useEffect(() => {
    if (data?._id) {
      setName('')
      changeIndex(2)
    }
  }, [data])

  useEffect(() => {
    setNameIsValid(name.length >= 3)
  }, [name])

  const items = [
    {
      name: 'input',
      hidden: true,
      color: nameIsValid ? 'positive' : undefined,
      index: 0,
    },
    {
      name: 'submit',
      action: () => {
        submitScore({
          data: {
            gameId: selectedGame,
            score: JSON.stringify(score),
            name: name
          }
        })
      },
      disabled: !nameIsValid || !!data,
      index: 1,
    },
    {
      name: 'scoreboard',
      action: () => history.push(`/score/${selectedGame}`),
      index: 2,
    },
    {
      name: 'restart',
      action: () => launch(),
      index: 3,
    },
  ]

  const [selectedIndex, changeIndex] = useMenu(items, [nameIsValid, data])

  return (
    <Overlay>
      <Title>Game Over</Title>
      <Spacer s={{ textAlign: 'center' }}>
        <Text s={{ fontSize: '.8em' }}>Your score:</Text>
        <Score />
        <Input selected={selectedIndex === 0} color={items[0].color} placeholder="Fill in your name" onChange={(e: any) => setName(e.target.value)} />
      </Spacer>
      <Menu items={items} controlledSelectedIndex={selectedIndex} />
    </Overlay>
  )
}
