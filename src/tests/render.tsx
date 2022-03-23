import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { ThemeProvider, theme } from '3oilerplate'
import { MemoryRouter } from 'react-router-dom'
import { GameContext, GameProvider } from '../context'

const wrapper = (
  ui: any,
  { history, value: mockedValue, theme: mockedTheme, ...options }: any = {},
): renderer.ReactTestRenderer => {
  return renderer.create(
    <GameProvider>
      <ThemeProvider theme={{ ...theme, ...mockedTheme }}>
        <MemoryRouter initialEntries={history} initialIndex={0}>
          {ui}
        </MemoryRouter>
      </ThemeProvider>
    </GameProvider>,
    options,
  )
}

export default wrapper