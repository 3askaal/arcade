import React, { useContext, useRef } from 'react'
import { Box } from '3oilerplate'
import { SControls, SControlsButton } from './Controls.styled'
import {
  ChevronLeft,
  ChevronRight,
  ArrowDown,
  RotateCw
} from 'react-feather'
import { isMobile } from 'is-mobile'
import { useButton } from '@react-aria/button'
import useBreakpoint from 'use-breakpoint';
import { TetrisContext } from '../../context/TetrisContext'

const BREAKPOINTS = { mobile: 0, desktop: 768 }

export const Button = ({ onPress, ...props }: any) => {
  let ref = useRef<any>();
  let { buttonProps, isPressed } = useButton({ onPress, ...props }, ref);
  let { children } = props;

  return (
    <SControlsButton
      { ...buttonProps }
      { ...props }
      isPressed={isPressed}
      ref={ref}
    >
      { children }
    </SControlsButton>
  );
}

export const TetrisControls = ({ s }: any) => {
  const { onMoveX, onDrop, onRotate } = useContext(TetrisContext)
  const { breakpoint } = useBreakpoint(BREAKPOINTS, 'desktop');
  const isDesktop = !isMobile({ tablet: true }) && breakpoint === 'desktop'

  return (
    <SControls s={s} isDesktop={isDesktop}>
      <Button
        onPress={() => onMoveX('left')}
        type={'MOVE'}
        data-testid="move-left"
        isDesktop={isDesktop}
      >
        <ChevronLeft size={14} />
      </Button>
      <Button
        onPress={() => onRotate()}
        type={'SHIFT'}
        data-testid="rotate"
        isDesktop={isDesktop}
      >
        <RotateCw size={14} />
        <Box>{ isDesktop ? 'SHIFT' : '' }</Box>
      </Button>
      <Button
        onPress={() => onDrop()}
        type={'SPACE'}
        data-testid="drop"
        isDesktop={isDesktop}
      >
        <Box>{ isDesktop ? 'SPACE' : '' }</Box>
        <ArrowDown size={14} />
      </Button>
      <Button
        onPress={() => onMoveX('right')}
        type={'MOVE'}
        data-testid="move-right"
        isDesktop={isDesktop}
      >
        <ChevronRight size={14} />
      </Button>
    </SControls>
  )
}