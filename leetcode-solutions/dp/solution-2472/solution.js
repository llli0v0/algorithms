/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPalindromes = function(s, k) {
  let strdp = new Array(s.length).fill(null).map(() => new Array(s.length).fill(undefined));
  let dp = new Map();
  return helper(s.length - 1);

  function helper(index) {
    if (index < 0) return 0;
    if (dp.has(index)) return dp.get(index);
    let res = helper(index - 1);
    for (let i = index - k + 1; i >= 0; i--) {
      if (s[index] === s[i] && isPalindrome(i + 1, index - 1)) {
        res = Math.max(res, 1 + helper(i - 1));
      }
    }
    dp.set(index, res);
    return res;
  }

  function isPalindrome(a, b) {
    if (a >= b) return true;
    if (strdp[a][b] !== undefined) return strdp[a][b];
    let res;
    if (s[a] === s[b]) res = isPalindrome(a + 1, b - 1);
    else res = false;
    strdp[a][b] = res;
    return res;
  }
};
