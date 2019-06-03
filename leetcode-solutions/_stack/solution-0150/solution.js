/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === '/' || tokens[i] === '*' || tokens[i] === '+' || tokens[i] === '-') {
      let a = stack.pop();
      let b = stack.pop();
      let res = String(parseInt(eval(b + tokens[i] + a)));
      if (res[0] === '-') {
        stack.push('(' + res + ')');
      } else {
        stack.push(res);
      }
    } else {
      if (tokens[i][0] === '-') {
        stack.push('(' + tokens[i] + ')');
      } else {
        stack.push(tokens[i]);
      }
    }
  }
  return stack[0][0] === '(' ? parseInt(stack[0].slice(1, stack[0].length - 1)) : parseInt(stack[0]);
};