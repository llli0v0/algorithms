/**
 * @param {character[][]} matrix
 * @return {number}
 */

/**
 * 
 * 将问题转化成 84.柱形图的最大矩形面积问题 求解
 */
var maximalSquare = function(matrix) {
  if (!matrix.length) return 0;
  let heights = new Array(matrix[0].length).fill(0);
  let result = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === '1') {
        heights[j] += 1;
      } else {
        heights[j] = 0;
      }
    }
    result = Math.max(result, helper(heights));
  }
  return result;

  function helper(heights) {
    if (!heights.length) return 0;
    let stack = [];
    let result = 0;
    for (let i = 0; i < heights.length; i++) {
      while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
        result = Math.max(
          result,
          Math.min(heights[stack.pop()], stack.length ? i - stack[stack.length - 1] - 1 : i) ** 2
        );
      }
      stack.push(i);
    }
    if (stack.length) result = Math.max(result, Math.min(heights[stack[0]], heights.length) ** 2);
    for (let i = 1; i < stack.length; i++) {
      result = Math.max(
        result,
        Math.min(heights[stack[i]], heights.length - stack[i - 1] - 1) ** 2
      );
    }
    return result;
  }
};