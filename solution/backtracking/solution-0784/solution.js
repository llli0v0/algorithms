/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  let result = new Set();
  result.add(S);
  for (let i = 0; i < S.length; i++) {
    if ('a' <= S[i] && S[i] <= 'z' || 'A' <= S[i] && S[i] <= 'Z') {
      let bb = S.slice(0, i) + S[i].toUpperCase() + S.slice(i + 1);
      let ll = S.slice(0, i) + S[i].toLowerCase() + S.slice(i + 1);
      go(bb, i + 1);
      go(ll, i + 1);
      result.add(bb);
      result.add(ll);
    }
  }
  return Array.from(result);
  function go(ss, star) {
    for (let i = star; i < ss.length; i++) {
      if ('a' <= ss[i] && ss[i] <= 'z' || 'A' <= ss[i] && ss[i] <= 'Z') {
        let bb = ss.slice(0, i) + ss[i].toLowerCase() + ss.slice(i + 1);
        let ll = ss.slice(0, i) + ss[i].toUpperCase() + ss.slice(i + 1);
        go(bb, i + 1);
        go(ll, i + 1);
        result.add(bb);
        result.add(ll);
      }
    }
  }
};