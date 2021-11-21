/**
 * @param {number[]} values
 * @param {number[][]} edges
 * @param {number} maxTime
 * @return {number}
 */
var maximalPathQuality = function(values, edges, maxTime) {
  let graph = {};
  for (let i = 0; i < edges.length; i++) {
    let edge = edges[i];
    let [start, end, time] = edge;
    if (graph[start] === undefined) graph[start] = [];
    graph[start].push([end, time]);
    if (graph[end] === undefined) graph[end] = [];
    graph[end].push([start, time]);
  }
  let result = 0;
  helper(0, maxTime, values[0], '0,');
  return result;
  
  function helper(cur, maxTime, value, s) {
    if (maxTime >= 0 && cur === 0) result = Math.max(result, value);
    if (maxTime < 0) return;
    if (graph[cur]) {
      let next = graph[cur];
      for (let i = 0; i < next.length; i++) {
        helper(next[i][0], maxTime - next[i][1], s.indexOf(next[i][0]) > -1 ? value : value + values[next[i][0]], s + next[i][0] + ',');
      }
    }
  }
};
