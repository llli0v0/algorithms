/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function(points) {
  let S = new Set();
  let result = 40001**2;
  for (let i = 0; i < points.length; i++) S.add(points[i].join());
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < i; j++) {
      if (points[i][0] === points[j][0] || points[i][1] === points[j][1]) continue;
      let a = [points[i][0], points[j][1]];
      let b = [points[j][0], points[i][1]];
      if (S.has(a.join()) && S.has(b.join())) {
        result = Math.min(result, Math.abs(a[0] - b[0]) * Math.abs(a[1] - b[1]));
      }
    }
  }
  return result === 40001**2 ? 0 : result;
};