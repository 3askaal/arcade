export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://arcade-server.herokuapp.com'
    : 'https://arcade-server.herokuapp.com' // http://localhost:1337

export const GAMES = [
  { name: 'tetris', color: '#A149FA', disabled: false },
  { name: 'snake', color: '#00FFAB', disabled: false },
  { name: 'minesweeper', color: '#FD0054', disabled: false },
  // { name: 'bomberman', color: '', disabled: true },
]

export const SCOREBOARD_SORTING: { [key: string]: string } = {
  minesweeper: 'value.time',
  tetris: 'value.points',
  snake: 'value.length'
}
