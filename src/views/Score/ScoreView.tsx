import React, { useEffect } from 'react'
import ReactGA4 from 'react-ga4'
import useAxios from 'axios-hooks'
import { API_URL } from '../../config'
import { useParams } from 'react-router-dom';
import { List } from '../../components/List/List';

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
  }, [])

  const formatScore = (score: string) => Object.entries(JSON.parse(score))
    .map(([key, value]) => `${key}: ${value}`)
    .join(' | ')

  const navItems = data?.map(({ name, score }: Score) =>
    ({
      name,
      value: formatScore(score || '{}')
    })
  ) || []

  return data && (
    <List items={navItems} />
  )
}

export default ScoreView
