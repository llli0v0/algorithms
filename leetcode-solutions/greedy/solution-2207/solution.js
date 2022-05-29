/**
 * @param {string} text
 * @param {string} pattern
 * @return {number}
 */
var maximumSubsequenceCount = function(text, pattern) {
  let text1 = pattern[0] + text;
  let text2 = text + pattern[1];
  let count = 0;
  let res1 = 0;
  for (let i = 0; i < text1.length; i++) {
    if (text1[i] === pattern[1]) res1 += count;
    if (text1[i] === pattern[0]) count++;
  }
  count = 0;
  let res2 = 0;
  for (let i = text2.length - 1; i >= 0; i--) {
    if (text2[i] === pattern[0]) res2 += count;
    if (text2[i] === pattern[1]) count++;
  }
  return Math.max(res1, res2);
};