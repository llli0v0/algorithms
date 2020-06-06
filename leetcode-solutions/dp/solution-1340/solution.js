/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */
var maxJumps = function(arr, d) {
  let computed = {};
  let result = 0;
  for (let i = 0; i < arr.length; i++) result = Math.max(dp(i) + 1, result);
  return result;

  function dp(index) {
    if (computed[index] !== undefined) return computed[index];
    computed[index] = 0;
    for (let i = index - 1; i >= 0 && i >= index - d; i--) {
      if (arr[index] > arr[i]) {
        computed[index] = Math.max(computed[index], dp(i) + 1);
      } else break;
    }
    for (let i = index + 1; i <= arr.length - 1 && i <= index + d; i++) {
      if (arr[index] > arr[i]) {
        computed[index] = Math.max(computed[index], dp(i) + 1);
      } else break;
    }
    return computed[index];
  }
};