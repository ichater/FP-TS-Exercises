import {
  queenTakesQueen,
  isValidPosition,
  chessBoard,
  dualQueenPositionValidator,
  queensDifferentPositionValidator,
  bishopMove,
  castleMove,
} from "../exercises/QueenAttack";

describe("queenTakesQueen main function", () => {
  it("queen takes queen Castle", () => {
    expect(
      queenTakesQueen({ x: 1, y: 3 }, { x: 2, y: 3 }, chessBoard)
    ).toBeTruthy();
    expect(
      queenTakesQueen({ x: 1, y: 3 }, { x: 1, y: 5 }, chessBoard)
    ).toBeTruthy();
    expect(
      queenTakesQueen({ x: 1, y: 5 }, { x: 2, y: 3 }, chessBoard)
    ).toBeFalsy();
  });
  it("queen takes queen Bishop", () => {
    expect(
      queenTakesQueen({ x: 1, y: 3 }, { x: 2, y: 3 }, chessBoard)
    ).toBeTruthy();
    expect(
      queenTakesQueen({ x: 1, y: 5 }, { x: 2, y: 3 }, chessBoard)
    ).toBeFalsy();
    expect(
      queenTakesQueen({ x: 3, y: 1 }, { x: 1, y: 3 }, chessBoard)
    ).toBeTruthy();
  });
});

describe("queenTakesQueen castle and bishop functions", () => {
  it("queen takes queen Bishop helper function", () => {
    expect(bishopMove({ x: 1, y: 3 }, { x: 2, y: 4 })).toBeTruthy();
    expect(bishopMove({ x: 1, y: 5 }, { x: 2, y: 3 })).toBeFalsy();
    expect(bishopMove({ x: 7, y: 0 }, { x: 6, y: 1 })).toBeTruthy();
  });

  it("queen takes queen Castle helper function", () => {
    expect(castleMove({ x: 1, y: 3 }, { x: 2, y: 4 })).toBeFalsy();
    expect(castleMove({ x: 1, y: 5 }, { x: 1, y: 3 })).toBeTruthy();
    expect(castleMove({ x: 7, y: 0 }, { x: 6, y: 1 })).toBeFalsy();
    expect(castleMove({ x: 0, y: 5 }, { x: 1, y: 5 })).toBeTruthy();
  });
});

describe("queen game helper functions", () => {
  it("queens position is valid", () => {
    expect(isValidPosition({ x: 1, y: 9 }, chessBoard)).toBeFalsy();
    expect(isValidPosition({ x: 1, y: 3 }, chessBoard)).toBeTruthy();
  });
  it("bothqueens position is valid", () => {
    expect(
      dualQueenPositionValidator({ x: 1, y: 3 }, { x: 2, y: 3 }, chessBoard)
    ).toBeTruthy();
  });
  it("One queen is off the table returning false", () => {
    expect(
      dualQueenPositionValidator({ x: 1, y: 9 }, { x: 1, y: 3 }, chessBoard)
    ).toBeFalsy();
  });
  it("two queens cant be in the exact same position on the table", () => {
    expect(
      queensDifferentPositionValidator({ x: 1, y: 3 }, { x: 1, y: 3 })
    ).toBeFalsy();
  });
  it("Two queens, two different positions validated", () => {
    expect(
      queensDifferentPositionValidator({ x: 2, y: 3 }, { x: 7, y: 3 })
    ).toBeTruthy();
  });
});
