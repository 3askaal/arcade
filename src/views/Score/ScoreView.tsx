import React, { useEffect } from 'react'
import ReactGA4 from 'react-ga4'
import useAxios from 'axios-hooks'
import { API_URL } from '../../config'
import { useParams } from 'react-router-dom';
import { List } from '../../components/List/List';
import { sortBy } from 'lodash';

interface Score {
  gameId: string;
  name: string;
  score: string;
}

const ScoreView = () => {
  const { gameId } = useParams<{ gameId?: string }>()
  const [{ data }, refetch] = useAxios(`${API_URL}/score/${gameId || ''}`)

  useEffect(() => {
    ReactGA4.send({
      hitType: "pageview",
      page: `/score`
    });
  }, [data])

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
    'value.time'
  ).map(({ name, value }) => ({ name, value: formatScore(value) })) || []

  return data && (
    <List items={navItems} />
  )
}

export default ScoreView
