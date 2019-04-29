/**
 * @param {number[]} tokens
 * @param {number} P
 * @return {number}
 */
var bagOfTokensScore = function(tokens, P) {
  tokens = tokens.sort((a, b) => a - b);
  if (P < tokens[0]) return 0;
  let A = 0;
  for (let i = 0; i < tokens.length; i++) {
    A += tokens[i];
  }
  while (P < A) {
    if (A - tokens[tokens.length - 1] <= P) return tokens.length - 1;
    if (A - tokens[0] <= P) return tokens.length - 1;
    let h = tokens.shift();
    let t = tokens.pop();
    A = A - h - t;
    P = P - h + t;
  }
  return tokens.length;
};