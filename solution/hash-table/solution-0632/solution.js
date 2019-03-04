/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
  function merge(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums[i].length; j++) {
        result.push({ belong: i, value: nums[i][j] });
      }
    }
    return result.sort((a, b) => a.value - b.value);
  }
  let mergedNums = merge(nums);
  let pipeline = [];
  let include = new Map();
  let currentFound = [];
  for (let i = 0; i < mergedNums.length; i++) {
    if (!include.has(mergedNums[i].belong)) {
      include.set(mergedNums[i].belong, 1);
    } else {
      include.set(mergedNums[i].belong, include.get(mergedNums[i].belong) + 1);
    }
    pipeline.push(mergedNums[i]);
    if (include.size === nums.length) {
      while (include.get(pipeline[0].belong) > 1) {
        let delEle = pipeline.shift();
        include.set(delEle.belong, include.get(delEle.belong) - 1);
      }
      currentFound.push([pipeline[0].value, pipeline[pipeline.length - 1].value]);
      while (include.size !== nums.length - 1) {
        let delEle = pipeline.shift();
        include.set(delEle.belong, include.get(delEle.belong) - 1);
        include.get(delEle.belong) === 0 && (include.delete(delEle.belong));
      }
    }
  }
  let currentFoundSize = [...currentFound];
  for (let i = 0; i < currentFoundSize.length; i++) {
    currentFoundSize[i] = currentFoundSize[i][1] - currentFoundSize[i][0];
  }
  let minIndex = 0, min = currentFoundSize[0];
  for (let i = 0; i < currentFoundSize.length; i++) {
    if (currentFoundSize[i] < min) {
      minIndex = i;
      min = currentFoundSize[i];
    }
  }
  return currentFound[minIndex];
};

module.exports = { solution: smallestRange };