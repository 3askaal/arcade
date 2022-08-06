import React, { FC, ReactElement } from 'react'
import { s } from '3oilerplate'

export const ButtonReset: any = {
  backgroundColor: 'transparent',
  border: 0,
  outline: 0,
  cursor: 'pointer',
}

const SButtonBorder: any = s.div(({ side }: any) => ({
  position: 'absolute',
  [side]: '-.25rem',
  backgroundColor: 'grey20',

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
    backgroundColor: 'white',

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

export const SButton: any = s.button(({ color }: any) =>
  ({
    ...ButtonReset,
    position: 'relative',
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 's',
    paddingX: 'm',
    paddingY: 's',
    color: 'white',
    fontWeight: 'bold',

    '&:hover': {
      color,

      [SButtonBorder]: {
        backgroundColor: color,

        '&:after': {
          backgroundColor: color,
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



export const Button: FC<any> = ({ children, ...props }: any): ReactElement => {
  return (
    <SButton sRef="Button" {...props}>
      <SButtonBorder side="top" />
      <SButtonBorder side="left" />
      <SButtonBorder side="right" />
      <SButtonBorder side="bottom" />
      { children }
    </SButton>
  )
}

Button.displayName = 'Button'
