import { BombermanMapContent } from "./bomberman/components/MapContent";
import { MinesweeperMapContent } from "./minesweeper/components/MapContent";
import { SnakeMapContent } from "./snake/components/MapContent";
import { TetrisMapContent } from "./tetris/components/MapContent";

export const MapContent: any = {
  tetris: TetrisMapContent,
  bomberman: BombermanMapContent,
  snake: SnakeMapContent,
  minesweeper: MinesweeperMapContent
}

export const MapDimensions: any = {
  tetris: { height: 36, width: 20 },
  bomberman: { height: 16, width: 16 },
  snake: { width: 32, height: 32 },
  minesweeper: { width: 16, height: 16, mines: 40 },
}
