/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function(items, queries) {
  for (let i = 0; i < queries.length; i++) queries[i] = [queries[i], i];
  queries.sort((a, b) => a[0] - b[0]);
  items.sort((a, b) => a[0] - b[0]);
  let res = new Array(queries.length).fill(0);
  let max = 0;
  let index = 0;
  for (let i = 0; i < queries.length; i++) {
    let [price, idx] = queries[i];
    while (index < items.length && items[index][0] <= price) {
      max = Math.max(items[index][1], max);
      index++;
    }
    res[idx] = max;
  }
  return res;
};
