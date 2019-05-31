/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let stack = [];
  path += '/';
  for (let i = 0; i < path.length; i++) {
    if (path[i] === '/') {
      if (stack[stack.length - 1] === '..') {
        if (stack.length > 1) stack.splice(stack.length - 3);
      } else if (stack[stack.length - 1] === '.') {
        stack.pop();
      } else {
        if (stack[stack.length - 1] !== '/') stack.push(path[i]);
      }
    } else {
      if (stack[stack.length - 1] === '/') {
        stack.push(path[i]);
      } else {
        stack[stack.length - 1] += path[i];
      }
    }
  }
  if (stack[stack.length - 1] === '/' && stack.length > 1) stack.pop();
  return stack.join('');
};