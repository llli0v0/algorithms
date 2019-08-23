/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *
 *     @param {integer} index
 *     @return {integer}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {integer}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
  let len = mountainArr.length();

  let L = 0;
  let R = len - 1;

  while (L < R) {
    let M = Math.floor((L + R) / 2);

    let a = M === 0 ? -Infinity : mountainArr.get(M - 1);
    let b = mountainArr.get(M);
    let c = M === len - 1 ? -Infinity : mountainArr.get(M + 1);

    if (b > a && c > b) {
      L = M + 1;
    } else {
      R = M;
    }
  }

  let M = L;

  let result;

  result = helper(0, M);

  if (mountainArr.get(result) === target) return result;

  result = helper(M, len - 1, 1);

  return mountainArr.get(result) === target ? result : -1;

  function helper(L, R, reverse = 0) {
    while (L < R) {
      let M = Math.floor((L + R) / 2);

      let a = mountainArr.get(M);

      if (!reverse) {
        if (target > a) {
          L = M + 1;
        } else {
          R = M;
        }
      } else {
        if (target < a) {
          L = M + 1;
        } else {
          R = M;
        }
      }
    }

    return L;
  }
};