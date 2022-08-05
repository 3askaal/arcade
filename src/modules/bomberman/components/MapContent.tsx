import React, { useContext } from "react"
import { BombermanContext } from "../context/BombermanContext"
import { useBombermanKeyboard } from "../keyboard"
import { Explosion } from "./Explosion/Explosion"
import { SMapBomb, SMapBrick, SMapCharacter, SMapStone } from "./MapContent.styled"

export const BombermanMapContent = ({ blockSize }: any) => {
  const { activePlayers, stones, bricks, bombs, explosions } = useContext(BombermanContext)

  useBombermanKeyboard()

  return (
    <>
      { activePlayers.map(({x, y, color}: any, index: number) => (
        <SMapCharacter
          key={index}
          s={{
            transform: `translate3d(${x}rem, ${y}rem, 0)`
          }}
          color={color}
        />
      )) }
      { stones.map(({x, y}: any, index: number) => (
        <SMapStone
          key={index}
          s={{
            left: `${x}rem`,
            top: `${y}rem`
          }}
        />
      )) }
      { bricks.map(({x, y}: any, index: number) => (
        <SMapBrick
          key={index}
          s={{
            left: `${x}rem`,
            top: `${y}rem`,
          }}
        />
      )) }
      { bombs ? Object.values(bombs).map(({x, y}: any, index: number) => (
        <SMapBomb
          key={index}
          s={{
            left: `${x}rem`,
            top: `${y}rem`,
          }}
        />
      )) : null }
      { explosions ? Object.values(explosions).map((explosion: any, index: number) => (
        <Explosion
          key={index}
          explosion={explosion}
          index={index}
        />
      )) : null }
    </>
  )
}
