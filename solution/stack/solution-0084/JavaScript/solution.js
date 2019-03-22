/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
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