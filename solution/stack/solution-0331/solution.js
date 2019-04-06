/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
  if (preorder.length === 1 && preorder[0] === '#') return true;
  let stack = [];
  preorder = preorder.split(',');
  for (let i = 0; i < preorder.length; i++) {
    if (preorder[i] === '#') {
      if (stack[stack.length - 1] === '#' || stack[stack.length - 1] === 'M') {
        stack.pop();
        if (isNaN(stack[stack.length - 1])) return false;
        stack.pop();
        stack.push('M');
        while (
          (stack[stack.length - 1] === 'M' || stack[stack.length - 1] === '#') &&
          (stack[stack.length - 2] === 'M' || stack[stack.length - 2] === '#')
        ) {
          stack.pop();
          stack.pop();
          if (isNaN(stack[stack.length - 1])) {
            return false;
          } else {
            stack.pop();
            stack.push('M');
          }
        }
      } else {
        stack.push('#');
      }
    } else {
      stack.push(preorder[i]);
    }
  }
  return stack[0] === 'M' && stack.length === 1;
};