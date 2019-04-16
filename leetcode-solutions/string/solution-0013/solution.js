/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let level = {
    'I': 1,
    'V': 2,
    'X': 3,
    'L': 4,
    'C': 5,
    'D': 6,
    'M': 7
  };
  let nums = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  let currentLevel = 0;
  let result = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (level[s[i]] >= currentLevel) {
      result += nums[s[i]];
    } else {
      result -= nums[s[i]];
    }
    currentLevel = level[s[i]];
  }
  return result;
};