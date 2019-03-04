/**
 * @param {number[]} rods
 * @return {number}
 */
var tallestBillboard = function(rods) {
  let dp = { 0: 0 };
  for (let i = 0; i < rods.length; i++) {
    cur = {};
    for (let key in dp) {
      key = parseInt(key);
      cur[key + rods[i]] = Math.max(dp[key] + rods[i], cur[key + rods[i]] ? cur[key + rods[i]] : 0);
      cur[key] = Math.max(dp[key], cur[key] ? cur[key] : 0);
      cur[key - rods[i]] = Math.max(dp[key], cur[key - rods[i]] ? cur[key - rods[i]] : 0);
    }
    dp = cur;
  }
  return dp[0];
};