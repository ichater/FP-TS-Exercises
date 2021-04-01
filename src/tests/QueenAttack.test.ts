import {
  queenTakesQueen,
  isValidPosition,
  chessBoard,
  dualQueenPositionValidator,
  queensDifferentPositionValidator,
} from "../exercises/QueenAttack";

describe("Can one queen take another", () => {
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
