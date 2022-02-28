import React, { useContext, useRef } from 'react'
import { Box } from '3oilerplate'
import { SPlayerDetails, SPlayerDetailsButton } from './PlayerDetails.styled'
import {
  ChevronLeft,
  ChevronRight,
  ArrowDown,
  RotateCw
} from 'react-feather'
import isMobile from 'is-mobile'
import { GameContext } from '../../context'
import { useButton } from '@react-aria/button'

const isDesktop = !isMobile()

const PlayerDetailsButton = (props: any) => {
  let ref = useRef<any>();
  let { buttonProps } = useButton(props, ref);
  let { children } = props;

  return (
    <SPlayerDetailsButton
      { ...props }
      { ...buttonProps }
      ref={ref}
    >
      { children }
    </SPlayerDetailsButton>
  );
}

export const PlayerDetails = ({ s }: any) => {
  const { moveX, drop, rotate } = useContext(GameContext)

  return (
    <SPlayerDetails s={s} isDesktop={isDesktop}>
      <PlayerDetailsButton
        onPress={() => moveX('left')}
        type={'MOVE'}
        isDesktop={isDesktop}
      >
        <ChevronLeft size={14} />
      </PlayerDetailsButton>
      <PlayerDetailsButton
        onPress={() => rotate()}
        type={'SHIFT'}
        isDesktop={isDesktop}
      >
        <RotateCw size={14} />
        <Box>{ isDesktop ? 'SHIFT' : '' }</Box>
      </PlayerDetailsButton>
      <PlayerDetailsButton
        onPress={() => drop()}
        type={'SPACE'}
        isDesktop={isDesktop}
      >
        <Box>{ isDesktop ? 'SPACE' : '' }</Box>
        <ArrowDown size={14} />
      </PlayerDetailsButton>
      <PlayerDetailsButton
        onPress={() => moveX('right')}
        type={'MOVE'}
        isDesktop={isDesktop}
      >
        <ChevronRight size={14} />
      </PlayerDetailsButton>
    </SPlayerDetails>
  )
}
