/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
  if (!words.length) return 0;
  words = words.sort((a, b) => a.length - b.length);
  let dp = { 0: 1 };
  for (let i = 1; i < words.length; i++) {
    dp[i] = 1;
    for (let j = i - 1; j >= 0; j--) {
      if (words[i].length - words[j].length === 0) continue;
      if (words[i].length - words[j].length > 1) break;
      if (helper(words[i], words[j])) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
  let result = 0;
  for (let k in dp) {
    result = Math.max(result, dp[k]);
  }
  return result;

  function helper(a, b) {
    for (let i = 0; i < a.length; i++) {
      if (a.slice(0, i) + a.slice(i + 1) === b) return true;
    }
    return false;
  }
};