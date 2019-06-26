/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify str in-place instead.
 */
var reverseWords = function(str) {
  let A = [];
  while (str.length) {
    let a = str.length - 1;
    while (str[a] !== ' ' && str[a] !== void 0) a--;
    let B = str.splice(a < 0 ? 0 : a, str.length - a);
    if (B[0] === ' ') B.shift();
    A = A.concat(!A.length ? [] : [' ']).concat((B));
  }
  while (A.length) str.push(A.shift());
};