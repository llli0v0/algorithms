/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var kSimilarity = function(A, B) {
  let memo = {};
  return helper(A, B);

  function helper(a, b) {
    if (!a) return 0;
    if (memo[a] !== undefined) return memo[a];
    if (a[0] === b[0]) return helper(a.slice(1), b.slice(1));
    memo[a] = Infinity;
    for (let i = 0; i < a.length; i++) {
      if (a[i] === b[0]) {
        memo[a] = Math.min(memo[a], 1 + helper(a.slice(1, i) + a[0] + a.slice(i + 1), b.slice(1)));
      }
    }
    return memo[a];
  }
};