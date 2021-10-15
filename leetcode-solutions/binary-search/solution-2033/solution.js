/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function(grid, x) {
  let arr = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      arr.push(grid[i][j]);
    }
  }
  if (arr.length === 1) return 0;
  arr.sort((a, b) => a - b);
  let mod = arr[0] % x;
  let prefixSum = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] % x !== mod) return -1;
    prefixSum.push(prefixSum[prefixSum.length - 1] + arr[i]);
  }
  let result = Infinity;
  let allSum = prefixSum[prefixSum.length - 1];
  for (let i = arr[0]; i <= arr[arr.length - 1] + x; i += x) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
      let m = Math.floor((l + r) / 2);
      if (arr[m] < i) {
        l = m + 1;
      } else {
        r = m;
      }
    }
    let L = l - 1 >= 0 ? (i * l - prefixSum[l - 1]) / x : 0;
    let R = (allSum - (l - 1 < 0 ? 0 : prefixSum[l - 1]) - i * (arr.length - l)) / x;
    result = Math.min(result,  L + R);
  }
  return result;
};
