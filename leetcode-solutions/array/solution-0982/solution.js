/**
 * not good
 * @param {number[]} A
 * @return {number}
 */
var countTriplets = function(A) {
  let result = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      for (let n = 0; n < A.length; n++) {
        if (!(A[i] & A[j] & A[n])) result++;
      }
    }
  }
  return result;
};