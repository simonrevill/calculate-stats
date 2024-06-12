import { Sequence, Stats } from "./types";

const getAverageSequenceValue = (sequence: Sequence): string => {
  const averageValue =
    sequence.reduce((accumulator, currentValue) => accumulator + currentValue) /
    sequence.length;

  const formatted = new Intl.NumberFormat("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 6,
  }).format(averageValue);

  return formatted;
};

export default function calculateStats(sequence: Sequence): Stats {
  if (!sequence.length) {
    throw new Error("sequence is empty");
  }

  return {
    minimumValue: Math.min(...sequence),
    maximumValue: Math.max(...sequence),
    numberOfElements: sequence.length,
    averageValue: getAverageSequenceValue(sequence),
  };
}
