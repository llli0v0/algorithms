/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function(jobDifficulty, d) {
  let computed = {};
  return dp(jobDifficulty.length - 1, d) > 10**9 ? -1 : dp(jobDifficulty.length - 1, d);

  function dp(index, d) {
    if (d > index + 1) return Infinity;
    else if (d === 1) return Math.max(...jobDifficulty.slice(0, index + 1));
    let key = index + '-' + d;
    if (computed[key] !== undefined) return computed[key];
    computed[key] = Infinity;
    for (let i = index; i >= 0; i--) {
      computed[key] = Math.min(computed[key], Math.max(...jobDifficulty.slice(i, index + 1)) + dp(i - 1, d - 1));
    }
    return computed[key];
  }
};