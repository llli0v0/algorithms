/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
  let preSum = [];
  let vowel = 'aeiou';
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (vowel.indexOf(word[0]) > -1 && vowel.indexOf(word[word.length - 1]) > -1) {
      preSum.push((preSum[preSum.length - 1] ?? 0) + 1);
    } else {
      preSum.push(preSum[preSum.length - 1] ?? 0);
    }
  }
  let res = [];
  for (let i = 0; i < queries.length; i++) {
    let [a, b] = queries[i];
    res.push(preSum[b] - (preSum[a - 1] ?? 0));
  }
  return res;
};
