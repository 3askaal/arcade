import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { ThemeProvider } from 'styled-components'
import { Home as HomeIcon, BarChart as BarChartIcon } from 'react-feather'
import { GlobalStyle, theme, Sidebar, List, ListItem, Spacer, Link } from '3oilerplate'
import deepmerge from 'deepmerge'
import ReactGA from 'react-ga4'
import { GameContext, GameProvider } from '../context'
import { HomeView, PlayView } from '../views'
import { LocalGlobalStyle } from '../style'
import { SApp } from './App.styled'
import { THEME } from '../style/theme'
import { Themes } from '../modules'
import './fonts.css'

export const history = createBrowserHistory()

ReactGA.initialize('G-ELXJS2W0GL', {
  testMode: process.env.NODE_ENV !== 'production'
})

const mergedTheme = deepmerge(theme, THEME, { arrayMerge: (srcArray, overrideArray) => overrideArray })

const App = () => {
  return (
    <Router history={history}>
      <GameProvider>
        <GameContext.Consumer>
          {({ selectedGame }) => (
            <ThemeProvider theme={deepmerge(mergedTheme, selectedGame ? Themes[selectedGame] : {}, { arrayMerge: (srcArray, overrideArray) => overrideArray })}>
              <SApp>
                <Sidebar>
                  <List>
                    <ListItem>
                      <Link s={{ color: 'white' }} to="/">
                        <Spacer size="s" s={{ flexDirection: 'row', alignItems: 'center' }}>
                          <HomeIcon />
                          <span>Home</span>
                        </Spacer>
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link s={{ color: 'white', opacity: .25, pointerEvents: 'none' }} to="/leaderboards">
                        <Spacer size="s" s={{ flexDirection: 'row', alignItems: 'center' }}>
                          <BarChartIcon />
                          <span>Leaderboards</span>
                        </Spacer>
                      </Link>
                    </ListItem>
                  </List>
                </Sidebar>
                <GlobalStyle />
                <LocalGlobalStyle />
                {/* <SocketIOProvider url={SOCKET_URL}> */}
                <Switch>
                  <Route exact path="/">
                    <HomeView />
                  </Route>
                  <Route exact path="/play/:gameId?">
                    <PlayView />
                  </Route>
                </Switch>
                {/* </SocketIOProvider> */}
              </SApp>
            </ThemeProvider>
          )}
        </GameContext.Consumer>
      </GameProvider>
    </Router>
  )
}

export default App
