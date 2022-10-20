/**
 * @param {number[]} tasks
 * @param {number} sessionTime
 * @return {number}
 */
var minSessions = function(tasks, sessionTime) {
  let units = [];
  for (let i = 1, t = (1 << tasks.length); i < t; i++) {
    let time = 0;
    for (let j = 0; j < tasks.length; j++) {
      if (((1 << j) & i) === (1 << j)) time += tasks[j];
    }
    if (time <= sessionTime) units.push(i);
  }
  let dp = {};
  return helper((1 << tasks.length) - 1);

  function helper(n) {
    if (n === 0) return 0;
    if (dp[n] !== undefined) return dp[n];
    dp[n] = Infinity;
    for (let i = 0; i < units.length; i++) {
      let u = units[i];
      if ((u & n) === u) {
        dp[n] = Math.min(dp[n], 1 + helper(n - u));
      }
    }
    return dp[n];
  }
};
