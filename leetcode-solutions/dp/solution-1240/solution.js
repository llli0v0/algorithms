/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var tilingRectangle = function(n, m) {
  let dp = {};

  return helper(new Array(m).fill(n));

  function helper(c) {
    if (c.every(i => i === 0)) return 0;

    let max = Math.max(...c);
    let k = c.toString();

    if (dp[k] !== undefined) return dp[k];

    dp[k] = Infinity;
    
    for (let i = 0; i < c.length; i++) {
      if (c[i] === max) {
        let index = i;

        while (c[index] === max) {
          let a = [...c];

          for (let j = i; j <= index; j++) a[j] -= index - i + 1;

          if (Math.min(...a) < 0) return dp[k];

          dp[k] = Math.min(dp[k], 1 + helper(a));

          index++;
        }

        break;
      }
    }

    return dp[k];
  }
};