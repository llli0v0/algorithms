/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
  let counter = {};
  let result = '';
  for (let i = 0; i < T.length; i++) {
    if (counter[T[i]] === undefined) {
      counter[T[i]] = 0;
    }
    counter[T[i]]++;
  }
  for (let i = 0; i < S.length; i++) {
    if (counter[S[i]]) {
      result += new Array(counter[S[i]]).fill(S[i]).join('');
      delete counter[S[i]];
    }
  }
  for (let key in counter) {
    result += new Array(counter[key]).fill(key).join('');
  }
  return result;
};