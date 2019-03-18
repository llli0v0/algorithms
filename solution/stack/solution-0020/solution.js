/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (!s) return true;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '{' || s[i] === '(' || s[i] === '[') {
      stack.push(s[i]);
    } else {
      if (!stack.length) return false;
      if (s[i] === '}' && stack[stack.length - 1] !== '{') return false;
      if (s[i] === ']' && stack[stack.length - 1] !== '[') return false;
      if (s[i] === ')' && stack[stack.length - 1] !== '(') return false;
      stack.pop();
    }
  }
  if (stack.length) return false;
  return true;
};