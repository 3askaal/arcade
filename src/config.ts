export const API_URL =
  process?.env?.NODE_ENV === 'production'
    ? 'https://arcade-server.herokuapp.com'
    : 'https://arcade-server.herokuapp.com' // http://localhost:1337

export const GAMES = [
  { name: 'tetris', color: '#A149FA', disabled: false },
  { name: 'snake', color: '#00FFAB', disabled: false },
  { name: 'minesweeper', color: '#FD0054', disabled: false },
]

export const SCOREBOARD_SORTING: { [key: string]: [string[], string[]] } = {
  minesweeper: [['value.time'], ['asc']],
  tetris: [['value.points', 'value.time'], ['desc', 'asc']],
  snake: [['value.length', 'value.time'], ['desc', 'asc']]
}
