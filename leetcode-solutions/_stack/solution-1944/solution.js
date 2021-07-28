/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function(heights) {
  let result = new Array(heights.length).fill(0);
  let stack = [heights[heights.length - 1]];
  for (let i = heights.length - 2; i >= 0; i--) {
    while (stack.length && heights[i] > stack[0]) {
      stack.shift();
      result[i]++;
    }
    if (stack.length) result[i]++;
    stack.unshift(heights[i]);
  }
  return result;
};