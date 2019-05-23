/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    let cur = i;
    let index = 0;
    let count = { count: 0 };
    while (typeof nums[cur] !== 'object') {
      let val = nums[cur];
      nums[cur] = { index: index, val: val, count: count };
      nums[cur].count.count += 1;
      cur = nums[cur].val;
      index += 1;
    }
  }
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result = Math.max(result, nums[i].count.count - nums[i].index);
  }
  return result;
};

console.log(arrayNesting([5,4,0,3,1,6,2]));