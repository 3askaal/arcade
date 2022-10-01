import React, { useEffect } from 'react'
import ReactGA4 from 'react-ga4'
import { Box } from '3oilerplate'
import { Menu } from '../../components/Menu/Menu'
import { useHistory } from 'react-router-dom'

const PlayView = () => {
  const history = useHistory()

  useEffect(() => {
    ReactGA4.send({
      hitType: "pageview",
      page: `/`
    });
  }, [])

  const navItems = [
    { name: 'tetris', color: '#A149FA', action: () => history.push(`/play/tetris`) },
    { name: 'snake', color: '#00FFAB', action: () => history.push(`/play/snake`) },
    { name: 'minesweeper', color: '#FD0054', action: () => history.push(`/play/minesweeper`) },
  ];

  return (
    <Box df aic h100p>
      <Menu items={navItems} />
    </Box>
  )
}

export default PlayView
