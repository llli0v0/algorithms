/**
 * @param {number[]} edges
 * @return {number}
 */
var edgeScore = function(edges) {
  let scoreMap = new Map();
  let max = -1;
  let res;
  for (let i = 0; i < edges.length; i++) {
    let p = edges[i];
    let score = (scoreMap.get(p) ?? 0) + i;
    scoreMap.set(p, score);
    if (score > max) {
      res = p;
      max = score;
    } else if (score === max) {
      res = Math.min(res, p);
    }
  }
  return res;
};
