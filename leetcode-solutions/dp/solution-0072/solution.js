/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let matrix = new Array(word1.length + 1).fill(null).map(() => new Array(word2.length + 1).fill(null));
  for (let i = 0; i <= word1.length; i++) {
    matrix[i][0] = i;
  }
  for (let i = 0; i <= word2.length; i++) {
    matrix[0][i] = i;
  }
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      let word1Index = i - 1, word2Index = j - 1;
      if (word1[word1Index] === word2[word2Index]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(matrix[i - 1][j], matrix[i - 1][j - 1], matrix[i][j - 1]) + 1;
      }
    }
  }
  return matrix[word1.length][word2.length];
};

module.exports = { solution: minDistance };