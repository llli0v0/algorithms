/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] === undefined) map[arr[i]] = [];
    map[arr[i]].push(i);
  }
  let pool = [0];
  let next = [];
  let visited = new Set([]);
  let result = 0;
  while (pool.length) {
    let cur = pool.shift();
    if (visited.has(cur)) {
      if (!pool.length) pool = next, next = [], result++;
      continue;
    }
    visited.add(cur);
    if (cur === arr.length - 1) break;
    cur - 1 >= 0 && (next.push(cur - 1));
    cur + 1 < arr.length && (next.push(cur + 1));
    if (map[arr[cur]]) while(map[arr[cur]].length) next.push(map[arr[cur]].shift());
    if (!pool.length) pool = next, next = [], result++;
  }
  return result;
};