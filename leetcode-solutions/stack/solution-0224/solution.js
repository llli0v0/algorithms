/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let stack = [];
  let sContainer = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') continue;
    if (s[i] === '+' || s[i] === '-' || s[i] === '(' || s[i] === ')') {
      sContainer.push(s[i]);
      continue;
    }
    let n = '';
    while (parseInt(s[i]) < 10) {
      n += s[i];
      i++;
    }
    sContainer.push(parseInt(n));
    i--;
  }
  for (let i = 0; i < sContainer.length; i++) {
    if (sContainer[i] === '-' || sContainer[i] === '+' || sContainer[i] === '(') {
      stack.push(sContainer[i]);
    } else if (stack[stack.length - 1] === '-' || stack[stack.length - 1] === '+') {
      let tail = stack.splice(stack.length - 2);
      if (tail[1] === '-') stack.push(tail[0] - sContainer[i]);
      if (tail[1] === '+') stack.push(tail[0] + sContainer[i]);
    } else if (sContainer[i] === ')') {
      stack.splice(stack.length - 2, 1);
      if (stack[stack.length - 2] === '-' || stack[stack.length - 2] === '+') {
        let tail = stack.splice(stack.length - 3);
        if (tail[1] === '-') stack.push(tail[0] - tail[2]);
        if (tail[1] === '+') stack.push(tail[0] + tail[2]);
      }
    } else {
      stack.push(sContainer[i]);
    }
  }
  return stack[0];
};

module.exports = { solution: calculate };