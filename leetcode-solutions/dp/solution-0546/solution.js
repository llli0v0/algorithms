/**
 * 我想我已经能够轻松解决这类问题了
 * @param {number[]} boxes
 * @return {number}
 */
var removeBoxes = function(boxes) {
  if (!boxes.length) return 0;
  let dp = {};
  helper(boxes);
  return dp[boxes.join()];

  function helper(x) {
    if (!x.length) return 0;
    let k = x.join();
    if (dp[k]) return dp[k];
    let m = 0;
    while (x[m + 1] === x[0]) m++;
    dp[k] = (m + 1)**2 + helper(x.slice(m + 1));
    for (let i = m + 1; i < x.length; i++) {
      if (x[i] === x[0]) dp[k] = Math.max(dp[k], helper(x.slice(0, m + 1).concat(x.slice(i))) + helper(x.slice(m + 1, i)));
    }
    return dp[k];
  }
};