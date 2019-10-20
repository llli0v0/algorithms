/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
  let M = {};

  for (let i = 0; i < startTime.length; i++) {
    if (M[endTime[i]] === undefined) M[endTime[i]] = [];
    M[endTime[i]].push([startTime[i], i]);
  }

  let A = [];

  for (let k in M) A.push([parseInt(k), ...M[k].sort((a, b) => b[0] - a[0])]);

  for (let i = 0; i < startTime.length; i++) startTime[i] = [startTime[i], 1];
  for (let i = 0; i < endTime.length; i++) endTime[i] = [endTime[i], 0];

  let B = startTime.concat(endTime);
  
  B.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  let c = 0;
  
  let N = {};

  for (let i = 0; i < B.length; i++) {
    let b = B[i];
    
    if (b[1] === 1) {
      N[b[0]] = c;
    } else {
      c = b[0];
    }
  }

  let result = 0;
  let dp = { 0: 0 };

  A.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < A.length; i++) {
    dp[A[i][0]] = 0;
    
    for (let j = 1; j < A[i].length; j++) dp[A[i][0]] = Math.max(dp[A[i][0]], profit[A[i][j][1]] + dp[N[A[i][j][0]]]);

    result = Math.max(result, dp[A[i][0]]);
    dp[A[i][0]] = Math.max(dp[A[i][0]], result);
  }

  return result;
};