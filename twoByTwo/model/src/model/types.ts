export const FIRST_QUADRANT = 1;
export const SECOND_QUADRANT = 2;
export const THIRD_QUADRANT = 3;
export const FOURTH_QUADRANT = 4;

export interface TileValue {
  row: number;
  col: number;
  value: number;
}

export interface Entry {
  board: number[][];
  tileValue: TileValue;
}

export interface Observation {
  numberOfOnesInBoard: number;
  numberOfTwosInBoard: number;
  numberOfThreesInBoard: number;
  numberOfFoursInBoard: number;
  sumInQuadrant: number;
  numberInQuadrant: number;
  sumInRow: number;
  numberInRow: number;
  sumInColumn: number;
  numberInColumn: number;
  value: number;
}
