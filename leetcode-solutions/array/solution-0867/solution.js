/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  let result = new Array(A[0].length).fill(null).map(() => []);
  let index = 0;
  while (A[0].length) {
    for (let i = 0; i < A.length; i++) {
      result[index].push(A[i].shift());
    }
    index++;
  }
  return result;
};