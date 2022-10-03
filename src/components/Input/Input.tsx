import React, { FC, ReactElement, useContext, useEffect, useState } from 'react'
import { s } from '3oilerplate'
import { Outline } from '../Retro/Outline'
import { GameContext } from '../../context'

export const SInputWrapper = s.div(({ color, selected }: any) =>
  ({
    position: 'relative',
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 's',
    color: 'white',
  }),
  {
    disabled: {
      opacity: '.4'
    }
  },
)

export const SInput = s.input(({ color, selected }: any) =>
  ({
    width: '100%',
    alignItems: 'center',
    paddingX: 'm',
    paddingY: 's',
    color: 'white',
    backgroundColor: 'transparent',
    border: 0,
    zIndex: 1000,
    appearance: 'none',
    outline: 'none',
    textTransform: 'uppercase',

    ...(selected && {
      '+ * > *': {
        backgroundColor: '#fff',

        ':after,:before': {
          backgroundColor: '#fff',
        }
      }
    })
  })
)

export const Input: FC<any> = ({ children, selected, ...props }): ReactElement => {
  const { setUsingKeyboard } = useContext(GameContext)

  useEffect(() => {
    console.log('selected: ', selected)
    setUsingKeyboard(selected)
  }, [selected])

  return (
    <SInputWrapper>
      { selected ? (
        <SInput type="text" autoFocus={true} selected={selected} {...props} />
      ) : (
        <SInput type="text" selected={selected} {...props} />
      )}
      <Outline isSelected={props.selected} />
    </SInputWrapper>
  )
}
