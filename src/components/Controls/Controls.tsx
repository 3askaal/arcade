import { Box } from "3oilerplate";
import { Directions } from "./Directions/Directions";
import { Actions } from "./Actions/Actions";
import { Settings } from "./Settings/Settings";
import { createContext, useContext } from "react";
import { IControls, GameContext } from "../../context";
import { Contexts } from "../../modules";
import { useKey } from "rooks";

export const Controls = () => {
  const { selectedGame, menuActive, gameOver, onStart, controls: defaultControls } = useContext(GameContext)
  const { controls: currentControls }: { controls: IControls } = useContext((selectedGame && Contexts[selectedGame]) || createContext({}))
  const controls = (menuActive || gameOver) ? defaultControls : selectedGame ? currentControls : defaultControls
  const { onUp, onDown, onLeft, onRight, onA, onB, onSelect } = controls

  useKey(['w', 'ArrowUp'], () => onUp && onUp())
  useKey(['a', 'ArrowLeft'], () => onLeft && onLeft())
  useKey(['s', 'ArrowDown'], () => onDown && onDown())
  useKey(['d', 'ArrowRight'], () => onRight && onRight())
  useKey(['Space', 'Enter'], () => onA && onA())
  useKey(['Shift'], () => onB && onB())
  useKey([], () => onSelect && onSelect())
  useKey(['Escape', 'Control', 'Meta', 'Alt'], () => onStart && onStart())

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
        mb: '8%'
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
        <Settings
          onStart={onStart}
          onSelect={onSelect}
        />
      </Box>
    </Box>
  )
}
