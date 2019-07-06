/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
  let A = [...arr].sort((a, b) => a - b);

  let M = {};
  for (let i = 0; i < A.length; i++) {
    if (M[A[i]] === undefined) {
      M[A[i]] = [];
    }
    M[A[i]].push(i);
  }

  let result = 0;
  let S = 0;
  for (let i = 0; i < arr.length; i++) {
    let a = M[arr[i]].shift();
    if (S < a) {
      S = a;
    } else if (S === i) {
      if (arr[i + 1] !== undefined) S = M[arr[i + 1]][0];
      result++;
    }
  }
  return result;
};