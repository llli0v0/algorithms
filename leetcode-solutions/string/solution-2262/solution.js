/**
 * @param {string} s
 * @return {number}
 */
var appealSum = function(s) {
  let noLetterCountMap = {};
  let letters = [];
  for (let i = 97; i < 97 + 26; i++) {
    let letter = String.fromCharCode(i);
    letters.push(letter);
    noLetterCountMap[letter] = 0;
  }
  let count = 0;
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    count++;
    for (let j = 0; j < letters.length; j++) {
      let letter = letters[j];
      if (s[i] !== letter) {
        noLetterCountMap[letter]++;
      } else {
        count += noLetterCountMap[letter];
        noLetterCountMap[letter] = 0;
      }
    }
    result += count;
  }
  return result;
};
