/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
var maxValue = function(events, k) {
  events.sort((a, b) => a[1] - b[1]);
  let endIndex = new Set();
  let endMaxMap = {};
  for (let i = 0; i < events.length; i++) {
    endIndex.add(events[i][1]);
    if (endMaxMap[events[i][1]] === undefined) endMaxMap[events[i][1]] = events[i][2];
    else endMaxMap[events[i][1]] = Math.max(endMaxMap[events[i][1]], events[i][2]);
  }
  endIndex = Array.from(endIndex).sort((a, b) => a - b);
  let dp = {};
  let result = -Infinity;
  for (let i = 0; i < endIndex.length; i++) {
    result = Math.max(result, endMaxMap[endIndex[i]]);
    dp[`1 ${endIndex[i]}`] = result;
  }
  for (let i = 2; i <= k; i++) {
    let curMax = -Infinity;
    for (let j = 0; j < events.length; j++) {
      let key = `${i} ${events[j][1]}`;
      dp[key] = -Infinity;
      if (events[j][0] <= endIndex[0]) {
        dp[key] = curMax;
      } else {
        let l = 0;
        let r = endIndex.length - 1;
        while (l < r) {
          let m = Math.floor((l + r) / 2);
          if (endIndex[m] < events[j][0] - 1 && endIndex[m + 1] <= events[j][0] - 1) {
            l = m + 1;
          } else {
            r = m;
          }
        }
        dp[key] = Math.max(dp[key], curMax, dp[`${i - 1} ${endIndex[l]}`] !== undefined ? events[j][2] + dp[`${i - 1} ${endIndex[l]}`] : -Infinity);
        curMax = dp[key];
        result = Math.max(result, dp[key]);
      }
    }
  }
  return result;
};
