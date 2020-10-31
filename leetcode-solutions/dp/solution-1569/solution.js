let mod = 10n**9n + 7n;
let countComputed = {};

/**
 * @param {number[]} nums
 * @return {number}
 */
var numOfWays = function(nums) {
  return Number(helper(nums) - 1n);
};

function helper(nums) {
  if (nums.length <= 1) return 1n;
  let root = nums[0];
  let leftTree = [];
  let rightTree = [];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < root) leftTree.push(nums[i]);
    else rightTree.push(nums[i]);
  }
  return (mixinTwoOrderArrWays(leftTree.length, rightTree.length) * helper(leftTree)) % mod * helper(rightTree) % mod;
}

function mixinTwoOrderArrWays(arr1Count, arr2Count) {
  if (arr1Count === 0 && arr2Count === 0) return 0n;
  else if (arr1Count === 0 || arr2Count === 0) return 1n;
  let key = `${arr1Count} ${arr2Count}`;
  if (countComputed[key] !== undefined) return countComputed[key];
  countComputed[key] = (mixinTwoOrderArrWays(arr1Count - 1, arr2Count) + mixinTwoOrderArrWays(arr1Count, arr2Count - 1)) % mod;
  return countComputed[key];
}