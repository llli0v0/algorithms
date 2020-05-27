/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      arr.push([nums[i][j], i, i + j]);
    }
  }
  arr.sort((a, b) => {
    if (a[2] === b[2]) return b[1] - a[1];
    return a[2] - b[2];
  })
  for (let i = 0; i < arr.length; i++) arr[i] = arr[i][0];
  return arr;
};