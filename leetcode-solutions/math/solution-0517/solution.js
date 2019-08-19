/**
 * @param {number[]} machines
 * @return {number}
 */
var findMinMoves = function(machines) {
  let s = machines.reduce((a, b) => a + b) / machines.length;
  let result = 0;
  let S = 0;

  if (s % 1) return -1;

  for (let i = 0; i < machines.length; i++) {
    S += machines[i] - s;
    result = Math.max(result, Math.abs(S), Math.max(machines[i] - s));
  }

  return result;
};