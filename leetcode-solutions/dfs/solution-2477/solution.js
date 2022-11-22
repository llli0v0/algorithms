/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
var minimumFuelCost = function(roads, seats) {
  if (!roads.length) return 0;
  let tree = {};
  for (let i = 0; i < roads.length; i++) {
    let [a, b] = roads[i];
    if (tree[a] === undefined) tree[a] = new Set();
    if (tree[b] === undefined) tree[b] = new Set();
    tree[a].add(b);
    tree[b].add(a);
  }
  let res = 0;
  helper(0, -1);
  return res;

  function helper(p, from) {
    p = parseInt(p);
    let ps = tree[p];
    if (ps.size === 1 && p !== 0) {
      res += 1;
      return 1;
    } else {
      let count = 1;
      for (let k of ps) {
        if (k === from) continue;
        count += helper(k, p);
      }
      if (p !== 0) res += Math.ceil(count / seats);
      return count;
    }
  }
};
