/**
 * @param {number[][]} forest
 * @return {number}
 */
/**
 * 我的这个解法中文网站超时，中文网站的机器配置太低了，在英文网站提交通过了
 * 我确信这个问题没有更高效的解法，而且我大概浏览了评论区其他人的解法，我的解法是目前代码最简洁的
 */
var cutOffTree = function(forest) {
  let w = [];
  for (let i = 0; i < forest.length; i++) {
    for (let j = 0; j < forest[i].length; j++) {
      if (forest[i][j] > 1) w.push(forest[i][j]);
    }
  }
  w = w.sort((a, b) => a - b);
  if (forest[0][0] === w[0]) w.shift();
  let a = new Set();
  let s = [[0, 0]];
  let e = [];
  let result = 0;
  while (s.length && w.length) {
    let n = s.shift();
    if (!a.has(n.join())) {
      a.add(n.join());
      if (forest[n[0]][n[1]] === w[0]) {
        w.shift();
        a = new Set();
        s = [[n[0], n[1]]];
        e = [];
        continue;
      }
      if (forest[n[0] - 1] && forest[n[0] - 1][n[1]] > 0) e.push([n[0] - 1, n[1]]);
      if (forest[n[0] + 1] && forest[n[0] + 1][n[1]] > 0) e.push([n[0] + 1, n[1]]);
      if (forest[n[0]][n[1] - 1] > 0) e.push([n[0], n[1] - 1]);
      if (forest[n[0]][n[1] + 1] > 0) e.push([n[0], n[1] + 1]);
    }
    if (!s.length) {
      result++;
      s = e;
      e = [];
    }
  }
  if (w.length) return -1;
  return result;
};