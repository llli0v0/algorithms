/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function(words, puzzles) {
  let M = {};

  for (let i = 0; i < words.length; i++) {
    words[i] = [...new Set(Array.from(words[i]))];

    let b = 0;

    for (let j = 0; j < words[i].length; j++) {
      b += 1 << (words[i][j].charCodeAt() - 96);
    }

    if (M[b] === undefined) M[b] = 0;
    M[b] += 1;
  }

  let S = new Set();
  let result = new Array(puzzles.length).fill(0);

  for (let i = 0; i < puzzles.length; i++) {
    helper(puzzles[i].slice(1), '');

    let b = 1 << (puzzles[i][0].charCodeAt() - 96);

    for (let s of S) {
      let k = b;

      for (let j = 0; j < s.length; j++) k += 1 << (s[j].charCodeAt() - 96);

      result[i] += (M[k] === undefined ? 0 : M[k]);
    }

    S = new Set();
  }

  return result;

  function helper(s, c) {
    if (!s) return S.add(c);

    helper(s.slice(1), c);
    helper(s.slice(1), c + s[0]);
  }
};
