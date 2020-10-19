import React, { useEffect, useState } from 'react';
import { SudokuGame, TileValue } from '../types/sudokuGame';
import { getBoard, addToModel } from './utils';
import { Grid } from '@material-ui/core';
import TileRow from './TileRow';
import { useStyles } from './styles';
import { range } from 'ramda';

const Board = () => {
  const classes = useStyles();
  const [currentBoard, setCurrentBoard]: [SudokuGame, React.Dispatch<SudokuGame>] = useState(new SudokuGame());

  const [lastInput, setLastInput]: [TileValue, React.Dispatch<TileValue>] = useState(new TileValue());

  useEffect(() => {
    getBoard(setCurrentBoard);
  }, []);

  useEffect(() => {
    if (lastInput?.value > 0) {
      const { row, column, value } = lastInput;
      if (currentBoard?.solution[row][column] === value) {
        addToModel(currentBoard.problem, row, column, value);
        const newProblem = currentBoard.problem.map((r, rIndex) => {
          if (rIndex !== row) return r;
          else {
            return r.map((c, cIndex) => {
              if (cIndex !== column) return c;
              else return value;
            });
          }
        });
        setCurrentBoard({
          problem: newProblem,
          solution: currentBoard.solution,
        });
        setLastInput(new TileValue());
      } else {
        console.log('bad one');
      }
    }
  }, [lastInput, currentBoard]);

  const sudokuSize = (currentBoard?.problem && currentBoard?.problem[0]?.length) ?? 0;
  return (
    <div className={classes.root}>
      {currentBoard?.problem && (
        <Grid>
          {range(0, sudokuSize).map((r) => {
            return <TileRow key={`tilerow-${r}`} onChange={setLastInput} row={r} board={currentBoard.problem} />;
          })}
        </Grid>
      )}
    </div>
  );
};

export default Board;
