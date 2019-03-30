/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
  let stack = [];
  for (let i = 0; i < S.length; i++) {
    if (stack.length === 0 || S[i] === '(') {
      stack.push(S[i]);
    } else {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        stack.push(S[i]);
      }
    }
  }
  return stack.length;
};

minAddToMakeValid("()))((");