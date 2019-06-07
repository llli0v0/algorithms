/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
  if (!words.length) return 0;
  let result = [];
  while (words.length) {
    let a = words.shift();
    let is = false;
    for (let i = 0; i < result.length; i++) {
      if (helper(a, result[i])) {
        result[i] = result[i].length > a.length ? result[i] : a;
        is = true;
        break;
      }
    }
    if (!is) result.push(a);
  }
  return result.join('').length + result.length;

  function helper(a, b) {
    if (a.length > b.length) return a.slice(a.length - b.length) === b;
    return b.slice(b.length - a.length) === a;
  }
};