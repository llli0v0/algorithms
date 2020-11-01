/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var numWays = function(words, target) {
  let letters = new Array(words[0].length).fill(null).map(() => new Object());
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      let letter = words[i][j];
      if (letters[j][letter] === undefined) letters[j][letter] = 1;
      else letters[j][letter]++;
    }
  }
  let mod = 10**9 + 7;
  let result = 0;
  let computed = {};
  for (let i = 0; i < letters.length; i++) {
    result = (result + helper(i, target.length)) % mod;
  }
  return result;

  function helper(endIndex, targetLen) {
    let targetLastLetter = target[targetLen - 1];
    let count = letters[endIndex][targetLastLetter];
    if (targetLen === 1) {
      if (count === undefined) return 0;
      else return count;
    }
    let key = `${endIndex} ${targetLen}`;
    if (computed[key] !== undefined) return computed[key];
    computed[key] = 0;
    if (count !== undefined) {
      for (let i = targetLen - 2; i < endIndex; i++) {
        computed[key] = (computed[key] + helper(i, targetLen - 1) * count) % mod;
      }
    }
    return computed[key];
  }
};