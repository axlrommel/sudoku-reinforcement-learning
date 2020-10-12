import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { SudokuResponse } from "../types/sudokuResponse";
import { getBoard } from "../utils/getBoard";
import Tile from "./Tile";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2)
    }
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
            <Tile value={board.problem[0][0]} />
          </Grid>
          <Grid item xs={1}>
            <Tile value={board.problem[0][1]} />
          </Grid>
          <Grid item xs={1}>
            <Tile value={board.problem[0][2]} />
          </Grid>
          <Grid item xs={1}>
            <Tile value={board.problem[0][3]} />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <Tile value={board.problem[1][0]} />
          </Grid>
          <Grid item xs={1}>
            <Tile value={board.problem[1][1]} />
          </Grid>
          <Grid item xs={1}>
            <Tile value={board.problem[1][2]} />
          </Grid>
          <Grid item xs={1}>
            <Tile value={board.problem[1][3]} />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <Tile value={board.problem[2][0]} />
          </Grid>
          <Grid item xs={1}>
            <Tile value={board.problem[2][1]} />
          </Grid>
          <Grid item xs={1}>
            <Tile value={board.problem[2][2]} />
          </Grid>
          <Grid item xs={1}>
            <Tile value={board.problem[2][3]} />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <Tile value={board.problem[3][0]} />
          </Grid>
          <Grid item xs={1}>
            <Tile value={board.problem[3][1]} />
          </Grid>
          <Grid item xs={1}>
            <Tile value={board.problem[3][2]} />
          </Grid>
          <Grid item xs={1}>
            <Tile value={board.problem[3][3]} />
          </Grid>
        </Grid>
      </Grid>}
    </div>
  );
}

export default Board;