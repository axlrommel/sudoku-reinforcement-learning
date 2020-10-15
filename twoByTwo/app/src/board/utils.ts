import { SudokuResponse } from "../types/sudokuResponse";

export const getBoard = async (setBoard: React.Dispatch<SudokuResponse>) => {
  try {
    const response = await fetch(`http://localhost:80`, {
      method: 'GET'
    });
    const boards = await response.json();
    setBoard(boards);

  } catch (error) {
    console.log(error);
  }
}

export const addToModel = async (board: any) => {
  try {
    const response = await fetch(`http://localhost:80/entry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(board)
    });
    const resp = await response.json();
    console.log(resp);
  } catch (error) {
    console.log(error);
  }
}

export const getHint = async (board: any, row: number, col: number) => {
  console.log(row, col);
  try {
    const response = await fetch(`http://localhost:80/hint`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ board, row, col })
    });
    await response.json();
  } catch (error) {
    console.log(error);
  }
}