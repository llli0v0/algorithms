/**
 * @param {number[]} nums
 * @return {boolean}
 */
var gcdSort = function(nums) {
  for (let i = 0; i < nums.length; i++) nums[i] = nums[i] + Math.random();
  let unionFind = {};
  let gcdMap = {};
  for (let i = 0; i < nums.length; i++) {
    let node = new Node(nums[i], i, Math.floor(nums[i]));
    unionFind[node.key] = node;
    for (let j = 1; j <= Math.sqrt(node.value); j++) {
      if (node.value / j % 1 === 0) {
        if (j !== 1) {
          if (gcdMap[j] === undefined) {
            gcdMap[j] = node;
          } else {
            let original = gcdMap[j].getRoot();
            if (original !== node.getRoot()) {
              original.chs.push(node.getRoot().key);
              original.count += node.getRoot().count;
              node.getRoot().parent = original;
              gcdMap[j] = node;
            }
          }
        }
        if (node.value / j !== 1) {
          if (gcdMap[node.value / j] === undefined) {
            gcdMap[node.value / j] = node;
          } else {
            let original = gcdMap[node.value / j].getRoot();
            if (original !== node.getRoot()) {
              original.chs.push(node.getRoot().key);
              original.count += node.getRoot().count;
              node.getRoot().parent = original;
              gcdMap[node.value / j] = node;
            }
          }
        }
      }
    }
  }
  let visited = new Set();
  let arr = [];
  let gcdArr = [];
  for (let key in gcdMap) {
    gcdArr.push(gcdMap[key].getRoot());
  }
  gcdArr.sort((a, b) => b.count - a.count);
  for (let i = 0; i < gcdArr.length; i++) {
    let node = gcdArr[i];
    let value = [];
    let index = [];
    helper(node);
    value.sort((a, b) => a - b);
    index.sort((a, b) => a - b);
    for (let j = 0; j < value.length; j++) {
      arr.push([value[j], index[j]]);
    }

    function helper(node) {
      if (visited.has(node.key)) return;
      visited.add(node.key);
      value.push(node.value);
      index.push(node.index);
      for (let i = 0; i < node.chs.length; i++) {
        helper(unionFind[node.chs[i]]);
      }
    }
  }
  arr.sort((a, b) => a[1] - b[1]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1][0] > arr[i][0]) return false;
  }
  return true;
};

class Node {
  constructor(key, index, value) {
    this.parent = null;
    this.value = value;
    this.key = key;
    this.index = index;
    this.chs = [];
    this.count = 1;
  }

  getRoot() {
    if (this.parent === null) return this;
    return this.parent.getRoot();
  }
}
