/**
 * @param {number} n
 * @param {number} maxValue
 * @return {number}
 */
var idealArrays = function(n, maxValue) {
  let dp = new Array(n).fill(null).map(() => new Object());
  dp[0][1] = 1;
  let mod = 10**9 + 7;
  for (let i = 2; i < 15; i++) dp[0][i] = 0;
  for (let i = 1; i < n; i++) {
    dp[i][1] = 1;
    for (let j = 2; j < 15; j++) {
      dp[i][j] = (dp[i - 1][j] + dp[i - 1][j - 1]) % mod;
    }
  }
  dp = dp[n - 1];
  let dp2 = {};
  let arr = new Array(15).fill(0);
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j < 15; j++) {
      let a = helper(i, j);
      arr[j] = (arr[j] + a) % mod;
    }
  }
  let res = 0;
  for (let i = 1; i < arr.length; i++) {
    res = (res + Number(BigInt(arr[i]) * BigInt(dp[i])) % mod) % mod;
  }
  return res;

  function helper(num, count) {
    if (count === 1) return 1;
    let key = `${num} ${count}`;
    if (dp2[key] !== undefined) return dp2[key];
    dp2[key] = 0;
    let sqrt = Math.sqrt(num);
    for (let i = 2; i <= sqrt; i++) {
      if (num % i === 0) {
        dp2[key] = (dp2[key] + helper(num / i, count - 1)) % mod;
        if (i !== num / i) dp2[key] = (dp2[key] + helper(i, count - 1)) % mod;
      }
    }
    if (count === 2 && num !== 1) dp2[key]++;
    return dp2[key];
  }
};
