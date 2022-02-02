/**
 * @param {string} corridor
 * @return {number}
 */
var numberOfWays = function(corridor) {
  let mod = 10 ** 9 + 7;
  let dp = {};
  let c = 0;
  let i = 0;
  for (i = 0; i < corridor.length; i++) {
    if (corridor[i] === 'S') {
      c++;
    }
    if (c < 2) dp[i] = 0;
    else if (c === 2) dp[i] = 1;
    else break;
  }
  let SCount = 2;
  for (; i < corridor.length; i++) {
    if (corridor[i] === 'S') SCount++;
    if (SCount % 2) {
      dp[i] = 0;
      continue;
    }
    c = 0;
    dp[i] = 0;
    for (let j = i; j >= 0; j--) {
      if (corridor[j] === 'S') c++;
      if (c === 2) {
        dp[i] = (dp[i] + dp[j - 1]) % mod;
      } else if (c > 2) {
        break;
      }
    }
  }
  return dp[corridor.length - 1];
};