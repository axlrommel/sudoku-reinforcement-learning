import { addNumbersInQuadrant, fromStringToObjects, getNumberInBoard, numberInQuadrant, numberOfNumbersInColumn, numberOfNumbersInRow, sumOfNumbersInColumn, sumOfNumbersInRow } from './transformations';

describe('transform from a string to an Observation', () => {
  const str = "{\"board\":[[1,4,3,2],[2,3,4,1],[3,1,0,4],[4,2,0,3]],\"row\":2,\"col\":2,\"value\":2}";
  it('should convert the string to an Entry', () => {
    const entry = fromStringToObjects(str);
    expect(entry).toEqual({
      board: [[1, 4, 3, 2], [2, 3, 4, 1], [3, 1, 0, 4], [4, 2, 0, 3]],
      tileValue: {
        row: 2,
        col: 2,
        value: 2
      }
    })
  })
  it('should find all the indicated numbers in the board', () => {
    const board = [[1, 4, 3, 2], [2, 3, 4, 1], [3, 1, 0, 4], [4, 2, 0, 3]];
    const val = getNumberInBoard(board, 1);
    expect(val).toEqual(3)
  })
  it('should find the number of non-zero integers in the row', () => {
    const board = [[1, 4, 3, 2], [2, 3, 4, 1], [3, 1, 0, 4], [4, 2, 0, 3]];
    const val = numberOfNumbersInRow(board, 3);
    expect(val).toEqual(3)
  })
  it('should find the number of non-zero integers in the col', () => {
    const board = [[1, 4, 3, 2], [2, 3, 4, 1], [3, 1, 0, 4], [4, 2, 0, 3]];
    const val = numberOfNumbersInColumn(board, 2);
    expect(val).toEqual(2)
  })
  it('should sum the numbers in the row', () => {
    const board = [[1, 4, 3, 2], [2, 3, 4, 1], [3, 1, 0, 4], [4, 2, 0, 3]];
    const val = sumOfNumbersInRow(board, 2);
    expect(val).toEqual(8)
  })
  it('should sum the numbers in the column', () => {
    const board = [[1, 4, 3, 2], [2, 3, 4, 1], [3, 1, 0, 4], [4, 2, 0, 3]];
    const val = sumOfNumbersInColumn(board, 2);
    expect(val).toEqual(7)
  })
  it('should count the non-zero numbers in that quadrant', () => {
    const board = [[1, 4, 3, 2], [2, 3, 4, 1], [3, 1, 0, 4], [4, 2, 0, 3]];
    const val1 = numberInQuadrant(board, {
      row: 3,
      col: 2,
      value: 1 //doesn't matter this one
    });
    expect(val1).toEqual(2)
    const val2 = numberInQuadrant(board, {
      row: 0,
      col: 0,
      value: 1 //doesn't matter this one
    });
    expect(val2).toEqual(4)
  })
  it('should add the numbers in that quadrant', () => {
    const board = [[1, 4, 3, 2], [2, 3, 4, 1], [3, 1, 0, 4], [4, 2, 0, 3]];
    const val1 = addNumbersInQuadrant(board, {
      row: 3,
      col: 2,
      value: 1 //doesn't matter this one
    });
    expect(val1).toEqual(7)
    const val2 = addNumbersInQuadrant(board, {
      row: 0,
      col: 0,
      value: 1 //doesn't matter this one
    });
    expect(val2).toEqual(10)
  })
})