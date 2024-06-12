import calculateStats, { Stats } from "../src";

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

  it("should return a stats object with a field for the minimum value in the sequence", () => {
    const result: Stats = calculateStats([1, 2, 3, -1, -7, 0]);

    expect(result).toEqual({
      minimumValue: -7,
    });
  });
});
