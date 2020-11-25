/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {
  const letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let result = '';
  while (n) {
    for (let i = 26; i > 0; i--) {
      if (k - i >= n - 1) {
        result = letter[i - 1] + result;
        k -= i;
        break;
      }
    }
    n--;
  }
  return result;
};