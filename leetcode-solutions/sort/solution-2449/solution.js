/**
 * @param {number[]} nums
 * @param {number[]} target
 * @return {number}
 */
var makeSimilar = function(nums, target) {
  let [odd, even] = [[], []];
  let [todd, teven] = [[], []];
  nums.sort((a, b) => a - b);
  target.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let [m, n] = [nums[i], target[i]];
    if (m % 2) odd.push(m);
    else even.push(m);
    if (n % 2) todd.push(n);
    else teven.push(n);
  }
  let num = 0;
  let len = Math.max(odd.length, even.length);
  for (let i = 0; i < len; i++) {
    odd[i] && (num += Math.abs(odd[i] - todd[i]));
    even[i] && (num += Math.abs(even[i] - teven[i]));
  }
  return num / 4;
};
