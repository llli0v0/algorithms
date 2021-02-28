/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var longestPalindrome = function(word1, word2) {
  let word = word1 + word2;
  let dp = new Array(word.length).fill(null).map(() => new Array(word.length).fill(0));
  for (let i = 1; i <= word.length; i++) {
    for (let j = 0; j + i - 1 < word.length; j++) {
      if (i === 1) dp[j][j + i - 1] = 1;
      else if (i === 2) {
        if (word[j] === word[j + i - 1]) dp[j][j + i - 1] = 2;
        else dp[j][j + i - 1] = 1;
      } else {
        dp[j][j + i - 1] = Math.max(
          word[j] === word[j + i - 1] ? 2 + dp[j + 1][j + i - 2] : dp[j + 1][j + i - 2],
          dp[j][j + i - 2],
          dp[j + 1][j + i - 1]
        );
      }
    }
  }
  let word1Map = {};
  for (let i = 0; i < word1.length; i++) {
    if (word1Map[word1[i]] === undefined) word1Map[word1[i]] = i;
  }
  let result = 0;
  for (let i = 0; i < word2.length; i++) {
    if (word1Map[word2[i]] !== undefined) {
      let a = word1Map[word2[i]];
      let b = i + word1.length;
      if (b - a === 1) result = Math.max(result, 2);
      else result = Math.max(result, 2 + dp[a + 1][b - 1]);
    }
  }
  return result;
};