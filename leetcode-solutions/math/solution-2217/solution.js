/**
 * @param {number[]} queries
 * @param {number} intLength
 * @return {number[]}
 */
var kthPalindrome = function(queries, intLength) {
  let result = [];
  let str = intLength === 1 ? '1' : '1' + new Array(intLength - 2).fill('0').join('') + '1';
  for (let i = 0; i < queries.length; i++) {
    let q = queries[i];
    let s = str.slice(0, intLength % 2 ? Math.ceil(intLength / 2) : intLength / 2);
    let ns = String(Number(s) + q - 1);
    if (ns.length > s.length) result.push(-1);
    else {
      result.push(Number(ns + ns.slice(0, intLength % 2 ? ns.length - 1 : ns.length).split('').reverse().join('')));
    }
  }
  return result;
};