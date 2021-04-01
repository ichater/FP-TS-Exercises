import {
  queenTakesQueen,
  isValidPosition,
  chessBoard,
  dualQueenPositionValidator,
} from "../exercises/QueenAttack";

// describe("Can one queen take another", () => {
//   it("queen castle takes queen on x axis"), () => {};
// });

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
      dualQueenPositionValidator({ x: 1, y: 3 }, { x: 1, y: 3 }, chessBoard)
    ).toBeFalsy();
  });
});
