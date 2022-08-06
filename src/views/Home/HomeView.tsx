import React, { useContext } from 'react'
import { Spacer, Container, Wrapper, Button, Row, Col, Link } from '3oilerplate'
// import { Link } from 'react-router-dom'
import { capitalize } from 'lodash'

const PlayView = () => {
  const games = ['tetris', 'snake', 'minesweeper', 'bomberman']

  return (
    <Wrapper s={{ p: ['s', 'm', 'l'] }}>
      <Container s={{ p: 0, maxWidth: '600px' }}>
        <Spacer size="xl" s={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <Row>
            { games.map((game) => (
              <Col width={100} key={game}>
                <Link to={`/play/${game}`} s={{ pointerEvents: game === 'bomberman' && 'none' }}>
                  <Button isBlock isDisabled={game === 'bomberman'}>{ capitalize(game) }</Button>
                </Link>
              </Col>
            ))}
          </Row>
        </Spacer>
      </Container>
    </Wrapper>
  )
}

export default PlayView
