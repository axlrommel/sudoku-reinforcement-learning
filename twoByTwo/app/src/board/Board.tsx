import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { SudokuResponse } from "../types/sudokuResponse";
import { getBoard, getHint } from "./utils";
import { Button, Grid } from "@material-ui/core";
import TileRow from "./TileRow";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2)
    },
    buttonText: {
      color: theme.palette.secondary.dark
    },
    container: {
      margin: 10,
      borderSpacing: 1
    }
  }),
);

const Board = () => {
  const classes = useStyles();

  const [initialBoard, setInitialBoard]: [
    SudokuResponse,
    React.Dispatch<SudokuResponse>
  ] = useState({});
  const [currentBoard, setCurrentBoard]: [
    SudokuResponse,
    React.Dispatch<SudokuResponse>
  ] = useState({});
  const [lastInput, setLastInput]: [
    string, React.Dispatch<string>
  ] = useState("");

  useEffect(() => {
    getBoard(setInitialBoard);
  }, []);

  useEffect(() => {
    setCurrentBoard(initialBoard);
  }, [initialBoard, setCurrentBoard])

  const clickedGetHint = () => {
    getHint(currentBoard, parseInt(lastInput?.split('-')[1]),
      parseInt(lastInput?.split('-')[2]))
  };

  const clickedCheck = () => {

  };

  return (
    <div className={classes.root}>
      {currentBoard?.problem && <Grid>
        {
          [0, 1, 2, 3].map(r => {
            return (
              <TileRow
                key={`tilerow-${r}`}
                onBlur={setLastInput}
                row={r}
                board={currentBoard.problem!}
              />
            )
          }
          )}
      </Grid>}
      <div>
        <Button
          className={classes.buttonText}
          onClick={clickedGetHint}>
          Hint
      </Button>
        <Button
          className={classes.buttonText}
          onClick={clickedCheck} >
          Check
      </Button>
      </div>
    </div >
  );
}

export default Board;