import { Box } from "3oilerplate";
import { Directions } from "./Directions/Directions";
import { Actions } from "./Actions/Actions";
import { Options } from "./Options/Options";
import { createContext, useContext } from "react";
import { IControls, GameContext } from "../../context";
import { Contexts } from "../../modules";
import { useKey } from "rooks";

export const Controls = () => {
  const { selectedGame, menuActive, gameOver, onStart, controls: defaultControls, usingKeyboard } = useContext(GameContext)
  const { controls: currentControls }: { controls: IControls } = useContext((selectedGame && Contexts[selectedGame]) || createContext({}))
  const controls = (menuActive || gameOver) ? defaultControls : selectedGame ? currentControls : defaultControls
  const { onUp, onDown, onLeft, onRight, onA, onB, onSelect } = controls

  useKey(['w'], () => !usingKeyboard && onUp && onUp())
  useKey(['a'], () => !usingKeyboard && onLeft && onLeft())
  useKey(['s'], () => !usingKeyboard && onDown && onDown())
  useKey(['d'], () => !usingKeyboard && onRight && onRight())
  useKey(['ArrowUp'], () => onUp && onUp())
  useKey(['ArrowLeft'], () => onLeft && onLeft())
  useKey(['ArrowDown'], () => onDown && onDown())
  useKey(['ArrowRight'], () => onRight && onRight())
  useKey(['Space', 'Enter'], () => !usingKeyboard && onA && onA())
  useKey(['Shift'], () => !usingKeyboard && onB && onB())
  useKey([], () => !usingKeyboard && onSelect && onSelect())
  useKey(['Escape', 'Control', 'Meta', 'Alt'], () => !usingKeyboard && onStart && onStart())

  return (
    <Box s={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      maxWidth: '420px',
      px: 's'
    }}>
      <Box s={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        mb: '10%'
      }}>
        <Directions
          onUp={onUp}
          onLeft={onLeft}
          onDown={onDown}
          onRight={onRight}
        />
        <Actions
          onA={onA}
          onB={onB}
        />
      </Box>
      <Box s={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Options
          onStart={onStart}
          onSelect={onSelect}
        />
      </Box>
    </Box>
  )
}
