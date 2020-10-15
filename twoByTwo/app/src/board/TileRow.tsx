import { Grid } from "@material-ui/core";
import React from "react";
import { TileValue } from "../types/sudokuGame";
import Tile from "./Tile";

interface tileProps {
  board: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]],
  row: number,
  onChange: React.Dispatch<TileValue>
}

const TileRow = (props: tileProps) => {
  return (
    <Grid container >
      {[0, 1, 2, 3].map(c => {
        return (
          <Tile
            key={`tile-${props.row}-${c}`}
            onChange={props.onChange}
            row={props.row}
            column={c}
            board={props.board}
          />
        )
      })
      }
    </Grid>)
};

export default TileRow;