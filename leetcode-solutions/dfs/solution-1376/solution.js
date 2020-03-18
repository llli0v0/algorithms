/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
  let tree = {};

  for (let i = 0; i < manager.length; i++) {
    if (manager[i] !== -1) {
      if (tree[manager[i]] === undefined) tree[manager[i]] = [];
      tree[manager[i]].push(i);
    }
  }

  let result = 0;

  if (tree[headID] === undefined) return informTime[headID];

  for (let i = 0; i < tree[headID].length; i++) {
    result = Math.max(result, informTime[headID] + helper(tree[headID][i]));
  }

  return result;

  function helper(node) {
    if (tree[node] === undefined) return 0;

    let result = 0;

    for (let i = 0; i < tree[node].length; i++) {
      result = Math.max(result, informTime[node] + helper(tree[node][i]));
    }

    return result;
  }
};