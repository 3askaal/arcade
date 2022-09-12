import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider, GlobalStyle, theme } from '3oilerplate'
import deepmerge from 'deepmerge'
import ReactGA from 'react-ga4'
import { GameContext, GameProvider } from '../context'
import { HomeView, PlayView } from '../views'
import { LocalGlobalStyle } from '../style'
import { SApp } from './App.styled'
import { AppSidebar } from './Sidebar'
import { AppWrapper } from './AppWrapper'
import { THEME, THEME_LIGHT } from '../style/theme'
import { Themes } from '../modules'
import './fonts.css'

// export const history = createBrowserHistory({ forceRefresh: true })

ReactGA.initialize('G-ELXJS2W0GL', {
  testMode: process?.env?.NODE_ENV !== 'production'
})

function mergeTheme (baseTheme: any, theme: any) {
  return deepmerge(
    baseTheme,
    theme,
    { arrayMerge: (srcArray, overrideArray) => overrideArray }
  )
}

const App = () => {
  return (
    <BrowserRouter forceRefresh>
      <GameProvider>
        <GameContext.Consumer>
          {({ selectedGame, theme: themeKey }) => (
            <ThemeProvider theme={mergeTheme(mergeTheme(theme, themeKey === 'dark' ? THEME : THEME_LIGHT) || {}, selectedGame ? Themes[selectedGame] : {})}>
              <SApp>
                <GlobalStyle />
                <LocalGlobalStyle />
                {/* <SocketIOProvider url={SOCKET_URL}> */}
                <AppWrapper>
                  <Switch>
                    <Route exact path="/">
                      <HomeView />
                    </Route>
                    <Route exact path="/play/:gameId?">
                      <PlayView />
                    </Route>
                  </Switch>
                </AppWrapper>
                {/* </SocketIOProvider> */}
              </SApp>
            </ThemeProvider>
          )}
        </GameContext.Consumer>
      </GameProvider>
    </BrowserRouter>
  )
}

export default App
