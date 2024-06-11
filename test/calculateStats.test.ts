import calculateStats from "../src";

describe("calculate stats tests", () => {
  it("throws an error when the provided sequence is empty", () => {
    expect(() => {
      calculateStats([]);
    }).toThrow("sequence is empty");
  });

  it("does not throw an error when the provided sequence is not empty", () => {
    expect(() => {
      calculateStats([1, 2, 3]);
    }).not.toThrow("sequence is empty");
  });
});
