import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { SudokuResponse } from "./types/sudokuResponse";
import { getBoard } from "./utils/getBoard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2)
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const Board = () => {
  const classes = useStyles();
  const [board, setBoard]: [
    SudokuResponse,
    React.Dispatch<SudokuResponse>
  ] = useState({});

  useEffect(() => {
    getBoard(setBoard)
  }, []);

  return (
    <div className={classes.root}>
      {board?.problem && <Grid>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <Paper className={classes.paper}>{board.problem[0][0]}</Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>{board.problem[0][1]}</Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>{board.problem[0][2]}</Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>{board.problem[0][3]}</Paper>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <Paper className={classes.paper}>{board.problem[1][0]}</Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>{board.problem[1][1]}</Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>{board.problem[1][2]}</Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>{board.problem[1][3]}</Paper>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <Paper className={classes.paper}>{board.problem[2][0]}</Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>{board.problem[2][1]}</Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>{board.problem[2][2]}</Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>{board.problem[2][3]}</Paper>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <Paper className={classes.paper}>{board.problem[3][0]}</Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>{board.problem[3][1]}</Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>{board.problem[3][2]}</Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>{board.problem[3][3]}</Paper>
          </Grid>
        </Grid>
      </Grid>}
    </div>
  );
}

export default Board;