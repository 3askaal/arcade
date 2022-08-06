import { TetrisMapContent } from "./tetris/components/MapContent";
import { SnakeMapContent } from "./snake/components/MapContent";
import { MinesweeperMapContent } from "./minesweeper/components/MapContent";
import { BombermanMapContent } from "./bomberman/components/MapContent";

import { TetrisControls } from "./tetris/components/Controls/Controls";
import { SnakeControls } from "./snake/components/Controls/Controls";
import { BombermanControls } from "./bomberman/components/Controls/Controls";

import { TetrisTheme } from "./tetris/theme";
import { SnakeTheme } from "./snake/theme";
import { MinesweeperTheme } from "./minesweeper/theme";
import { BombermanTheme } from "./bomberman/theme";

export const MapContent: any = {
  tetris: TetrisMapContent,
  snake: SnakeMapContent,
  minesweeper: MinesweeperMapContent,
  bomberman: BombermanMapContent,
}

export const MapDimensions: any = {
  tetris: { height: 36, width: 20 },
  snake: { width: 32, height: 32 },
  minesweeper: { width: 16, height: 16, mines: 40 },
  bomberman: { height: 16, width: 16 },
}

export const Controls: any = {
  tetris: TetrisControls,
  snake: SnakeControls,
  minesweeper: null,
  bomberman: BombermanControls,
}

export const Themes: any = {
  tetris: TetrisTheme,
  snake: SnakeTheme,
  minesweeper: MinesweeperTheme,
  bomberman: BombermanTheme,
}
