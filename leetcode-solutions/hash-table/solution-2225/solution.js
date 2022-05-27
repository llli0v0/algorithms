/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
  let map = {};
  let a = new Set();
  let b = new Set();
  for (let i = 0; i < matches.length; i++) {
    let [m, n] = matches[i];
    if (map[m] === undefined) {
      map[m] = 0;
      a.add(m);
    }
    if (map[n] === undefined) {
      map[n] = 1;
      b.add(n);
    } else {
      map[n]++;
      a.delete(n);
      if (map[n] === 1) b.add(n);
      else b.delete(n);
    }
  }
  return [Array.from(a).sort((a, b) => a - b), Array.from(b).sort((a, b) => a - b)];
};