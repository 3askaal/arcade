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

    ':focus': {
      '+ * > *': {
        backgroundColor: '#fff',

        ':after,:before': {
          backgroundColor: '#fff',
        }
      }
    }
  })
)

export const Input: FC<any> = ({ children, focus, ...props }): ReactElement => {
  const { setUsingKeyboard } = useContext(GameContext)
  const [renderInput, setRenderInput] = useState(true)

  useEffect(() => {
    setRenderInput(false)

    setTimeout(() => {
      setRenderInput(true)
    }, 10)

    setUsingKeyboard(focus)
  }, [focus])

  return (
    <SInputWrapper>
      { renderInput && <SInput type="text" autoFocus={focus} {...props} /> }
      <Outline isSelected={props.selected} />
    </SInputWrapper>
  )
}
