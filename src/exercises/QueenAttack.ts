// Given the position of two queens on a chess board,
// indicate whether or not they are positioned so that they can attack each other.

enum ChessBoard {
  height = 8,
  width = 8,
}

const createBoard = (board: ChessBoard): number[][] => {
  return [...Array(board.y)].map(() => [...Array(board.x)].map((_, i) => 1));
};
