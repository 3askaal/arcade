import React, { FC } from 'react'
import { s, ButtonReset } from '3oilerplate'
import { times } from 'lodash'

const SButtonDot: any = s.div(({ side, index }: any) => ({
  position: 'absolute',
  width: '.25rem',
  height: '.25rem',
  backgroundColor: 'element.color',

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

export const CloseButton: FC<any> = ({ children, ...props }: any) => {
  return (
    <SButton sRef="Button" {...props}>
      <SButtonDot>
        { times(3, (index) => <SButtonDot side="topRight" index={index} key={`topRight-${index}`} /> ) }
        { times(3, (index) => <SButtonDot side="bottomRight" index={index} key={`bottomRight-${index}`} /> ) }
        { times(3, (index) => <SButtonDot side="bottomLeft" index={index} key={`bottomLeft-${index}`} /> ) }
        { times(3, (index) => <SButtonDot side="topLeft" index={index} key={`topLeft-${index}`} /> ) }
      </SButtonDot>
    </SButton>
  )
}
