import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { ThemeProvider } from 'styled-components'
import ReactGA from 'react-ga4'
import { GlobalStyle, theme } from '3oilerplate'
import deepmerge from 'deepmerge'
import { GameContext, GameProvider } from '../context'
import { PlayView } from '../views'
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
    <GameProvider>
      <GameContext.Consumer>
        {({ selectedGame }) => (
          <ThemeProvider theme={deepmerge(mergedTheme, selectedGame ? Themes[selectedGame] : {}, { arrayMerge: (srcArray, overrideArray) => overrideArray })}>
            <SApp>
              <GlobalStyle />
              <LocalGlobalStyle />
              <Router history={history}>
                {/* <SocketIOProvider url={SOCKET_URL}> */}
                  <Switch>
                    {/* <Route exact path="/">
                      <HomeView />
                    </Route> */}
                    {/* <SocketProvider> */}
                      {/* <Route exact path="/setup">
                        <SetupView />
                      </Route>
                      <Route exact path="/rooms">
                        <RoomsView />
                      </Route>
                      <Route exact path="/rooms/:roomId">
                        <LobbyView />
                      </Route> */}
                    <Route exact path="/">
                      <PlayView />
                    </Route>
                    {/* </SocketProvider> */}
                  </Switch>
                {/* </SocketIOProvider> */}
              </Router>
            </SApp>
          </ThemeProvider>
        )}
      </GameContext.Consumer>
    </GameProvider>
  )
}

export default App
