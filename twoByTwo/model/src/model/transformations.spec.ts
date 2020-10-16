import { fromStringToObjects } from "./transformations";

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
})