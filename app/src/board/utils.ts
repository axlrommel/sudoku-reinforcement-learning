import { SudokuGame, TileValue } from '../types/sudokuGame';

const url = 'http://localhost:80';

export const getBoard = async (setBoard: React.Dispatch<SudokuGame>) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
    });
    const boards = await response.json();
    setBoard(boards);
  } catch (error) {
    console.log(error);
  }
};

export const addToModel = async (board: any, row: number, col: number, value: number) => {
  try {
    const response = await fetch(`${url}/entry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        board,
        row,
        col,
        value,
      }),
    });
    const resp = await response.json();
    console.log(resp);
  } catch (error) {
    console.log(error);
  }
};

export const getModelValue = async (board: any, row: number, col: number, setHintResult: React.Dispatch<TileValue>) => {
  try {
    const response = await fetch(`${url}/find`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ board, row, col, value: 0 }),
    });
    const retval = await response.json();
    setHintResult({ row, col: col, value: retval?.rfresult[0] })
  } catch (error) {
    console.log(error);
  }
};
