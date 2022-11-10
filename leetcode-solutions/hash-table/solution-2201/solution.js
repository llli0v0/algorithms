/**
 * @param {number} n
 * @param {number[][]} artifacts
 * @param {number[][]} dig
 * @return {number}
 */
var digArtifacts = function(n, artifacts, dig) {
  let digMap = new Map();
  for (let i = 0; i < dig.length; i++) {
    digMap.set(dig[i].toString(), true);
  }
  let res = 0;
  for (let i = 0; i < artifacts.length; i++) {
    let [x, y, x1, y1] = artifacts[i];
    let s1 = [x, y].toString();
    let s2 = [x1, y1].toString();
    let is = digMap.has(s1) && digMap.has(s2);
    if (x === x1 && y === y1) {
      if (digMap.has(s1)) res++;
    } else if (x === x1) {
      if (y1 - y === 1) {
        if (is) res++;
      } else if (y1 - y === 2) {
        if (is && digMap.has([x, y + 1].toString())) res++;
      } else {
        if (is && digMap.has([x, y + 1].toString()) && digMap.has([x, y + 2].toString())) res++;
      }
    } else if (y === y1) {
      if (x1 - x === 1) {
        if (is) res++;
      } else if (y1 - y === 2) {
        if (is && digMap.has([x + 1, y].toString())) res++;
      } else {
        if (is && digMap.has([x + 1, y].toString()) && digMap.has([x + 2, y].toString())) res++;
      }
    } else {
      if (is && digMap.has([x + 1, y].toString()) && digMap.has([x1 - 1, y1].toString())) res++;
    }
  }
  return res;
};
