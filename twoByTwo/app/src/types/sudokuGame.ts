export class SudokuGame {
  problem?: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]];
  solution?: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]];

  constructor(props?: Partial<SudokuGame>) {
    props = props || {};
    Object.assign(this, props);
  }
}

export class TileValue {
  row?: number;
  column?: number;
  value?: number;

  constructor(props?: Partial<TileValue>) {
    props = props || {};
    Object.assign(this, props);
  }
}