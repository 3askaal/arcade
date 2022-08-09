
import React, { useContext } from 'react'
import { Home as HomeIcon, BarChart as BarChartIcon, Settings as SettingsIcon } from 'react-feather'
import { Sidebar, List, ListItem, Spacer, Link } from '3oilerplate'
import { HamburgerButton } from '../components/Button/Hamburger'
import { CloseButton } from '../components/Button/Close'
import { GameContext } from '../context'

export const AppSidebar = () => {
  const { setGameActive } = useContext(GameContext)

  return (
    <Sidebar
      closeButton={<CloseButton />}
      openButton={<HamburgerButton />}
      onOpen={() => setGameActive(false)}
      onClose={() => setGameActive(true)}
    >
      <List s={{ marginTop: '-1px' }}>
        <ListItem>
          <Link s={{ color: 'white' }} to="/">
            <Spacer size="s" s={{ flexDirection: 'row', alignItems: 'center' }}>
              <HomeIcon size={16} />
              <span>Home</span>
            </Spacer>
          </Link>
        </ListItem>
        <ListItem>
          <Link s={{ color: 'white', opacity: .25, pointerEvents: 'none' }} to="/leaderboards">
            <Spacer size="s" s={{ flexDirection: 'row', alignItems: 'center' }}>
              <BarChartIcon size={16} />
              <span>Leaderboards</span>
            </Spacer>
          </Link>
        </ListItem>
        <ListItem>
          <Link s={{ color: 'white', opacity: .25, pointerEvents: 'none' }} to="/settings">
            <Spacer size="s" s={{ flexDirection: 'row', alignItems: 'center' }}>
              <SettingsIcon size={16} />
              <span>Settings</span>
            </Spacer>
          </Link>
        </ListItem>
      </List>
    </Sidebar>
  )
}
