/**
 * @param {string} pressedKeys
 * @return {number}
 */
var countTexts = function(pressedKeys) {
  let dp = new Array(pressedKeys.length).fill(0);
  dp[0] = 1;
  let mod = 10**9 + 7;
  for (let i = 1; i < pressedKeys.length; i++) {
    dp[i] = dp[i - 1];
    if (pressedKeys[i] === '7' || pressedKeys[i] === '9') {
      for (let j = i - 1; j >= 0 && pressedKeys[j] === pressedKeys[i] && i - j + 1 <= 4; j--) {
        dp[i] += dp[j - 1] === undefined ? 1 : dp[j - 1];
        dp[i] %= mod;
      }
    } else {
      for (let j = i - 1; j >= 0 && pressedKeys[j] === pressedKeys[i] && i - j + 1 <= 3; j--) {
        dp[i] += dp[j - 1] === undefined ? 1 : dp[j - 1];
        dp[i] %= mod;
      }
    }
  }
  return dp[dp.length - 1];
};
