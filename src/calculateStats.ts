import { Sequence } from "./types";

export default function calculateStats(sequence: Sequence) {
  if (!sequence.length) {
    throw new Error("sequence is empty");
  }
}
