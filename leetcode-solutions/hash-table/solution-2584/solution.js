/**
 * @param {number[]} nums
 * @return {number}
 */
var findValidSplit = function(nums) {
  let counter = {};
  for (let i = 0; i < nums.length; i++) {
    let end = Math.floor(Math.sqrt(nums[i]));
    counter[nums[i]] = (counter[nums[i]] ?? 0) + 1;
    for (let j = 2; j <= end; j++) {
      if (nums[i] / j % 1 === 0) {
        let [k1, k2] = [j, nums[i] / j];
        counter[k1] = (counter[k1] ?? 0) + 1;
        counter[k2] = (counter[k2] ?? 0) + 1;
      }
    }
  }
  let newCounter = {};
  let keyLen = 0;
  let filledLen = 0;
  let isFindOne = false;
  for (let i = 0; i < nums.length - 1; i++) {
    let end = Math.floor(Math.sqrt(nums[i]));
    if (newCounter[nums[i]] === undefined) {
      keyLen++;
      newCounter[nums[i]] = 0;
    }
    newCounter[nums[i]]++;
    if (newCounter[nums[i]] === counter[nums[i]]) {
      filledLen++;
    } else if (nums[i] === 1) {
      if (!isFindOne) {
        filledLen++;
        isFindOne = true;
      }
    }
    for (let j = 2; j <= end; j++) {
      if (nums[i] / j % 1 === 0) {
        let [k1, k2] = [j, nums[i] / j];
        if (newCounter[k1] === undefined) {
          keyLen++;
          newCounter[k1] = 0;
        }
        newCounter[k1]++;
        if (newCounter[k1] === counter[k1]) {
          filledLen++;
        } else if (k1 === 1) {
          if (!isFindOne) {
            filledLen++;
            isFindOne = true;
          }
        }
        if (newCounter[k2] === undefined) {
          keyLen++;
          newCounter[k2] = 0;
        }
        newCounter[k2]++;
        if (newCounter[k2] === counter[k2]) {
          filledLen++;
        } else if (k2 === 1) {
          if (!isFindOne) {
            filledLen++;
            isFindOne = true;
          }
        }
      }
    }
    if (filledLen === keyLen) return i;
  }
  return -1;
};
