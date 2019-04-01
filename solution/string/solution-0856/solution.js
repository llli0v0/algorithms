/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
  let stack = [];
  for (let i = 0; i < S.length; i++) {
    if (stack.length === 0) {
      stack.push(S[i]);
      continue;
    }
    if (stack[stack.length - 1] === '(') {
      if (S[i] === '(') {
        stack.splice(stack.length - 1, 0, '2*');
        stack.push('(');
      } else {
        stack.pop();
        if (parseInt(stack[stack.length - 1])) {
          stack.push('+');
          stack.push('1');
        } else {
          stack.push('1');
        }
      }
    } else if (stack[stack.length - 1] === ')') {
      if (S[i] === '(') {
        stack.push('+');
        stack.push('(');
      } else {
        stack.push(')');
      }
    } else {
      if (S[i] === '(') {
        stack.push('+');
        stack.push('(');
      } else {
        stack.push(')');
      }
    }
  }
  return eval(stack.join(''));
};

console.log(scoreOfParentheses('(()(()))'));