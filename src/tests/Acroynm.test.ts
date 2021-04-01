import { toAcronym } from "../exercises/Acroynm";

describe("turns a string into an acroym", () => {
  it("turns I dont give a fuck into idgaf", () => {
    expect(toAcronym("I dont give a fuck")).toEqual("idgaf");
  });
});
