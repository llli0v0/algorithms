/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function(nums) {
  let oddIndex = [];
  let evenIndex = [];
  for (let i = 0; i < nums.length; i++) {
    if (i % 2) {
      if (oddIndex.length) oddIndex.push(oddIndex[oddIndex.length - 1] + nums[i]);
      else oddIndex.push(nums[i]);
      if (evenIndex.length) evenIndex.push(evenIndex[evenIndex.length - 1]);
      else evenIndex.push(0);
    } else {
      if (evenIndex.length) evenIndex.push(evenIndex[evenIndex.length - 1] + nums[i]);
      else evenIndex.push(nums[i]);
      if (oddIndex.length) oddIndex.push(oddIndex[oddIndex.length - 1]);
      else oddIndex.push(0);
    }
  }
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      if (oddIndex[oddIndex.length - 1] === evenIndex[evenIndex.length - 1] - nums[0]) result++;
    } else if (i === nums.length - 1) {
      if ((nums.length - 1) % 2) {
        if (oddIndex[oddIndex.length - 1] - nums[nums.length - 1] === evenIndex[evenIndex.length - 1]) result++;
      } else {
        if (evenIndex[evenIndex.length - 1] - nums[nums.length - 1] === oddIndex[oddIndex.length - 1]) result++;
      }
    } else {
      if (i % 2) {
        if (oddIndex[oddIndex.length - 1] - oddIndex[i - 1] - nums[i] + evenIndex[i - 1] === evenIndex[evenIndex.length - 1] - evenIndex[i - 1] + oddIndex[i - 1]) result++;
      } else {
        if (evenIndex[evenIndex.length - 1] - evenIndex[i - 1] - nums[i] + oddIndex[i - 1] === oddIndex[oddIndex.length - 1] - oddIndex[i - 1] + evenIndex[i - 1]) result++;
      }
    }
  }
  return result;
};