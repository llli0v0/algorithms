/**
 * @param {number[][]} flights
 * @param {number[][]} days
 * @return {number}
 */
var maxVacationDays = function(flights, days) {
  let M = {};
  for (let i = 0; i < flights.length; i++) {
    M[i] = {};
    M[i][i] = i;
    for (let j = 0; j < flights[i].length; j++) {
      if (flights[i][j]) {
        if (M[i] === undefined) M[i] = {};
        M[i][j] = j;
      }
    }
  }
  let dp = new Array(days[0].length).fill(null).map(() => new Object());
  for (let key in M[0]) {
    dp[0][key] = days[key][0];
  }
  for (let i = 1; i < dp.length; i++) {
    for (let key in dp[i - 1]) {
      for (let k in M[key]) {
        if (dp[i][k] === undefined) {
          dp[i][k] = dp[i - 1][key] + days[k][i];
        } else {
          dp[i][k] = Math.max(dp[i][k], dp[i - 1][key] + days[k][i]);
        }
      }
    }
  }
  let result = 0;
  for (let key in dp[dp.length - 1]) {
    result = Math.max(result, dp[dp.length - 1][key]);
  }
  return result;
};