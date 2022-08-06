/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var smallestTrimmedNumbers = function(nums, queries) {
  let res = [];
  for (let i = 0; i < queries.length; i++) {
    let [a, b] = queries[i];
    let ns = [];
    for (let j = 0; j < nums.length; j++) {
      ns.push([nums[j].slice(nums[j].length - b), j]);
    }
    ns.sort((a, b) => {
      let [m, n] = a;
      let [x, y] = b;
      if (m === x) return n - y;
      for (let e = 0; e < m.length; e++) {
        if (parseInt(m[e]) < parseInt(x[e])) return -1;
        else  if (parseInt(m[e]) > parseInt(x[e])) return 1;
      }
      return 1;
    });
    res.push(ns[a - 1][1]);
  }
  return res;
};
