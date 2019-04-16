/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (s === '' || t === '') return '';
  let expect = {};
  let current = {};
  let minLen = 0;
  let start, minStart;
  let startWord;
  for (let i = 0; i < t.length; i++) {
    if (expect[t[i]] === undefined) {
      expect[t[i]] = 1;
      current[t[i]] = 0;
    } else {
      expect[t[i]] = expect[t[i]] + 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (expect[s[i]] !== undefined) {
      if (start === undefined) {
        start = i;
        startWord = s[i];
      }
      if (s[i] === startWord && expect[startWord] === current[startWord]) {
        if (s[start + 1] === s[start]) {
          start = start + 1;
        } else {
          let index = start + 1;
          while (
            expect[s[index]] === undefined ||
            (expect[s[index]] !== undefined && current[s[index]] > expect[s[index]])
          ) {
            if (current[s[index]] !== undefined) current[s[index]] = current[s[index]] - 1;
            index++;
          }
          start = index;
          startWord = s[start];
        }
      } else {
        current[s[i]] = current[s[i]] + 1;
      }
      if (check(current, expect)) {
        if (minLen === 0) {
          minStart = start;
          minLen = i - start + 1;
        } else if (i - start + 1 < minLen) {
          minStart = start;
          minLen = i - start + 1;
        }
      }
    }
  }
  function check(current, expect) {
    for (let key in current) {
      if (current[key] < expect[key]) return false;
    }
    return true;
  }
  if (minLen === 0) return '';
  return s.slice(minStart, minStart + minLen);
};