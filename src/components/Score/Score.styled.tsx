import { s } from '3oilerplate'

export const SScore = s.div(() => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '.7em',
}))

export const SScoreDivider = s.div(() => ({
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
