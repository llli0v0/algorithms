/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let stack = [];
  let res = 0;
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push(i);
    else if (s[i] === ')') {
      if (stack.length === 0) start = i + 1;
      else {
        stack.pop();
        res = stack.length === 0 ? Math.max(res, i - start + 1) : Math.max(res, i - stack[stack.length - 1]);
      }
    }
  }
  return res;
};

module.exports = { solution: longestValidParentheses };