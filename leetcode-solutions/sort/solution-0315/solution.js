/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = { index: i, val: nums[i] };
  }
  let counter = new Array(nums.length).fill(0);
  mergeSort(nums);
  return counter;
  function mergeSort(nums) {
    if (nums.length < 2) return nums;
    let midIndex = Math.floor(nums.length / 2);
    let left = mergeSort(nums.slice(0, midIndex));
    let right = mergeSort(nums.slice(midIndex));
    let sorted = [];
    while (left.length && right.length) {
      /**
       * Here's the key
       * Normal merge sort, It's always going to sort left, right, in the forward order. But it's going to time out here.
       * We can reverse order here
       * 
       * 正序归并排序会超时，这里倒序归并可以解决
       */
      if (right[right.length - 1].val < left[left.length - 1].val) {
        counter[left[left.length - 1].index] += right.length;
        sorted.unshift(left.pop());
      } else {
        sorted.unshift(right.pop());
      }
    }
    sorted = (left.length ? left : right).concat(sorted);
    return sorted;
  }
};