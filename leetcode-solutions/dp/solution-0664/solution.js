/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s) {
  let dp = {};
  let S;
  let a = [];
  let b = s.split('');
  while (b.length) {
    let c = b.shift();
    if (a[a.length - 1] !== c) a.push(c);
  }
  S = a.join('');
  return helper(0, S.length - 1);

  function helper(k1, k2) {
    if (k1 > k2) return 0;
    let k = k1 + ' ' + k2;
    if (dp[k]) return dp[k];
    // 如果k2是独立打印 +1 并且在之后的递归去除k2
    dp[k] = 1 + helper(k1, k2 - 1);
    for (let i = k1; i < k2; i++) {
      // 如果k1--k2区间内存在与k2相同的字符A，则可以假设k2依赖于A打印，而之后的递归就没有k2什么事情了
      if (S[i] === S[k2]) dp[k] = Math.min(dp[k], helper(k1, i - 1) + helper(i + 1, k2));
    }
    return dp[k];
  }
};