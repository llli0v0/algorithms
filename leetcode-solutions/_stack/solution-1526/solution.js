/**
 * @param {number[]} target
 * @return {number}
 */
 var minNumberOperations = function(target) {
  let stack = [target[0]];
  for (let i = 1; i < target.length; i++) {
    if (stack.length === 1) {
      if (target[i] > stack[0]) stack[0] = target[i];
      else if (target[i] < stack[0]) stack.push(target[i]);
    } else {
      if (target[i] > stack[stack.length - 1]) {
        if (stack[stack.length - 1] < stack[stack.length - 2]) {
          stack.push(target[i]);
        } else {
          stack[stack.length - 1] = target[i];
        }
      } else if (target[i] < stack[stack.length - 1]) {
        if (stack[stack.length - 1] < stack[stack.length - 2]) {
          stack[stack.length - 1] = target[i];
        } else {
          stack.push(target[i]);
        }
      }
    }
  }
  let result = stack[0];
  for (let i = 2; i < stack.length; i += 2) {
    result += stack[i] - stack[i - 1];
  }
  return result;
};