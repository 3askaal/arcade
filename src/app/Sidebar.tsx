
import React from 'react'
import { Home as HomeIcon, BarChart as BarChartIcon, Settings as SettingsIcon } from 'react-feather'
import { Sidebar, List, ListItem, Spacer, Link } from '3oilerplate'

export const AppSidebar = () => {
  return (
    <Sidebar>
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
