/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
  let gcdMap = {};
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      gcdMap[`${nums[i]} ${nums[j]}`] = gcd(nums[i], nums[j]);
    }
  }
  let cases = [];
  for (let i = 0; i < 2**nums.length; i++) {
    let a = 0;
    for (let j = 0; j < nums.length; j++) {
      if (((1 << j) & i) === (1 << j)) a++;
    }
    if (a % 2 === 0) cases.push([i, a]);
  }
  cases.sort((a, b) => a[1] - b[1]);
  let result = 0;
  let dp = { 0: 0 };
  for (let i = 1; i < cases.length; i++) {
    let s = cases[i][0].toString(2).split('').reverse().join('');
    dp[cases[i][0]] = -Infinity;
    for (let m = 0; m < s.length; m++) {
      for (let n = m + 1; n < s.length; n++) {
        if (s[m] === '1' && s[n] === '1') {
          dp[cases[i][0]] = Math.max(dp[cases[i][0]], (cases[i][1] / 2) * gcdMap[`${nums[m]} ${nums[n]}`] + dp[cases[i][0] - (1 << m) - (1 << n)]);
          result = Math.max(result, dp[cases[i][0]]);
        }
      }
    }
  }
  return result;

  function gcd(a, b) {
    if (a === 1 || b === 1) return 1;
    if (a % b === 0) return b;
    else if (b % a === 0) return a;
    if (a > b) return gcd(a % b, b);
    else return gcd(a, b % a);
  }
};