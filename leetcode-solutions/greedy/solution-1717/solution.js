/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
  let stack = [];
  result = 0;
  let b = x > y ? 'ab' : 'ba';
  let e = b === 'ab' ? 'ba' : 'ab';
  let c = x > y ? x : y;
  let f = c === x ? y : x;
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
    if (stack.length > 1) {
      let a = stack[stack.length - 2] + stack[stack.length - 1];
      if (a === b) {
        result += c;
        stack.pop();
        stack.pop();
      }
    }
  }
  let newStack = [];
  for (let i = 0; i < stack.length; i++) {
    newStack.push(stack[i]);
    if (newStack.length > 1) {
      let a = newStack[newStack.length - 2] + newStack[newStack.length - 1];
      if (a === e) {
        result += f;
        newStack.pop();
        newStack.pop();
      }
    }
  }
  return result;
};