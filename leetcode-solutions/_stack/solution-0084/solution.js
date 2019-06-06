/**
 * @param {number[]} heights
 * @return {number}
 */

/**
 * 
 * 回顾
 * 
 * 问题的核心是对于 heights[i] 寻找 heigths[i] 的左右边界
 * 当把 heigths[i] 插入到 stack 中时
 * 我们利用 stack 来记录 heights 项的 index
 * 如果 heigths[stack[stack.length - 1]] < heigths[i]
 * 我们就找到了第 stack[stack.length - 1] 项的 右边界
 * 同时 while 循环 直到 stack.length === 0 || heigths[stack[stack.length - 1]] < heights[i]
 * 这时 我们找到了 heights[i] 的左边界
 * heights[i] 一直在 stack 中 停留 直到 heigths[i] 被 pop
 * result = Math.max(result, heights[i] * (i - stack[stack.length - 1] - 1))
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
  if (stack.length) result = Math.max(heights[stack[0]] * heights.length, result);
  for (let i = 1; i < stack.length; i++) {
    result = Math.max(heights[stack[i]] * (heights.length - stack[i - 1] - 1), result);
  }
  return result;
};