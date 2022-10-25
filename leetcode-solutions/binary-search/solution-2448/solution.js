/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(nums, cost) {
  let l = -1;
  let r = 1000001;
  let res;
  while (l < r) {
    let m = Math.floor((l + r) / 2);
    let [a, b, c] = [0, 0, 0];
    for (let i = 0; i < nums.length; i++) {
      let [co, nu] = [cost[i], nums[i]];
      a += co * Math.abs(nu - (m - 1));
      b += co * Math.abs(nu - m);
      c += co * Math.abs(nu - (m + 1));
    }
    if (a > b && b > c) {
      l = m + 1;
    } else if (a === b || b === c) {
      l = r = m;
    } else {
      r = m;
    }
    res = Math.min(a, b, c);
  }
  return res;
};
