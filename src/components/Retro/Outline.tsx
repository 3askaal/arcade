import React, { FC, ReactElement } from 'react'
import { s } from '3oilerplate'


interface OutlineProps {
  color?: string;
  isSelected?: boolean;
}

interface OutlineBorderProps {
  side: string;
}

const SOutlineBorder = s.div(({ side }: OutlineBorderProps) => ({
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

export const SOutline = s.div(({ color, isSelected }: OutlineProps) =>
  ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    ...(isSelected && {
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
    },
  }
)

export const Outline: FC<OutlineProps> = ({ children, color, ...props }): ReactElement => {
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
