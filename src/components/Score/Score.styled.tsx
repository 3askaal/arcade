import { s } from '3oilerplate'

export const SScore = s.div(() => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '.6em',
  fontWeight: 'bold',
  fontFamily: 'retro',
  marginBottom: 'l',
  paddingTop: 'xxs',
  paddingBottom: 's',
  margin: 'auto',
  height: '2rem',
}))

export const SScoreDivider = s.div(() => ({
  display: 'block',
  position: 'relative',
  width: '.125rem',
  height: '100%',
  backgroundColor: 'grey90',

  '+ *': {
    marginLeft: 's'
  }
}))

export const SScoreItem = s.div(() => ({
  '+ *': {
    marginLeft: 's'
  }
}))
