/**
 * @param {string} s
 * @return {string}
 */
var encode = function(s) {
  let dp = {};

  return helper(0, s.length - 1);

  function helper(start, end) {
    if (start === end) return s[start];
    if (end < 0) return '';

    let cur = s.slice(start, end + 1);

    let k = [start, end].toString();

    if (dp[k] !== undefined) return dp[k];

    dp[k] = s;

    for (let i = 1; i <= cur.length; i++) {
      if (cur.length % i) continue;

      let index = 0;
      let a = [];

      while (index < cur.length) {
        a.push(cur.slice(index, index + i));
        index += i;
      }

      if (a.every(item => item === a[0])) {
        let b = a.length + '[' + helper(start, start + i - 1) + ']';
        if (b.length < dp[k].length) {
          dp[k] = b;
        }
      }
    }

    for (let i = start; i <= end; i++) {
      let S = helper(start, i - 1) + helper(i, end);

      if (S.length < dp[k].length) dp[k] = S;
    }

    return dp[k];
  }
};