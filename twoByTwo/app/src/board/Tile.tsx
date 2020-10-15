import { Grid, Paper, TextField } from "@material-ui/core";
import React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: 20,
      textAlign: 'center',
      backgroundColor: 'aqua'
    },
    textField: {
      textAlign: 'center',
      border: 2,
      borderColor: '#212121',
      backgroundColor: 'aqua'
    }
  }),
);

interface tileProps {
  board: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]],
  row: number,
  column: number,
  onBlur: React.Dispatch<string>;
}

const Tile = (props: tileProps) => {
  const classes = useStyles();
  const id = `input-${props.row}-${props.column}`;
  const val = props.board[props.row][props.column]
  return (
    <Grid item xs={1}>
      {val === 0
        ? <TextField id={id} onBlur={() => props.onBlur(id)} className={classes.textField} variant="outlined">{val}</TextField>
        : <Paper className={classes.paper}>{val}</Paper>
      }
    </Grid>)
};

export default Tile;