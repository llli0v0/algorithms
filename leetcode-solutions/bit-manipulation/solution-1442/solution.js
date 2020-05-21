/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j; k < arr.length; k++) {
        let a = 0;
        let b = 0;
        for (let m = i; m < j; m++) a ^= arr[m];
        for (let n = j; n <= k; n++) b ^= arr[n];
        if (a === b) result++;
      }
    }
  }
  return result;
};