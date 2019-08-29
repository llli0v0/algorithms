/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number}
 */
var assignBikes = function(workers, bikes) {
  let dp = {};

  let K = 0;

  for (let i = 0; i < bikes.length; i++) {
    K += 1 << i;
    bikes[i].push(i);
  }

  return helper(workers, bikes, K);

  function helper(workers, bikes, K) {
    if (!workers.length) return 0;

    if (dp[K] !== undefined) return dp[K];

    dp[K] = Infinity;
    
    for (let i = 0; i < bikes.length; i++) {
      dp[K] = Math.min(dp[K], Math.abs(workers[0][0] - bikes[i][0]) + Math.abs(workers[0][1] - bikes[i][1]) + helper(workers.slice(1), bikes.slice(0, i).concat(bikes.slice(i + 1)), K - (1 << bikes[i][2])));
    }

    return dp[K];
  }
};