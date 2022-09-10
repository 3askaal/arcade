import { Box } from "3oilerplate";
import { Directions } from "./Directions/Directions";
import { Actions } from "./Actions/Actions";
import { Settings } from "./Settings/Settings";

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

export const Controls = ({ controls = {} }: ControlsParams) => {
  const { onUp, onDown, onLeft, onRight, onA, onB, onSelect, onStart } = controls;

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
