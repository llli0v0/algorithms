/**
 * @param {number} batchSize
 * @param {number[]} groups
 * @return {number}
 */
var maxHappyGroups = function(batchSize, groups) {
  let counter = new Array(9).fill(0);
  for (let i = 0; i < groups.length; i++) {
    let n = groups[i] % batchSize;
    counter[n] = counter[n] ?? 0;
    counter[n]++;
  }
  let dp = new Map();
  return helper(counter);

  function helper(counter, cur = 0) {
    if (counter.every(i => i === 0)) {
      if (cur) return 1;
      return 0;
    }
    let key = counter.join(' ');
    if (dp.has(key)) return dp.get(key);
    val = 0;
    for (let i = 0; i < counter.length; i++) {
      if (counter[i]) {
        let arr = [...counter];
        arr[i]--;
        if ((cur + i) % batchSize === 0) {
          val = Math.max(val, 1 + helper(arr));
        } else {
          val = Math.max(val, helper(arr, cur + i));
        }
      }
    }
    dp.set(key, val);
    return val;
  }
};
