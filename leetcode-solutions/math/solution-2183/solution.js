/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
  let map = {};
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    let g = k / gcd(cur, k);
    if (map[g] !== undefined) result += map[g];
    let log = Math.sqrt(cur);
    let set = new Set();
    for (let j = 1; j <= log; j++) {
      if (cur % j === 0) {
        if (map[j] === undefined) map[j] = 0;
        if (map[cur / j] === undefined) map[cur / j] = 0;
        if (!set.has(j)) {
          map[j]++;
          set.add(j);
        }
        if (!set.has(cur / j)) {
          map[cur / j]++;
          set.add(cur / j);
        }
      }
    }
  }
  return result;

  function gcd(a, b) {
    let c = Math.max(a, b);
    let d = Math.min(a, b);
    if (c % d === 0) return d;
    return gcd(c % d, d);
  }
};
