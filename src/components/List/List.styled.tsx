import { s } from '3oilerplate'
import { ListItem } from './List'

export const SList = s.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
})

export const SListItem = s.div(({ isSelected }: ListItem) =>
  ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 's',
    paddingY: 's',
    color: 'grey60',

    ...(isSelected && {
      color: 'white',
    }),

    '+ *': {
      borderTop: '.25rem solid white'
    }
  })
)
