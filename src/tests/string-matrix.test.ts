import { stringToMatrix } from "../exercises/string-matrix";

describe("takes string and returns matrix", () => {
  it("can extract row", () => {
    const expected = [3, 4];
    expect(stringToMatrix("1 2\n3 4")[1]).toEqual(expected);
  });
  it("can extract row", () => {
    const expected = [1, 2];
    expect(stringToMatrix("1 2\n3 4")[0]).toEqual(expected);
  });
});
