/**
 * @param {number} maxTime
 * @param {number[][]} edges
 * @param {number[]} passingFees
 * @return {number}
 */
var minCost = function(maxTime, edges, passingFees) {
  let dp = new Array(passingFees.length + 1).fill(null).map(() => new Array(maxTime + 1).fill(undefined));
  let graph = {};
  for (let i = 0; i < edges.length; i++) {
    let [a, b, time] = edges[i];
    if (graph[a] === undefined) graph[a] = {};
    if (graph[b] === undefined) graph[b] = {};
    graph[a][b] = Math.min(graph[a][b] ?? Infinity, time);
    graph[b][a] = Math.min(graph[b][a] ?? Infinity, time);
  }
  let res = helper(passingFees.length - 1, maxTime);
  return res > 10**9 ? -1 : res;

  function helper(p, time) {
    if (p === 0) {
      if (time >= 0) return passingFees[0];
      else return Infinity;
    }
    if (time < 0) return Infinity;
    if (dp[p][time] !== undefined) return dp[p][time];
    let val = Infinity;
    let next = graph[p];
    for (let key in next) {
      key = parseInt(key);
      if (key === p) continue;
      val = Math.min(val, passingFees[p] + helper(key, time - next[key]));
    }
    dp[p][time] = val;
    return val;
  }
};
