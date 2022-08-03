/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  let map = {};
  let max = 1;
  for (let i = 0; i < points.length; i++) {
    let [a, b] = points[i];
    for (let j = 0; j < i; j++) {
      let [c, d] = points[j];
      let key = `${c} ${d}`;
      if (map[key] === undefined) map[key] = {};
      let m = map[key];
      if (a === c) {
        if (m.x === undefined) m.x = 1;
        m.x++;
        max = Math.max(max, m.x);
      } else if (b === d) {
        if (m.y === undefined) m.y = 1;
        m.y++;
        max = Math.max(max, m.y);
      } else {
        let k = ((a - c) / (b - d)).toFixed(5);
        if (m[k] === undefined) m[k] = 1;
        m[k]++;
        max = Math.max(max, m[k]);
      }
    }
  }
  return max;
};
