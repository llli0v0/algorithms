/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  let result = '';
  let openCount = 0;
  let closeCount = 0;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') openCount++;
    if (S[i] === ')') closeCount++;
    if (openCount === closeCount && openCount !== 0) {
      let s = S.slice(i - (openCount * 2 - 2), i);
      result += s;
      openCount = 0;
      closeCount = 0;
    }
  }
  return result;
};