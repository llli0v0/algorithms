/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = String(nums[i]);
  }
  let result = [nums.shift()];
  while (nums.length) {
    let e = nums.shift();
    let d = result.length;
    let m = false;
    while (d - 1 >= 0 && !m) {
      m = helper(e, result[d - 1], d, result);
      d -= 1;
    }
    if (d - 1 < 0 && !m) {
      result.unshift(e);
      continue;
    }
  }
  while (!Number(result[0]) && result.length > 1) result.shift();
  return result.join('');
};

function helper(e, n, d, result) {
  if (e === n) {
    result.splice(d, 0, e);
    return true;
  }
  let oe = e;
  let t = 10;
  while (t) {
    e += e;
    n += n;
    t -= 1;
  }
  let len = Math.min(e.length, n.length);
  for (let i = 0; i < len; i++) {
    if (e[i] < n[i]) {
      result.splice(d, 0, oe);
      return true;
    }
    if (e[i] > n[i]) return false;
  }
}