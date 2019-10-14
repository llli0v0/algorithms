/**
 * @param {number[]} nums
 * @return {number}
 */
var maxEqualFreq = function(nums) {
  let C = {};
  let M = {};
  let T = 0;
  let N = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (C[nums[i]] === undefined) {
      C[nums[i]] = 0;
      N++;
    }
    C[nums[i]]++;

    if (M[C[nums[i]]] === undefined) {
      M[C[nums[i]]] = new Set([nums[i]]);
      T++;
    } else {
      M[C[nums[i]]].add(nums[i]);
    }

    if (M[C[nums[i]] - 1]) {
      M[C[nums[i]] - 1].delete(nums[i]);

      if (!M[C[nums[i]] - 1].size) {
        T--;
        delete M[C[nums[i]] - 1];
      }
    }

    if (T === 2) {
      let A = Object.keys(M);

      for (let j = 0; j < A.length; j++) A[j] = parseInt(A[j]);

      if ((A[0] === 1 && M[A[0]].size === 1) || (A[1] === 1 && M[A[1]].size === 1)) {
        result = i + 1;
      } else if (Math.max(...A) - Math.min(...A) === 1 && M[Math.max(...A)].size === 1) {
        result = i + 1;
      }
    } else if (T === 1 && Object.keys(M)[0] === '1') {
      result = i + 1;
    } else if (T === 1 && N === 1) {
      result = i + 1;
    }
  }

  return result;
};