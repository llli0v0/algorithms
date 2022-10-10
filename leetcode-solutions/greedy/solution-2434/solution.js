/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function(s) {
  let counter = {};
  for (let i = 0; i < s.length; i++) {
    let e = s[i];
    if (counter[e] === undefined) counter[e] = 0;
    counter[e]++;
  }
  let cur = 97;
  while (!counter[String.fromCharCode(cur)]) cur++;
  let stack = [];
  let res = '';
  for (let i = 0; i < s.length; i++) {
    let e = s[i];
    while (stack.length && String.fromCharCode(cur) >= stack[stack.length - 1]) {
      res += stack.pop();
    }
    stack.push(e);
    counter[e]--;
    while (!counter[String.fromCharCode(cur)] && cur < 123) cur++;
  }
  res += stack.reverse().join('');
  return res;
};
