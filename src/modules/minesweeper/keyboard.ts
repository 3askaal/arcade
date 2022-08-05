import React, { useContext } from "react"
import useMousetrap from "react-hook-mousetrap"

export function useMinesweeperKeyboard() {
  useMousetrap('w', () => {})
  useMousetrap('s', () => {})
  useMousetrap('a', () => {})
  useMousetrap('d', () => {})
  useMousetrap('shift', () => {})
}
