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
    const result = calculateStats([1, 2, 3, -1, -7, 0]);

    expect(result).toEqual(
      expect.objectContaining({
        minimumValue: -7,
      })
    );
  });

  it("should return a stats object with a field for the maximum value in the sequence", () => {
    const result = calculateStats([1, 2, 3, -1, -7, 0]);

    expect(result).toEqual(
      expect.objectContaining({
        maximumValue: 3,
      })
    );
  });

  it("should return a stats object with a field for the number of elements in the sequence", () => {
    const result = calculateStats([1, 2, 3, -1, -7, 0]);

    expect(result).toEqual(
      expect.objectContaining({
        numberOfElements: 6,
      })
    );
  });

  it("should return a stats object with a field for the average value of the elements in the sequence", () => {
    const result = calculateStats([1, 2, 3, -1, -7, 0]);

    expect(result).toEqual(
      expect.objectContaining({
        averageValue: "-0.333333",
      })
    );
  });

  it("should return a valid stats object", () => {
    const result = calculateStats([1, 2, 3, -1, -7, 0]);

    expect(result).toEqual<Stats>({
      minimumValue: -7,
      maximumValue: 3,
      numberOfElements: 6,
      averageValue: "-0.333333",
    });
  });
});
