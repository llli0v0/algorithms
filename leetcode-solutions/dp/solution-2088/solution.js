/**
 * @param {number[][]} grid
 * @return {number}
 */
var countPyramids = function(grid) {
  let res = 0;
  helper();
  grid.reverse();
  helper();
  return res;

  function helper() {
    let dp = new Array(grid.length).fill(null).map(() => new Array(grid[0].length).fill(0));
    for (let i = 0; i < grid.length; i++) {
      let preSum = [grid[i][0]];
      for (let j = 1; j < grid[i].length; j++) {
        let g = grid[i][j]
        if (g) dp[i][j] = 1;
        preSum.push(preSum[preSum.length - 1] + grid[i][j]);
        for (let n = j - 2; n >= 0; n -= 2) {
          let len = j - n + 1;
          if (len === preSum[j] - (preSum[n - 1] ?? 0)) {
            let midIndex = (j + n) / 2;
            if (dp[i - 1] && dp[i - 1][midIndex] >= len - 2) {
              dp[i][midIndex] = len;
              res++;
            } else break;
          } else break;
        }
      }
    }
  }
};
