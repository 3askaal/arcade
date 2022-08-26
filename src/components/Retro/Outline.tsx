import React, { FC, ReactElement } from 'react'
import { s } from '3oilerplate'

const SOutlineBorder: any = s.div(({ side, theme, color = 'grey40' }: any) => ({
  position: 'absolute',
  [side]: '-.25rem',
  backgroundColor: 'element.border',

  ...((side === 'top' || side === 'bottom') && {
    width: 'calc(100% - .5rem)',
    height: '.25rem',
  }),

  ...((side === 'left' || side === 'right') && {
    height: 'calc(100% - .5rem)',
    width: '.25rem',
  }),

  '&:after': {
    content: "''",
    display: 'block',
    position: 'absolute',
    width: '.25rem',
    height: '.25rem',
    backgroundColor: 'element.border',

    ...((side === 'top') && {
      left: '-.25rem',
      bottom: '-.25rem',
    }),

    ...((side === 'right') && {
      left: '-.25rem',
      top: '-.25rem',
    }),

    ...((side === 'bottom') && {
      right: '-.25rem',
      top: '-.25rem',
    }),

    ...((side === 'left') && {
      right: '-.25rem',
      bottom: '-.25rem',
    })
  }
}))

export const SOutline: any = s.div(({ color, selected }: any) =>
  ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&:hover': {
      [SOutlineBorder]: {
        backgroundColor: color,

        '&:after': {
          backgroundColor: color,
        }
      }
    },

    ...(selected && {
      [SOutlineBorder]: {
        backgroundColor: color,

        '&:after': {
          backgroundColor: color,
        }
      }
    })
  }),
  {
    isDisabled: {
      opacity: '.4'
    }
  }
)

export const Outline: FC<any> = ({ children, color, ...props }: any): ReactElement => {
  return (
    <SOutline sRef="Button" {...props} color={color}>
      <SOutlineBorder side="top" color={color} />
      <SOutlineBorder side="left" color={color} />
      <SOutlineBorder side="right" color={color} />
      <SOutlineBorder side="bottom" color={color} />
      { children }
    </SOutline>
  )
}
