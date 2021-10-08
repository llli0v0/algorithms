/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {
  let mSum = 0;
  for (let i = 0; i < rolls.length; i++) {
    mSum += rolls[i];
  }
  let nSum = mean * (rolls.length + n) - mSum;
  if (nSum > n * 6 || nSum < n) return [];
  let a = Math.floor(nSum / n);
  let b = nSum % n;
  let result = new Array(b).fill(a + 1).concat(new Array(n - b).fill(a));
  return result;
};