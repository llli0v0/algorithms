/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var minAbsDifference = function(nums, goal) {
  let arr1 = nums.slice(0, Math.floor(nums.length / 2));
  let arr2 = nums.slice(Math.floor(nums.length / 2));
  let arr1Sum = [];
  let arr2Sum = [];
  let sum = Infinity;
  for (let i = 0; i < 2**(Math.max(arr1.length, arr2.length)); i++) {
    let sum1 = 0;
    let sum2 = 0;
    for (let j = 0; j < Math.max(arr1.length, arr2.length); j++) {
      if (((1 << j) & i) === (1 << j) && j < arr1.length) sum1 += arr1[j];
      if (((1 << j) & i) === (1 << j) && j < arr2.length) sum2 += arr2[j];
    }
    arr1Sum.push(sum1);
    arr2Sum.push(sum2);
    if (Math.abs(sum - goal) > Math.abs(sum1 - goal)) sum = sum1;
    if (Math.abs(sum - goal) > Math.abs(sum2 - goal)) sum = sum2;
  }
  arr2Sum.sort((a, b) => a - b);
  for (let i = 0; i < arr1Sum.length; i++) {
    let g = goal - arr1Sum[i];
    if (g <= arr2Sum[0]) {
      if (Math.abs(sum - goal) > Math.abs(arr2Sum[0] - g)) sum = arr1Sum[i] + arr2Sum[0];
    } else if (g >= arr2Sum[arr2Sum.length - 1]) {
      if (Math.abs(sum - goal) > Math.abs(arr2Sum[arr2Sum.length - 1] - g)) sum = arr1Sum[i] + arr2Sum[arr2Sum.length - 1];
    } else {
      let l = 0;
      let r = arr2Sum.length;
      while (l < r) {
        let m = Math.floor((l + r) / 2);
        if (arr2Sum[m] < g && arr2Sum[m + 1] <= g) {
          l = m + 1;
        } else {
          r = m;
        }
      }
      if (Math.abs(sum - goal) > Math.abs(arr2Sum[l] - g)) sum = arr1Sum[i] + arr2Sum[l];
      if (Math.abs(sum - goal) > Math.abs(arr2Sum[l + 1] - g)) sum = arr1Sum[i] + arr2Sum[l + 1];
    }
  }
  return Math.abs(sum - goal);
};