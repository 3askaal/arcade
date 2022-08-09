import React, { FC, ReactElement } from 'react'
import { s } from '3oilerplate'

export const ButtonReset: any = {
  backgroundColor: 'transparent',
  border: 0,
  outline: 0,
  cursor: 'pointer',
}

const SOutlineBorder: any = s.div(({ side, theme, color }: any) => ({
  position: 'absolute',
  [side]: '-.25rem',
  backgroundColor: color || 'grey20',

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
    backgroundColor: color || 'grey20',

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

export const SOutline: any = s.div(({ color }: any) =>
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
        backgroundColor: color || 'grey20',

        '&:after': {
          backgroundColor: color || 'grey20',
        }
      }
    }
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
