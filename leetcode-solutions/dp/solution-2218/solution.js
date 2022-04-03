/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function(piles, k) {
  let dp = {};
  return helper(piles.length - 1, k);

  function helper(index, k) {
    if (index < 0 || k < 0) return -Infinity;
    else if (k === 0) return 0;
    else if (index === 0) return piles[0].slice(0, k).reduce((pre, cur) => pre + cur);
    let key = `${index} ${k}`;
    if (dp[key] !== undefined) return dp[key];
    dp[key] = helper(index - 1, k);
    let arr = piles[index];
    for (let i = 0; i < arr.length; i++) {
      dp[key] = Math.max(dp[key], arr.slice(0, i + 1).reduce((pre, cur) => pre + cur) + helper(index - 1, k - i - 1));
    }
    return dp[key];
  }
};
