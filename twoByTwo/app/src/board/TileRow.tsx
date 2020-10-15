import { Grid } from "@material-ui/core";
import React from "react";
import Tile from "./Tile";

interface tileProps {
  board: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]],
  row: number,
  onBlur: React.Dispatch<string>;
}

const TileRow = (props: tileProps) => {
  return (
    <Grid container >
      {[0, 1, 2, 3].map(c => {
        return (
          <Tile
            key={`tile-0-${c}`}
            onBlur={props.onBlur}
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