/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function(isWater) {
  let arr = [];
  let result = new Array(isWater.length).fill(null).map(() => new Array(isWater[0].length).fill(-1));
  for (let i = 0; i < isWater.length; i++) {
    for (let j = 0; j < isWater[i].length; j++) {
      if (isWater[i][j]) {
        arr.push([i, j]);
        result[i][j] = 0;
      }
    }
  }
  let next = [];
  let cur = 1;
  while (arr.length) {
    let a = arr.pop();
    let [b, c] = a;
    if (result[b - 1] && result[b - 1][c] === -1) {
      result[b - 1][c] = cur;
      next.push([b - 1, c]);
    }
    if (result[b + 1] && result[b + 1][c] === -1) {
      result[b + 1][c] = cur;
      next.push([b + 1, c]);
    }
    if (result[b][c - 1] === -1) {
      result[b][c - 1] = cur;
      next.push([b, c - 1]);
    }
    if (result[b][c + 1] === -1) {
      result[b][c + 1] = cur;
      next.push([b, c + 1]);
    }
    if (!arr.length) {
      arr = next;
      next = [];
      cur++;
    }
  }
  return result;
};