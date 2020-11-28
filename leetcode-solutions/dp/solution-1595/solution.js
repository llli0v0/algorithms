/**
 * @param {number[][]} cost
 * @return {number}
 */
var connectTwoGroups = function(cost) {
  let m = cost.length;
  let n = cost[0].length;
  let computed = {};
  return dp(2**m - 1, 2**n - 1);
  
  function dp(x, y) {
    if (x === 0 && y === 0) return 0;
    else if (x === 0 || y === 0) return Infinity;
    let key = `${x} ${y}`;
    if (computed[key] !== undefined) return computed[key];
    computed[key] = Infinity;
    for (let i = 0; i < m; i++) {
      if ((x & (1 << i)) === (1 << i)) {
        for (let j = 0; j < n; j++) {
          if ((y & (1 << j)) === (1 << j)) {
            computed[key] = Math.min(cost[i][j] + Math.min(dp(x - (1 << i), y - (1 << j)), dp(x - (1 << i), y), dp(x, y - (1 << j))), computed[key]);
          }
        }
        break;
      }
    }
    return computed[key];
  }
};
