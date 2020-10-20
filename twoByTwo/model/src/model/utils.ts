// @ts-nocheck
import { equals, flatten, pipe, filter, length, reject, sum, map, nth, find } from 'ramda';
import { TileValue, FIRST_QUADRANT, SECOND_QUADRANT, THIRD_QUADRANT, FOURTH_QUADRANT } from './types';

export const getQuadrant = (row: number, column: number): number => {
  if ([0, 1].includes(row) && [0, 1].includes(column)) return FIRST_QUADRANT;
  if ([0, 1].includes(row) && [2, 3].includes(column)) return SECOND_QUADRANT;
  if ([2, 3].includes(row) && [0, 1].includes(column)) return THIRD_QUADRANT;
  return FOURTH_QUADRANT;
};

const getNumbersInQuadrant = (board: number[][], quadrant: number): number[] =>
  flatten(board).filter((i, index) => {
    if (quadrant === FIRST_QUADRANT) return [0, 1, 4, 5].includes(index);
    if (quadrant === SECOND_QUADRANT) return [2, 3, 6, 7].includes(index);
    if (quadrant === THIRD_QUADRANT) return [8, 9, 12, 13].includes(index);
    return [10, 11, 14, 15].includes(index);
  });

export const numberInQuadrant = (board: number[][], tile: TileValue): number => {
  const quadrant = getQuadrant(tile.row, tile.col);

  return pipe(reject(equals(0)), length)(getNumbersInQuadrant(board, quadrant));
};

export const addNumbersInQuadrant = (board: number[][], tile: TileValue): number => {
  const quadrant = getQuadrant(tile.row, tile.col);
  return sum(getNumbersInQuadrant(board, quadrant));
};

export const sumOfNumbersInRow = (board: number[][], row: number): number => sum(board[row]);

export const numberOfNumbersInRow = (board: number[][], row: number): number =>
  pipe(reject(equals(0)), length)(board[row]);

export const numberOfNumbersInColumn = (board: number[][], column: number): number =>
  pipe(map(nth(column)), flatten, reject(equals(0)), length)(board);

export const sumOfNumbersInColumn = (board: number[][], column: number): number =>
  pipe(map(nth(column)), flatten, sum)(board);

export const getNumberInBoard = (board: number[][], numberToFind: number): number =>
  pipe(flatten, filter(equals(numberToFind)), length)(board);

export const getNumberInRow = (board: number[][], row: number, numberToFind: number): number => {
  return board[row].find((n: number) => n === numberToFind) ? 1 : 0;
}

export const getNumberInColumn = (board: number[][], column: number, numberToFind: number): number => {
  return board.map((row: number[]) => row[column]).flat().find((n: number) => n === numberToFind) ? 1 : 0;
}

export const getNumberInRowAndColumn = (board: number[][], tile: TileValue, numberToFind: number): number => {
  return getNumberInRow(board, tile.row, numberToFind) + getNumberInColumn(board, tile.col, numberToFind)
}

export const getNumberInGrouping = (board: number[][], tile: TileValue, numberToFind: number): number => {
  const quadrant = getQuadrant(tile.row, tile.col);
  return find(equals(numberToFind), getNumbersInQuadrant(board, quadrant)) ? 1 : 0;
}