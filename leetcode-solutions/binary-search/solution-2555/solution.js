/**
 * @param {number[]} prizePositions
 * @param {number} k
 * @return {number}
 */
var maximizeWin = function(prizePositions, k) {
  let counter = {};
  for (let i = 0; i < prizePositions.length; i++) {
    let p = prizePositions[i];
    counter[p] = (counter[p] ?? 0) + 1;
  }
  let positions = Array.from(new Set(prizePositions)).sort((a, b) => a - b);
  let preSum = { [positions[0]]: counter[positions[0]] };
  for (let i = 1; i < positions.length; i++) {
    let p = positions[i];
    preSum[p] = counter[p] + preSum[positions[i - 1]];
  }
  let maxMap = {};
  let res = 0;
  for (let i = 0; i < positions.length; i++) {
    let p = positions[i];
    let target = p - k;
    if (target <= positions[0]) {
      maxMap[p] = preSum[p];
      res = maxMap[p];
    } else {
      let l = 0;
      let r = i;
      while (l < r) {
        let m = Math.floor((l + r) / 2);
        if (target > positions[m]) {
          l = m + 1;
        } else {
          r = m;
        }
      }
      let cur = preSum[p] - preSum[positions[l - 1]];
      maxMap[p] = Math.max(cur, maxMap[positions[i - 1]]);
      res = Math.max(res, cur + maxMap[positions[l - 1]]);
    }
  }
  return res;
};
