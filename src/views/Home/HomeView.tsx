import React from 'react'
import { Spacer, Container, Wrapper, Link } from '3oilerplate'
import { capitalize } from 'lodash'
import { Button } from '../../components/Button/Button'
import { GAMES } from '../../config/config'

const PlayView = () => {
  return (
    <Wrapper s={{ p: ['s', 'm', 'l'] }}>
      <Container s={{ p: 0, maxWidth: '240px' }}>
        <Spacer size="l" s={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          { GAMES.map(({ name, color, disabled }) => (
            <Link to={`/play/${name}`} s={{ textDecoration: 'none', pointerEvents: disabled && 'none' }}>
              <Button isBlock isDisabled={disabled} color={color}>{ capitalize(name) }</Button>
            </Link>
          ))}
        </Spacer>
      </Container>
    </Wrapper>
  )
}

export default PlayView
