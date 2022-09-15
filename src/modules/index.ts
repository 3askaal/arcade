import { TetrisMapContent } from "./tetris/components/TetrisMap";
import { SnakeMapContent } from "./snake/components/SnakeMap";
import { MinesweeperMapContent } from "./minesweeper/components/MinesweeperMap";

import { TetrisTheme } from "./tetris/theme";
import { SnakeTheme } from "./snake/theme";
import { MinesweeperTheme } from "./minesweeper/theme";

import { TetrisContext } from "./tetris/context/TetrisContext";
import { SnakeContext } from "./snake/context/SnakeContext";
import { MinesweeperContext } from "./minesweeper/context/MinesweeperContext";

export const Contexts: any = {
  tetris: TetrisContext,
  snake: SnakeContext,
  minesweeper: MinesweeperContext,
}

export const MapContent: any = {
  tetris: TetrisMapContent,
  snake: SnakeMapContent,
  minesweeper: MinesweeperMapContent,
}

export const MapDimensions: any = {
  tetris: { height: 36, width: 20 },
  snake: { width: 32, height: 32 },
  minesweeper: { width: 16, height: 16, mines: 40 },
  bomberman: { height: 16, width: 16 },
}

export const Themes: any = {
  tetris: TetrisTheme,
  snake: SnakeTheme,
  minesweeper: MinesweeperTheme,
}
