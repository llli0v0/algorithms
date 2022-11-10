/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function(n, roads) {
  let counter = new Array(n).fill(0);
  for (let i = 0; i < roads.length; i++) {
    let [a, b] = roads[i];
    counter[a]++;
    counter[b]++;
  }
  counter.sort((a, b) => a - b);
  let res = 0;
  for (let i = 0; i < counter.length; i++) {
    res += (i + 1) * counter[i];
  }
  return res;
};
