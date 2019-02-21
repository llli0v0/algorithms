/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  let counts = {};
  for (let i = 0; i < s.length; i++) {
    if (counts[s[i]] === undefined) counts[s[i]] = 0;
    counts[s[i]] += 1;
  }
  let stack = [];
  let alreadyInStack = {};
  for (let i = 0; i < s.length; i++) {
    while (s[i] < stack[stack.length - 1] && counts[stack[stack.length - 1]] > 0 && !alreadyInStack[s[i]]) {
      alreadyInStack[stack.pop()] = false;
    }
    if (!alreadyInStack[s[i]]) {
      stack.push(s[i]);
      alreadyInStack[s[i]] = true;
    }
    counts[s[i]] -= 1;
  }
  return stack.join('');
};

console.log(removeDuplicateLetters('cbacdcbc'));
