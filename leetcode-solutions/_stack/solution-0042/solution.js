/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if (height.length < 3) return 0;
  let stack = [];
  let maxHeightSet = [];
  let maxHeight = Math.max(...height);
  for (let i = 0; i < height.length; i++) {
    if (height[i] === maxHeight) {
      maxHeightSet.push(i);
      stack.push({ height: maxHeight, index: i });
    }
  }
  let left = stack[0].index - 1;
  let right = stack[stack.length - 1].index + 1;
  while (left >= 0) {
    while (height[left] > stack[0].height) {
      stack.shift();
    }
    stack.unshift({ height: height[left], index: left });
    left--;
  }
  while (right <= height.length - 1) {
    while (height[right] > stack[stack.length - 1].height) {
      stack.pop();
    }
    stack.push({ height: height[right], index: right });
    right++;
  }
  let result = 0;
  for (let i = 0; i < stack.length - 1; i++) {
    if (Math.abs(stack[i].index - stack[i + 1].index)) {
      let min = Math.min(stack[i].height, stack[i + 1].height);
      let start = stack[i].index + 1;
      let end = stack[i + 1].index;
      for (;start < end; start++) {
        result = result + (min - height[start]);
      }
    }
  }
  return result;
};