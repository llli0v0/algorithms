/**
 * @param {string} floor
 * @param {number} numCarpets
 * @param {number} carpetLen
 * @return {number}
 */
var minimumWhiteTiles = function(floor, numCarpets, carpetLen) {
  let map = { 0: Number(floor[0]) };
  for (let i = 1; i < floor.length; i++) map[i] = Number(floor[i]) + map[i - 1];
  let dp = {};
  let res = 0;
  helper(floor.length - 1, numCarpets);
  return map[floor.length - 1] - res;

  function helper(index, numCarpets) {
    if (index < 0 || numCarpets === 0) return 0;
    let key = `${index} ${numCarpets}`;
    if (dp[key] !== undefined) return dp[key];
    dp[key] = Math.max(helper(index - 1, numCarpets),
      map[index] - (map[index - carpetLen] === undefined ? 0 : map[index - carpetLen]) + helper(index - carpetLen, numCarpets - 1));
    res = Math.max(res, dp[key]);
    return dp[key];
  }
};
