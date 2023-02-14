/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[][]}
 */
var substringXorQueries = function(s, queries) {
  let res = new Array(queries.length).fill(null).map(() => [-1, -1]);
  let targetMap = {};
  for (let i = 0; i < queries.length; i++) {
    let [first, second] = queries[i];
    let target = first ^ second;
    targetMap[target] = targetMap[target] ?? [];
    targetMap[target].push(i);
  }
  for (let i = 1; i <= 30; i++) {
    for (let j = 0; j < s.length; j++) {
      if (j + i <= s.length) {
        let sub = s.slice(j, j + i);
        let num = parseInt(sub, 2);
        if (targetMap[num]) {
          let arr = targetMap[num];
          for (let n = 0; n < arr.length; n++) {
            let index = arr[n];
            res[index] = [j, j + i - 1];
            delete targetMap[num];
          }
        }
      }
    }
  }
  return res;
};
