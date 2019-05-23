/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  if (r * c !== nums[0].length * nums.length) return nums;
  let result = new Array(r).fill(null).map(() => []);
  let x = 0, y = 0;
  for (let i = 0; i < result.length; i++) {
    while (result[i].length < c) {
      result[i].push(nums[x][y]);
      y++;
      y === nums[0].length && (y = 0, x++);
    }
  }
  return result;
};