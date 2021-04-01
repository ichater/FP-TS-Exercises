// Given the position of two queens on a chess board,
// indicate whether or not they are positioned so that they can attack each other.

const createChessBoard = (): number[][] =>
  [...Array(8)].map(() => [...Array(8)].map((_, i) => 1));

const chessBoard = createChessBoard();

interface Position {
  x: number;
  y: number;
}

const queenTakesQueen = (blackQueen: Position, whiteQueen: Position): boolean =>
  false;

const dualQueenPositionValidator = (
  blackQueen: Position,
  whiteQueen: Position,
  board
): boolean =>
  isValidPosition(blackQueen, board) &&
  isValidPosition(whiteQueen, board) &&
  blackQueen !== whiteQueen;

const isValidPosition = ({ x, y }: Position, board): boolean =>
  x <= board[0].length && y <= board.length && x > 0 && y > 0;

export {
  queenTakesQueen,
  isValidPosition,
  chessBoard,
  dualQueenPositionValidator,
};
