import React, { FC, ReactElement } from 'react'
import { s } from '3oilerplate'
import { times } from 'lodash'

export const ButtonReset: any = {
  backgroundColor: 'transparent',
  border: 0,
  outline: 0,
  cursor: 'pointer',
}

const SButtonDot: any = s.div(({ side, index }: any) => ({
  position: 'absolute',
  width: '.25rem',
  height: '.25rem',
  backgroundColor: 'grey20',

  ...((side === 'bottomLeft') && {
    left: `-.${25 * index}rem`,
    bottom: `-.${25 * index}rem`,
  }),

  ...((side === 'topLeft') && {
    left: `-.${25 * index}rem`,
    top: `-.${25 * index}rem`,
  }),

  ...((side === 'topRight') && {
    right: `-.${25 * index}rem`,
    top: `-.${25 * index}rem`,
  }),

  ...((side === 'bottomRight') && {
    right: `-.${25 * index}rem`,
    bottom: `-.${25 * index}rem`,
  })
}))

export const SButton: any = s.button(({ color }: any) =>
  ({
    ...ButtonReset,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 's',
    color: 'white',
    fontWeight: 'bold',
    width: '1.5rem',
    height: '1.5rem',

    '&:hover': {
      [SButtonDot]: {
        backgroundColor: color,

        '&:after': {
          backgroundColor: color,
        }
      }
    }
  })
)

export const CloseButton: FC<any> = ({ children, ...props }: any): ReactElement => {
  return (
    <SButton sRef="Button" {...props}>
      <SButtonDot>
        { times(3, (index) => <SButtonDot side="topRight" index={index} /> ) }
        { times(3, (index) => <SButtonDot side="bottomRight" index={index} /> ) }
        { times(3, (index) => <SButtonDot side="bottomLeft" index={index} /> ) }
        { times(3, (index) => <SButtonDot side="topLeft" index={index} /> ) }
      </SButtonDot>
    </SButton>
  )
}
