/**
 * @param {number[]} instructions
 * @return {number}
 */
var createSortedArray = function(instructions) {
  let sorted = [instructions[0]];
  let result = 0;
  let mod = 10**9 + 7;
  let index = 1;
  while (index < instructions.length) {
    let cur = instructions[index];
    let leftCost = helper(cur - 0.5);
    let rightCost = sorted.length - helper(cur + 0.5);
    result = (result + Math.min(leftCost, rightCost)) % mod;
    sorted.splice(leftCost, 0, cur);
    index++;
  }
  return result;

  function helper(cur) {
    let left = 0;
    let right = sorted.length;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (cur <= sorted[mid]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  }
};