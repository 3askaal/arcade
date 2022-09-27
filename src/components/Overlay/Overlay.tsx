import { s, rgba } from '3oilerplate'

export const Overlay = s.div(({ theme }: any) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  p: 'l',
  backgroundColor: rgba(theme.colors.grey90, .96),
  zIndex: 1000
}))
