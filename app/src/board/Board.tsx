import React, { useEffect, useState } from 'react';
import { SudokuGame, TileValue } from '../types/sudokuGame';
import { getBoard, addToModel, getModelValue } from './utils';
import { Grid } from '@material-ui/core';
import TileRow from './TileRow';
import { useStyles } from './styles';
import { range } from 'ramda';

const Board = () => {
  const classes = useStyles();
  const [currentBoard, setCurrentBoard]: [SudokuGame, React.Dispatch<SudokuGame>] = useState(new SudokuGame());
  const [lastInput, setLastInput]: [TileValue, React.Dispatch<TileValue>] = useState(new TileValue());
  const [hint, getHint]: [TileValue, React.Dispatch<TileValue>] = useState(new TileValue());
  const [hintResult, setHintResult]: [TileValue, React.Dispatch<TileValue>] = useState(new TileValue());

  useEffect(() => {
    getBoard(setCurrentBoard);
  }, []);

  useEffect(() => {
    if (hint?.col >= 0) {
      getModelValue(currentBoard?.problem, hint.row, hint.col, setHintResult)
      getHint(new TileValue())
    }
  }, [hint, currentBoard])

  useEffect(() => {
    if (hintResult?.value > 0) {
      setHintResult(hintResult)
    }
  }, [hintResult]);

  useEffect(() => {
    if (lastInput?.value > 0) {
      const { row, col, value } = lastInput;
      if (currentBoard?.solution[row][col] === value) {
        addToModel(currentBoard.problem, row, col, value);
        const newProblem = currentBoard.problem.map((r, rIndex) => {
          if (rIndex !== row) return r;
          else {
            return r.map((c, cIndex) => {
              if (cIndex !== col) return c;
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
            return <TileRow hintResult={hintResult} getHint={getHint} key={`tilerow-${r}`} onChange={setLastInput} row={r} board={currentBoard.problem} />;
          })}
        </Grid>
      )}
    </div>
  );
};

export default Board;
