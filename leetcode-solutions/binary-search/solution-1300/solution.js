/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function(arr, target) {
  let L = 0;
  let R = Math.max(...arr) + 1;
  while (L < R) {
    let M = Math.floor((L + R) / 2);
    let a = M;
    let b = a + 1;
    let a_r = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > a) a_r += a;
      else a_r += arr[i];
    }
    let b_r = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > b) b_r += b;
      else b_r += arr[i];
    }
    if (a_r - target <= 0 && b_r - target >= 0 || a_r - target >= 0 && b_r - target <= 0) {
      if (Math.abs(a_r - target) < Math.abs(b_r - target)) return a;
      else {
        if (Math.abs(a_r - target) === Math.abs(b_r - target)) return Math.min(a, b);
        return b;
      }
    } else if (a_r - target < 0 && b_r - target < 0) {
      L = M + 1;
    } else {
      R = M;
    }
  }
};