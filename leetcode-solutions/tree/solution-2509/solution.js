/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var cycleLengthQueries = function(n, queries) {
  let res = [];
  for (let i = 0; i < queries.length; i++) {
    let [a, b] = queries[i];
    a--;
    b--;
    let aw = [a];
    let bw = [b];
    while(a) {
      a = Math.floor((a - 1) / 2);
      aw.push(a);
    }
    while(b) {
      b = Math.floor((b - 1) / 2);
      bw.push(b);
    }
    for (let j = 0; j < aw.length; j++) {
      let idx = bw.indexOf(aw[j]);
      if (idx > -1) {
        res.push(j + idx + 1);
        break;
      }
    }
  }
  return res;
};
