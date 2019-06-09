/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
  if (n === 1) return 0;
  let dp = { 1: 1, 2: 2 };
  let w = { 1: new Set([1, 2]) };
  for (let i = 3; i <= n; i++) {
    if (Number.isInteger(i / 2)) {
      dp[i] = dp[i / 2] + 2;
      if (w[i / 2] === undefined) w[i / 2] = new Set([i]);
      continue;
    }
    dp[i] = Infinity;
    let a = 1;
    let b = 1;
    let c;
    while (a < i / 2) {
      if (w[a] && w[a].has(i - a * b)) {
        if (dp[i] > dp[i - a * b] + b) {
          dp[i] = dp[i - a * b] + b;
          c = a;
        }
      }
      if (a * b > i) {
        a += 1;
        b = 1;
      } else {
        b += 1;
      }
    }
    if (c !== undefined) {
      if (w[c] === undefined) w[c] = new Set();
      w[c].add(i);
    }
  }
  return dp[n];
};