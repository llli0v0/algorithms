/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} p
 * @return {number}
 */
var countDistinct = function(nums, k, p) {
  let trie = {};
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j <= i; j++) {
      let currentNode = trie;
      let count = 0;
      for (let n = j; n <= i; n++) {
        if (nums[n] % p === 0) count++;
        if (currentNode[nums[n]] === undefined) {
          currentNode[nums[n]] = { isEnd: false };
        }
        currentNode = currentNode[nums[n]];
      }
      if (!currentNode.isEnd && count <= k) {
        currentNode.isEnd = true;
        result++;
      }
    }
  }
  return result;
};
