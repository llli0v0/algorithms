/**
 * @param {number[]} scores
 * @param {number[][]} edges
 * @return {number}
 */
var maximumScore = function(scores, edges) {
  let pointMap = {};
  for (let i = 0; i < edges.length; i++) {
    let [a, b] = edges[i];
    if (pointMap[a] === undefined) pointMap[a] = [];
    if (pointMap[b] === undefined) pointMap[b] = [];
    pointMap[a].push([scores[b], b]);
    pointMap[b].push([scores[a], a]);
  }
  for (let key in pointMap) {
    pointMap[key] = pointMap[key].sort((a, b) => b[0] - a[0]);
  }
  let result = -1;
  for (let i = 0; i < edges.length; i++) {
    let [a, b] = edges[i];
    let res = scores[a] + scores[b];
    let c, d;
    let res1 = 0;
    for (let j = 0; j < pointMap[a].length; j++) {
      let cur = pointMap[a][j];
      if (cur[1] !== a && cur[1] !== b) {
        c = cur[1];
        res1 += scores[c];
        break;
      }
    }
    for (let j = 0; j < pointMap[b].length; j++) {
      let cur = pointMap[b][j];
      if (cur[1] !== a && cur[1] !== b && cur[1] !== c) {
        d = cur[1];
        res1 += scores[d];
        break;
      }
    }
    let e, f;
    let res2 = 0;
    for (let j = 0; j < pointMap[b].length; j++) {
      let cur = pointMap[b][j];
      if (cur[1] !== a && cur[1] !== b) {
        e = cur[1];
        res2 += scores[e];
        break;
      }
    }
    for (let j = 0; j < pointMap[a].length; j++) {
      let cur = pointMap[a][j];
      if (cur[1] !== a && cur[1] !== b && cur[1] !== e) {
        f = cur[1];
        res2 += scores[f];
        break;
      }
    }
    if (c !== undefined && d !== undefined) result = Math.max(result, res + res1);
    if (e !== undefined && f !== undefined) result = Math.max(result, res + res2);
  }
  return result;
};
