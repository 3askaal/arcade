import { s } from '3oilerplate'

export const SScore = s.div(({ theme, isDesktop }: any) => ({
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
}))

export const SScoreDivider = s.div(({ color }: any) => ({
  display: 'block',
  position: 'relative',
  width: '.125rem',
  height: '100%',
  backgroundColor: 'grey90',

  '+ *': {
    marginLeft: 's'
  }
}))

export const SScoreItem = s.div(({ color }: any) => ({
  '+ *': {
    marginLeft: 's'
  }
}))
