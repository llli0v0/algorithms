/**
 * @param {character[][]} matrix
 * @return {number}
 */

 /**
  * 
  * 回顾
  * 
  * 将问题转化成 84.柱形图的最大矩形面积问题 求解
  */
var maximalRectangle = function(matrix) {
  if (!matrix.length) return 0;
  let currentHistogram = Array(matrix[0].length).fill(0);
  let result = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let n = 0; n < matrix[i].length; n++) {
      if (matrix[i][n] === '0') {
        currentHistogram[n] = 0;
      } else {
        currentHistogram[n] = currentHistogram[n] + 1;
      }
    }
    result = Math.max(result, largestRectangleArea(currentHistogram));
  }
  return result;
  function largestRectangleArea(heights) {
    if (!heights.length) return 0;
    let stack = [];
    let result = 0;
    for (let i = 0; i < heights.length; i++) {
      while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
        result = Math.max(result, heights[stack.pop()] * (stack.length ? i - stack[stack.length - 1] - 1 : i));
      }
      stack.push(i);
    }
    result = Math.max(heights[stack[0]] * heights.length, result);
    for (let i = 1; i < stack.length; i++) {
      result = Math.max(heights[stack[i]] * (heights.length - stack[i - 1] - 1), result);
    }
    return result;
  };
};