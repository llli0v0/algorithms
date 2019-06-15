/**
 * @param {string} text
 * @return {string}
 */
var smallestSubsequence = function(text) {
  let C = {};
  for (let i = 0; i < text.length; i++) {
    if (C[text[i]] === undefined) C[text[i]] = 0;
    C[text[i]] += 1;
  }
  let S = [];
  let E = new Set();
  for (let i = 0; i < text.length; i++) {
    if (!S.length) {
      S.push(text[i]);
      E.add(text[i]);
    } else if (!E.has(text[i])) {
      let k = S[S.length - 1];
      while (text[i] <= k && C[k] > 0) E.delete(S.pop());
      S.push(text[i]);
      E.add(text[i]);
    }
    C[text[i]] -= 1;
  }
  return S.join('');
};