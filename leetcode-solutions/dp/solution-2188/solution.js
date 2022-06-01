/**
 * @param {number[][]} tires
 * @param {number} changeTime
 * @param {number} numLaps
 * @return {number}
 */
var minimumFinishTime = function(tires, changeTime, numLaps) {
  let map = {};
  for (let j = 0; j < tires.length; j++) {
    let [a, b] = tires[j];
    let n = 0n;
    for (let x = 0; x < 15; x++) {
      let key = 'no' + (x + 1);
      if (map[key] === undefined) map[key] = Infinity;
      n += BigInt(a) * BigInt(b) ** BigInt(x);
      map[key] = map[key] > n ? n : map[key];
    }
  }
  for (let key in map) map[key.slice(2)] = map[key] + BigInt(changeTime);
  let result = Infinity;
  let dp = {};
  for (let i = 0; i < 15; i++) {
    if (numLaps - i - 1 < 0) break;
    let n = helper(numLaps - (i + 1)) + map['no' + (i + 1)];
    result = result > n ? n : result;
  }
  return Number(result);

  function helper(numLaps) {
    if (numLaps === 0) return 0n;
    if (dp[numLaps] !== undefined) return dp[numLaps];
    dp[numLaps] = Infinity;
    for (let i = 0; i < 15; i++) {
      if (numLaps - i - 1 < 0) break;
      let n = map[i + 1] + helper(numLaps - i - 1);
      dp[numLaps] = dp[numLaps] > n ? n : dp[numLaps];
    }
    return dp[numLaps];
  }
};
