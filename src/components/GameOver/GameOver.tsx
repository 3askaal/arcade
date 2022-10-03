import React, { FC, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { tail } from "lodash";
import { Spacer, Text, Title } from '3oilerplate';
import useState from 'react-usestateref'
import { Overlay } from "../Overlay/Overlay";
import { GameContext } from "../../context";
import { Input } from "../Input/Input";
import { Menu, MenuItemProps } from "../Menu/Menu";
import useAxios from "axios-hooks";
import { API_URL } from "../../config";
import { Score } from "../Score/Score";

export const GameOver: FC = () => {
  const history = useHistory()
  const [selectedIndex, setSelectedIndexState] = useState(0)
  const { selectedGame, setControls, score, launch } = useContext(GameContext)
  const [name, setName, nameRef] = useState('')
  const [, setScoreSubmitted, scoreSubmittedRef] = useState(false)

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
      setScoreSubmitted(true)
      setSelectedIndexState(2)
    }
  }, [data])

  const items = (): MenuItemProps[] => [
    {
      name: 'submit',
      action: () => {
        submitScore({
          data: {
            gameId: selectedGame,
            score: JSON.stringify(score),
            name: nameRef.current
          }
        })
      },
      disabled: nameRef?.current?.length <= 2 || scoreSubmittedRef?.current,
      index: 1,
    },
    {
      name: 'scoreboard',
      action: () => history.push(`/score/${selectedGame}`),
      index: 2
    },
    {
      name: 'restart',
      action: () => launch(),
      index: 3
    },
  ]

  const setSelectedIndex = (add: number) => {
    const newSelectedIndex = selectedIndex + add
    const item = items().find(({ index }) => index === newSelectedIndex);

    if (newSelectedIndex === 0 && !scoreSubmittedRef.current) {
      setSelectedIndexState(0);
      return
    }

    if (!item) return

    if (item.disabled) {
      setSelectedIndex(add * 2)
    } else {
      setSelectedIndexState(newSelectedIndex);
    }
  }

  useEffect(() => {
    const item = items().find(({ index }) => index === selectedIndex);

    setControls({
      onUp: () => setSelectedIndex(-1),
      onDown: () => setSelectedIndex(1),
      onA: () => item?.action(),
    })
  }, [selectedIndex])

  return (
    <Overlay>
      <Title>Game Over</Title>
      <Spacer s={{ textAlign: 'center' }}>
        <Text s={{ fontSize: '.8em' }}>Your score:</Text>
        <Score />
        <Input selected={selectedIndex === 0} placeholder="Fill in your name" value={name} onChange={(e: any) => setName(e.target.value)} />
        <Menu items={[items()[0]]} controlledSelectedIndex={selectedIndex} />
      </Spacer>
      <Menu items={tail(items())} controlledSelectedIndex={selectedIndex} />
    </Overlay>
  )
}
