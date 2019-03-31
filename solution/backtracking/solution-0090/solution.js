/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums = nums.sort();
  let re = new Set();
  for (let i = 0; i < nums.length; i++) {
    let d = '' + nums[i];
    findSub(d, nums.slice(i + 1));
    re.add(d);
  }
  return Array.from(re).map(i => i.split('_')).concat([[]]);
  function findSub(s, ar) {
    if (!ar.length) return;
    for (let i = 0; i < ar.length; i++) {
      let ss = s + '_' + ar[i];
      findSub(ss, ar.slice(i + 1));
      re.add(ss);
    }
  }
};