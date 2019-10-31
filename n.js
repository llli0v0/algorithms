/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
  let result = 0;

  helper(0, 0, 0);

  return result;

  function helper(s, i, n) {
    if (i === arr.length) return result = Math.max(result, s);

    if (arr[i].split('').every(it => (1 << (it.charCodeAt() - 96)) & n === 0)) {
      helper(s + arr[i].length, i + 1, n + arr[i].split('').reduce((a, b) => a + (1 << (b.charCodeAt() - 96))));
    }

    helper(s, i + 1, n);
  }
};

console.log(maxLength(["un","iq","ue"]));