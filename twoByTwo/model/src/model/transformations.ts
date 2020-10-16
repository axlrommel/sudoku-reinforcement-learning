import { Entry, Observation } from "./types";
import { addNumbersInQuadrant, getNumberInBoard, numberInQuadrant, numberOfNumbersInColumn, numberOfNumbersInRow, sumOfNumbersInColumn, sumOfNumbersInRow } from "./utils";

export const fromStringToObjects = (blob: string): Entry => {
  const { col, row, value, board } = JSON.parse(blob);
  return {
    board,
    tileValue: {
      col,
      row,
      value
    }
  }
};

export const buildObservationFromEntry = (entry: Entry): Observation => ({
  numberOfOnesInBoard: getNumberInBoard(entry.board, 1),
  numberOfTwosInBoard: getNumberInBoard(entry.board, 2),
  numberOfThreesInBoard: getNumberInBoard(entry.board, 3),
  numberOfFoursInBoard: getNumberInBoard(entry.board, 4),
  sumInQuadrant: addNumbersInQuadrant(entry.board, entry.tileValue),
  numberInQuadrant: numberInQuadrant(entry.board, entry.tileValue),
  sumInRow: sumOfNumbersInRow(entry.board, entry.tileValue.row),
  numberInRow: numberOfNumbersInRow(entry.board, entry.tileValue.row),
  sumInColumn: sumOfNumbersInColumn(entry.board, entry.tileValue.col),
  numberInColumn: numberOfNumbersInColumn(entry.board, entry.tileValue.col),
  value: entry.tileValue.value
})

export const duplicateBySwitchingRowsAndCols = (observation: Observation): Observation => ({
  numberOfOnesInBoard: observation.numberOfOnesInBoard,
  numberOfTwosInBoard: observation.numberOfTwosInBoard,
  numberOfThreesInBoard: observation.numberOfThreesInBoard,
  numberOfFoursInBoard: observation.numberOfFoursInBoard,
  sumInQuadrant: observation.sumInQuadrant,
  numberInQuadrant: observation.numberInQuadrant,
  sumInRow: observation.sumInColumn,
  numberInRow: observation.numberInColumn,
  sumInColumn: observation.sumInRow,
  numberInColumn: observation.numberInRow,
  value: observation.value
})