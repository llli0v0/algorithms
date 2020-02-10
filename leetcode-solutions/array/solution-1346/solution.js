/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  let M = {};

  for (let i = 0; i < arr.length; i++) {
    M[arr[i]] = i;
  }

  for (let i = 0; i < arr.length; i++) {
    if (M[arr[i] * 2] !== undefined && M[arr[i] * 2] !== i) return true;
  }

  return false;
};