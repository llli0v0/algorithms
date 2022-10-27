/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfGoodSubsets = function(nums) {
  let map = new Map([[1, 2], [2, 4], [3, 8], [5, 32], [6, 12], [7, 128], [10, 36], [11, 2048], [13, 8192], [14, 132], [15, 40], [17, 131072], [19, 524288], [21, 136], [22, 2052], [23, 8388608], [26, 8196], [29, 536870912], [30, 44]]);
  let [bitArr, counter] = [[], new Map()];
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    if (!counter.has(n) && map.has(n)) bitArr.push([map.get(n), n]);
    counter.set(n, (counter.get(n) ?? 0) + 1);
  }
  bitArr.sort((a, b) => a[1] - b[1]);
  let [res, mod, one] = [0, 10**9 + 7, 1];
  if (counter.has(1)) {
    for (let i = 0; i < counter.get(1); i++) {
      one *= 2;
      one %= mod;
    }
    one--;
  }
  for (let i = 0, n = (1 << bitArr.length); i < n; i++) {
    if (i === 1 && bitArr[0][1] === 1) continue;
    let [co, cur, is] = [void 0, 0, true];
    for (let j = 0; j < bitArr.length; j++) {
      if (((1 << j) & i) === (1 << j)) {
        let [bit, num] = bitArr[j];
        if ((bit & cur) === 0) {
          if (num === 1) {
            co = (co ?? 1) * one;
            co %= mod;
            cur |= bit;
          } else {
            co = (co ?? 1) * counter.get(num);
            co %= mod;
            cur |= bit;
          }
        } else {
          is = false;
          break;
        }
      }
    }
    if (is) {
      res += (co ?? 0);
      res %= mod;
    }
  }
  return res;
};
