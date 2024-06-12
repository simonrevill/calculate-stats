import { Sequence, Stats } from "./types";

export default function calculateStats(sequence: Sequence): Stats {
  if (!sequence.length) {
    throw new Error("sequence is empty");
  }

  return {
    minimumValue: Math.min(...sequence),
  };
}
