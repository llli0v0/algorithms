/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
  let w = {};
  for (let i = 0; i < wall.length; i++) {
    let len = 0;
    for (let j = 0; j < wall[i].length - 1; j++) {
      len = len + wall[i][j];
      if (w[len] === undefined) {
        w[len] = 0;
      }
      w[len] += 1;
    }
  }
  let max = 0;
  for (let key in w) {
    if (w[key] > max) max = w[key];
  }
  return wall.length - max;
};

leastBricks([[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]);