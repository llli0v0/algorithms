/**
 * @param {number[]} nums
 * @param {number[][]} edges
 * @return {number[]}
 */
var getCoprimes = function(nums, edges) {
  let gcdMap = {};
  for (let i = 1; i <= 50; i++) {
    gcdMap[i] = [];
    for (let j = 1; j <= 50; j++) {
      if (gcd(i, j) === 1) gcdMap[i].push(j);
    }
  }
  let tree = {};
  buildTree();
  let result = new Array(nums.length).fill(-1);
  let visited = new Set();
  helper(0, {}, 0);
  return result;

  function helper(node, ancObj, parentDeep) {
    if (visited.has(node)) return;
    visited.add(node);
    let nodeVal = nums[node];
    let maxDeep = -1;
    for (let i = 0; i < gcdMap[nodeVal].length; i++) {
      let a = gcdMap[nodeVal][i];
      if (ancObj[a]) {
        if (maxDeep < ancObj[a].deep) {
          result[node] = ancObj[a].key;
          maxDeep = ancObj[a].deep;
        }
      }
    }
    let newAncObj = deepClone(ancObj);
    newAncObj[nums[node]] = { key: node, deep: parentDeep + 1 };
    for (let i = 0; tree[node] && i < tree[node].length; i++) helper(tree[node][i], newAncObj, parentDeep + 1);
  }

  function buildTree() {
    for (let i = 0; i < edges.length; i++) {
      if (tree[edges[i][0]] === undefined) tree[edges[i][0]] = [];
      if (tree[edges[i][1]] === undefined) tree[edges[i][1]] = [];
      tree[edges[i][0]].push(edges[i][1]);
      tree[edges[i][1]].push(edges[i][0]);
    }
  }

  function gcd(a, b) {
    if (a === 1 || b === 1) return 1;
    if (a > b) return gcd(a % b, b);
    else if (a < b) return gcd(a, b % a);
    return a;
  }

  function deepClone(obj) {
    let newObj = {};
    for (let key in obj) {
      if (typeof obj[key] === 'object') newObj[key] = deepClone(obj[key]);
      else newObj[key] = obj[key];
    }
    return newObj;
  }
};