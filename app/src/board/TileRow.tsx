import { Grid } from '@material-ui/core';
import { range } from 'ramda';
import React from 'react';
import { TileValue } from '../types/sudokuGame';
import Tile from './Tile';

interface tileProps {
  board: number[][];
  row: number;
  onChange: React.Dispatch<TileValue>;
  getHint: React.Dispatch<TileValue>;
  hintResult?: TileValue;
}

const TileRow = (props: tileProps) => {
  const sudokuSize = props.board ? props.board[0].length : 0;
  return (
    <Grid container>
      {range(0, sudokuSize).map((c) => {
        return (
          <Tile
            key={`tile-${props.row}-${c}`}
            onChange={props.onChange}
            getHint={props.getHint}
            hintResult={props.hintResult}
            row={props.row}
            column={c}
            board={props.board}
          />
        );
      })}
    </Grid>
  );
};

export default TileRow;
