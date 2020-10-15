import { Grid, Paper, TextField } from "@material-ui/core";
import React from "react";
import { TileValue } from "../types/sudokuGame";
import { useStyles } from './styles';

interface tileProps {
  board: number[][],
  row: number,
  column: number,
  onChange: React.Dispatch<TileValue>
}

const Tile = (props: tileProps) => {
  const classes = useStyles();
  const val = props.board[props.row][props.column]
  return (
    <Grid item xs={1}>
      {val === 0
        ? <TextField
          onChange={(event) => props.onChange({ row: props.row, column: props.column, value: parseInt(event.target.value) })}
          className={classes.textField}
          variant="outlined">{val}</TextField>
        : <Paper className={classes.paper}>{val}</Paper>
      }
    </Grid>)
};

export default Tile;