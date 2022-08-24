
import React, { useContext } from 'react'
import { Home as HomeIcon, BarChart as BarChartIcon, Settings as SettingsIcon } from 'react-feather'
import { Sidebar, List, ListItem, Spacer, Link, Box, Switch, Text } from '3oilerplate'
import { HamburgerButton } from '../components/Button/Hamburger'
import { CloseButton } from '../components/Button/Close'
import { GameContext } from '../context'

export const AppSidebar = () => {
  const { setGameActive, setTheme, theme } = useContext(GameContext)

  return (
    <Sidebar
      s={{
        backgroundColor: 'element.background'
      }}
      closeButton={<CloseButton />}
      openButton={<HamburgerButton />}
      onOpen={() => setGameActive(false)}
      onClose={() => setGameActive(true)}
    >
      <Spacer>
        <List s={{ marginTop: '-1px' }}>
          <ListItem>
            <Link s={{ color: 'element.color' }} to="/">
              <Spacer size="s" s={{ flexDirection: 'row', alignItems: 'center' }}>
                <HomeIcon size={16} />
                <span>Home</span>
              </Spacer>
            </Link>
          </ListItem>
          <ListItem>
            <Link s={{ color: 'element.color', opacity: .25, pointerEvents: 'none' }} to="/leaderboards">
              <Spacer size="s" s={{ flexDirection: 'row', alignItems: 'center' }}>
                <BarChartIcon size={16} />
                <span>Leaderboards</span>
              </Spacer>
            </Link>
          </ListItem>
          <ListItem>
            <Link s={{ color: 'element.color', opacity: .25, pointerEvents: 'none' }} to="/settings">
              <Spacer size="s" s={{ flexDirection: 'row', alignItems: 'center' }}>
                <SettingsIcon size={16} />
                <span>Settings</span>
              </Spacer>
            </Link>
          </ListItem>
        </List>
        <Box
          s={{
            display: 'flex',
            width: '100%',
            px: 's',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Text size='xs'>Dark Theme</Text>
          <Switch initialValue={theme === 'dark'} onChange={(value: boolean) => setTheme(!value ? 'light' : 'dark')} />
        </Box>
      </Spacer>
    </Sidebar>
  )
}
