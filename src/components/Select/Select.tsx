import React, { FC, ReactElement, useEffect, useRef } from 'react'
import { s } from '3oilerplate'
import SelectEl from 'react-select'
import { Outline } from '../Retro/Outline'
import styled from 'styled-components'

export const SSelectWrapper = s.div(({ color, selected }: any) =>
  ({
    position: 'relative',
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 's',
    color: 'white',

    select: {
      zIndex: 10000
    }
  }),
  {
    disabled: {
      opacity: '.4'
    }
  },
)

export const SSelect = styled.select(({ theme, color, selected }: any): any =>
  ({
    width: '100%',
    alignItems: 'center',
    paddingLeft: theme?.space?.m,
    paddingRight: theme?.space?.m,
    paddingTop: theme?.space?.s,
    paddingBottom: theme?.space?.s,
    color: 'white',
    backgroundColor: 'transparent',
    border: 0,
    zIndex: 1000,
    appearance: 'none',
    outline: 'none',
    // textTransform: 'uppercase',

    // ':focus': {
    //   '+ * > *': {
    //     backgroundColor: '#fff',

    //     ':after,:before': {
    //       backgroundColor: '#fff',
    //     }
    //   }
    // },
  })
)

export const Select: FC<any> = ({ children, focus, options, ...props }): ReactElement => {
  const ref = useRef<any>(null)

  useEffect(() => {
    if (ref.current && focus) {
      console.log(ref.current)
      ref.current.focus()
    }
  }, [ref, focus])

  return (
    <SSelectWrapper>
      <Outline isSelected={props.selected} />
      <SSelect ref={ref} {...props}>
        {options && options.map((option: any) => (
          <option
            value={option.value}
            key={`selectOption${option.value}`}
            selected={option.selected}
            data-testid="select-option"
          >
            {option.label}
          </option>
        ))}
      </SSelect>
    </SSelectWrapper>
  )
}

// export const Select = React.forwardRef((
//   {...props}: any,
//   ref: ((instance: HTMLInputElement | null) => void) | React.MutableRefObject<HTMLInputElement | null> | null
// ) => {
//   return <SelectComp ref={ref} {...props} />
// })
