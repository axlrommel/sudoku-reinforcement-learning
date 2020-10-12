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