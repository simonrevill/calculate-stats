import calculateStats from "../src";

describe("calculate stats tests", () => {
  it("throws an error when the provided sequence is empty", () => {
    expect(() => {
      calculateStats([]);
    }).toThrow("sequence is empty");
  });
});
