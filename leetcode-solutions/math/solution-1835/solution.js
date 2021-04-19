/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var getXORSum = function(arr1, arr2) {
  let arr2xor = 0;
  for (let i = 0; i < arr2.length; i++) arr2xor ^= arr2[i];
  let result = 0;
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] &= arr2xor;
    result ^= arr1[i];
  }
  return result;
};