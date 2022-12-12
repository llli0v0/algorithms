/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
var maxStarSum = function(vals, edges, k) {
  let map = new Map();
  for (let i = 0; i < edges.length; i++) {
    let [a, b] = edges[i];
    map.set(a, map.get(a) ?? []);
    map.set(b, map.get(b) ?? []);
    map.get(a).push(b);
    map.get(b).push(a);
  }
  let res = Math.max(...vals);
  for (let [key, val] of map) {
    for (let i = 0; i < val.length; i++) {
      val[i] = vals[val[i]];
    }
    val.sort((a, b) => b - a);
    let r = vals[key];
    for (let i = 0; i < k && val[i] > 0; i++) {
      r += val[i];
    }
    res = Math.max(res, r);
  }
  return res;
};
