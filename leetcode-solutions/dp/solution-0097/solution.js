/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;

  let dp = { '-1 -1': true };

  for (let i = 0; i < s3.length; i++) {
    let f = false;

    for (let j = 0; j <= i && j < s1.length; j++) {
      if (s1[j] === s3[i] && dp[j - 1 + ' ' + (i - j - 1)]) {
        dp[j + ' ' + [i - j - 1]] = true;
        f = true;
      }
    }
    for (let j = 0; j <= i && j < s2.length; j++) {
      if (s2[j] === s3[i] && dp[i - j - 1 + ' ' + (j - 1)]) {
        dp[i - j - 1 + ' ' + j] = true;
        f = true;
      }
    }
    
    if (!f) return false;
  }

  return true;
};