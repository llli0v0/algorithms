/**
 * @param {number[][]} circles
 * @return {number}
 */
var countLatticePoints = function(circles) {
  let s = new Set();
  for (let i = 0; i <= 200; i++) {
    for (let j = 0; j <= 200; j++) {
      for (let n = 0; n < circles.length; n++) {
        let [x, y, m] = circles[n];
        if (Math.abs(x - i) ** 2 + Math.abs(y - j) ** 2 <= m ** 2) {
          s.add(`${i} ${j}`);
        }
      }
    }
  }
  return s.size;
};