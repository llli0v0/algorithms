/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function(stoneValue) {
  let suffixSum = 0;
  let dp = new Array(stoneValue.length).fill(null).map(() => new Array(2).fill(-Infinity));
  for (let i = stoneValue.length - 1; i >= 0; i--) {
    suffixSum += stoneValue[i];
    for (let j = i; j < i + 3 && j < stoneValue.length; j++) {
      dp[i][0] = Math.max(dp[i][0], suffixSum - (dp[j + 1] === undefined ? 0 : dp[j + 1][1]));
      dp[i][1] = Math.max(dp[i][1], suffixSum - (dp[j + 1] === undefined ? 0 : dp[j + 1][0]));
    }
  }
  return dp[0][0] === suffixSum / 2 ? 'Tie' : dp[0][0] > suffixSum / 2 ? 'Alice' : 'Bob';
};