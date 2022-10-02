import { s } from '3oilerplate'

export const STable = s.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'flex-end',
  fontSize: '.8em'
})

export const STableHeader = s.div({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  mb: 'm'
})

export const STableBody = s.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  overflowY: 'scroll',
  alignItems: 'center'
})

export const STableRow = s.div({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  borderRadius: 's',
  paddingY: 's',
  color: 'grey30',

  '+ *': {
    borderTop: '.25rem solid',
    borderColor: 'grey20'
  }
})

export const STableRowStats = s.div({
  position: 'relative',
  display: 'flex',
  justifyContent: 'flex-end'
})

export const STableCell = s.div({
  minWidth: '20%',
  textAlign: 'right'
})
