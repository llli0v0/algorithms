/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
  let counts = {}, result = 0;
  for (let i = 1; i < A.length; i++) {
    if (counts[i - 1] && A[i] - A[i - 1] === counts[i - 1].num) {
      counts[i] = { count: counts[i - 1].count + 1, num: counts[i - 1].num };
    } else {
      if (i >= 2) {
        if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
          counts[i] = { count: 1, num: A[i] - A[i - 1] };
        }
      }
    }
  }
  for (let key in counts) {
    result += counts[key].count;
  }
  return result;
};