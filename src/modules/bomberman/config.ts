export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://b0mberman-server.herokuapp.com/'
    : 'http://localhost:1337'

export const SOCKET_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://b0mberman-server.herokuapp.com/'
    : 'http://localhost:1337'

const AMOUNT_PLAYERS = {
  local: {
    max: 2,
    min: 2
  },
  online: {
    min: 2,
    max: 4,
  }
}

export const CONFIG: any = {
  API_URL,
  SOCKET_URL,
  AMOUNT_PLAYERS,
}
