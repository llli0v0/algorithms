/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function(words, letters, score) {
  let L = {};

  for (let i = 0; i < letters.length; i++) {
    if (L[letters[i]] === undefined) L[letters[i]] = 0;
    L[letters[i]]++;
  }

  let result = 0;

  helper({}, 0);

  return result;

  function helper(M, index) {
    if (index === words.length) {
      let r = 0;

      for (let k in M) {
        r += score[k.charCodeAt() - 97] * M[k];
      }

      return result = Math.max(result, r);
    }

    let m = {...M};

    helper(m, index + 1);

    for (let i = 0; i < words[index].length; i++) {
      let a = words[index][i];

      if (M[a] === undefined) M[a] = 0;
      M[a]++;

      if (L[a] === undefined || M[a] > L[a]) return;
    }

    helper(M, index + 1);
  }
};