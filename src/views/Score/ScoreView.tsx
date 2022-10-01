import React, { useContext, useEffect, useState } from 'react'
import ReactGA4 from 'react-ga4'
import useAxios from 'axios-hooks'
import { Spacer } from '3oilerplate';
import { API_URL, GAMES, SCOREBOARD_SORTING, } from '../../config'
import { useHistory, useParams } from 'react-router-dom';
import { Select, Table } from '../../components';
import { sortBy } from 'lodash';
import { GameContext } from '../../context';

interface Score {
  gameId: string;
  name: string;
  score: string;
}

const ScoreView = () => {
  const history = useHistory();
  const { gameId } = useParams<{ gameId?: string }>()
  const [selectFocus, setSelectFocus] = useState(false)
  const { setControls } = useContext(GameContext)
  const [{ data }, refetch] = useAxios(`${API_URL}/score/${gameId || ''}`)

  useEffect(() => {
    ReactGA4.send({
      hitType: "pageview",
      page: `/score`
    });
  }, [])

  useEffect(() => {
    if (!gameId) {
      history.push(`score/${GAMES[0].name}`)
      return
    }

    refetch({ url: `${API_URL}/score/${gameId}` })
  }, [gameId])

  const formatScore = (score: any) => Object.entries(score)
    .map(([key, value]) => `${key}: ${value}`)
    .join(' | ')

  const parseScore = (score = '{}') => {
    return Object.entries(JSON.parse(score))
      .reduce((acc, [key, value]) => ({
        ...acc,
        [key]: typeof Number(value) === 'number' ? Number(value) : value
      }), {})
  }

  const navItems = sortBy(
    data?.map(({ name, score }: Score) => ({ name, value: parseScore(score) })),
    gameId ? SCOREBOARD_SORTING[gameId] : 'value.points'
  ).map(({ name, value }) => ({ name, value })) || []

  const onSelectChange = (e: any) => {
    history.push(`${e.target.value}`)
  }

  useEffect(() => {
    setControls({
      onA: () => setSelectFocus(!selectFocus)
    })
  }, [selectFocus])

  return data && (
    <Spacer size="xl">
      <Select
        focus={selectFocus}
        value={gameId}
        options={GAMES.map(({name}) => ({ value: name, label: name.toUpperCase() }))}
        onChange={onSelectChange}
      />
      <Table items={navItems} />
    </Spacer>
  )
}

export default ScoreView
