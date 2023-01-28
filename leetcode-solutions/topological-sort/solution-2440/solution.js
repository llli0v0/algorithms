/**
 * @param {number[]} nums
 * @param {number[][]} edges
 * @return {number}
 */
var componentValue = function(nums, edges) {
  let sum = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    max = Math.max(max, nums[i]);
  }
  for (let i = max; i <= sum; i++) {
    if (sum / i % 1 === 0) {
      let [graph, one] = build();
      let stop = false;
      while (one.size) {
        for (let p of one) {
          point = graph[p];
          let { set, val } = point;
          if (val === i) {
            delete graph[p];
            for (let v of set) {
              graph[v].set.delete(p);
              let size = graph[v].set.size;
              if (size === 1 || size === 0) one.add(v);
            }
          } else if (val > i) {
            stop = true;
          } else {
            delete graph[p];
            for (let v of set) {
              graph[v].set.delete(p);
              graph[v].val += val;
              let size = graph[v].set.size;
              if (size === 1 || size === 0) one.add(v);
            }
          }
          one.delete(p);
          break;
        }
        if (stop) break;
      }
      if (Object.keys(graph).length === 0) return sum / i - 1;
    }
  }

  function build() {
    let graph = {};
    let one = new Set();
    for (let i = 0; i < edges.length; i++) {
      let [a, b] = edges[i];
      if (graph[a] === undefined) graph[a] = { set: new Set(), val: nums[a] };
      if (graph[b] === undefined) graph[b] = { set: new Set(), val: nums[b] };
      graph[a].set.add(b);
      graph[b].set.add(a);
      if (graph[a].set.size === 1) one.add(a);
      else one.delete(a);
      if (graph[b].set.size === 1) one.add(b);
      else one.delete(b);
    }
    return [graph, one];
  }
};
