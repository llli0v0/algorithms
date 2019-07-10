/**
 * @param {number[]} A
 * @return {boolean}
 */
var splitArraySameAverage = function(A) {
  if (A.length < 2) return false;

  let S = 0;
  let B = 10**6*Number.EPSILON;

  for (let i = 0; i < A.length; i++) {
    S += A[i];
  }
  
  let C = S / A.length;
  let L = Math.ceil(A.length / 2);

  let result = false;

  for (let i = 1; i <= L; i++) {
    if (C * i % 1 > B) continue;
    helper(i);
  }

  return result;

  function helper(a) {
    if (result) return;

    let W = a * C;
    let dp = {};
    
    for (let i = 0; i <= W; i++) {
      dp[i] = [0, new Set()];
      for (let j = 0; j < A.length; j++) {
        if (dp[i - A[j]] && dp[i - A[j]][0] === i - A[j] && !dp[i - A[j]][1].has(j)) {
          dp[i][1] = new Set(dp[i - A[j]][1]);
          dp[i][1].add(j);
          dp[i][0] = i;
          if (Math.abs(i - W) < B && dp[i][1].size === a) result = true;
        }
      }
    }
  }
};