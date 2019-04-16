/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  s = s.split('');
  let ns = [];
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i]) && !isNaN(ns[ns.length - 1])) {
      ns.push(ns.pop() + s[i]);
    } else {
      ns.push(s[i]);
    }
  }
  let stack = [];
  for (let i = 0; i < ns.length; i++) {
    if (ns[i] === ']') {
      let str = '';
      while (stack[stack.length - 1] !== '[') {
        str = stack.pop() + str;
      }
      stack.pop();
      stack.push(new Array(parseInt(stack.pop())).fill(str).join(''));
    } else {
      stack.push(ns[i]);
    }
  }
  return stack.join('');
};