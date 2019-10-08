/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
  let M = {};
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    let a = arr[i] - difference;

    if (M[a] !== undefined) M[arr[i]] = M[arr[i] - difference] + 1;
    else M[arr[i]] = 1;

    result = Math.max(result, M[arr[i]]);
  }

  return result;
};