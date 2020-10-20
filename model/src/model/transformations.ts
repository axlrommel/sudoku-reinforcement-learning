import { Entry, Observation } from './types';
import {
  getNumberInBoard,
  getNumberInGrouping,
  getNumberInRowAndColumn,
} from './utils';

export const fromStringToObjects = (blob: string): Entry => {
  const { col, row, value, board } = JSON.parse(blob);
  return {
    board,
    tileValue: {
      col,
      row,
      value,
    },
  };
};

export const buildObservationFromEntry = (entry: Entry): Observation => ({
  numberOfOnesInBoard: getNumberInBoard(entry.board, 1),
  numberOfTwosInBoard: getNumberInBoard(entry.board, 2),
  numberOfThreesInBoard: getNumberInBoard(entry.board, 3),
  numberOfFoursInBoard: getNumberInBoard(entry.board, 4),
  numberOfOnesInRowAndCol: getNumberInRowAndColumn(entry.board, entry.tileValue, 1),
  numberOfTwosInRowAndCol: getNumberInRowAndColumn(entry.board, entry.tileValue, 2),
  numberOfThreesInRowAndCol: getNumberInRowAndColumn(entry.board, entry.tileValue, 3),
  numberOfFoursInRowAndCol: getNumberInRowAndColumn(entry.board, entry.tileValue, 4),
  numberOfOnesInGrouping: getNumberInGrouping(entry.board, entry.tileValue, 1),
  numberOfTwosInGrouping: getNumberInGrouping(entry.board, entry.tileValue, 2),
  numberOfThreesInGrouping: getNumberInGrouping(entry.board, entry.tileValue, 3),
  numberOfFoursInGrouping: getNumberInGrouping(entry.board, entry.tileValue, 4),
  value: entry.tileValue.value,
});
