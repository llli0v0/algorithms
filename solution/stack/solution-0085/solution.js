/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  if (matrix.length === 0) return 0;
  var largestRectangleArea = function(heights) {
    let stack = [];
    let currentMax = 0;
    for (let i = 0; i < heights.length; i++) {
      if (stack.length === 0) {
        stack.push(i);
        continue;
      }
      while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
        let top = stack.pop();
        if (stack.length === 0) {
          currentMax = Math.max(i * heights[top], currentMax);
        } else {
          currentMax = Math.max((i - stack[stack.length - 1] - 1) * heights[top], currentMax);
        }
      }
      stack.push(i);
    }
    for (let i = 0; i < stack.length; i++) {
      if (i === 0) {
        currentMax = Math.max(heights[stack[0]] * heights.length, currentMax);
      } else {
        currentMax = Math.max(heights[stack[i]] * (heights.length - stack[i - 1] - 1), currentMax);
      }
    }
    return currentMax;
  };
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
};