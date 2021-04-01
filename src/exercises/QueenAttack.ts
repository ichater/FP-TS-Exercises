// Given the position of two queens on a chess board,
// indicate whether or not they are positioned so that they can attack each other.

interface Board {
  x: number;
  y: number;
}

type Position = Board;

type GameBoard = number[][];

// Accounting for the possibility of a bigger board
const standardChessBoard: Board = { x: 8, y: 8 };

const createChessBoard = (board: Board): number[][] =>
  [...Array(board.x)].map(() => [...Array(board.y)].map((_, i) => 1));

const chessBoard: GameBoard = createChessBoard(standardChessBoard);

const queenTakesQueen = (
  blackQueen: Position,
  whiteQueen: Position,
  chessBoard: GameBoard
): boolean =>
  dualQueenPositionValidator(blackQueen, whiteQueen, chessBoard) &&
  queensDifferentPositionValidator(blackQueen, whiteQueen) &&
  (castleMove(blackQueen, whiteQueen) || bishopMove(blackQueen, whiteQueen));

// The bwlow two functions could easily be used for castles or bishops seperately
const castleMove = (blackQueen: Position, whiteQueen: Position): boolean =>
  blackQueen.x === whiteQueen.x || blackQueen.y === whiteQueen.y;

const bishopMove = (blackQueen: Position, whiteQueen: Position): boolean =>
  Math.abs(blackQueen.x - whiteQueen.x) ===
  Math.abs(blackQueen.y - whiteQueen.y);

const dualQueenPositionValidator = (
  blackQueen: Position,
  whiteQueen: Position,
  board: GameBoard
): boolean =>
  isValidPosition(blackQueen, board) && isValidPosition(whiteQueen, board);

const queensDifferentPositionValidator = (
  blackQueen: Position,
  whiteQueen: Position
): boolean =>
  blackQueen.x === whiteQueen.x && blackQueen.y === whiteQueen.y ? false : true;

const isValidPosition = ({ x, y }: Position, board: GameBoard): boolean =>
  x <= board[0].length && y <= board.length && x > 0 && y > 0;

export {
  queenTakesQueen,
  isValidPosition,
  chessBoard,
  dualQueenPositionValidator,
  queensDifferentPositionValidator,
  bishopMove,
  castleMove,
};
