import { Box } from "3oilerplate";
import { Directions } from "./Directions/Directions";
import { Actions } from "./Actions/Actions";
import { Settings } from "./Settings/Settings";
import { createContext, useContext } from "react";
import { GameContext } from "../../context";
import { Contexts } from "../../modules";

interface ControlsParams {
  controls: {
    onUp?: Function;
    onDown?: Function;
    onLeft?: Function;
    onRight?: Function;
    onA?: Function;
    onB?: Function;
    onSelect?: Function;
    onStart?: Function;
  }
}

export const Controls = () => {
  const { onStart, controls } = useContext(GameContext)
  const { selectedGame, menuActive } = useContext(GameContext)
  const { controls: currentControls }: any = useContext((selectedGame && Contexts[selectedGame]) || createContext({}))
  const { onUp, onDown, onLeft, onRight, onA, onB, onSelect }: any = menuActive ? controls : selectedGame ? currentControls : controls

  return (
    <Box s={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      maxWidth: '420px',
      px: 'm'
    }}>
      <Box s={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        mb: 'xxl'
      }}>
        <Directions controls={{ onUp, onDown, onLeft, onRight }} />
        <Actions controls={{ onA, onB }} />
      </Box>
      <Box s={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Settings controls={{ onSelect, onStart }}></Settings>
      </Box>
    </Box>
  )
}
