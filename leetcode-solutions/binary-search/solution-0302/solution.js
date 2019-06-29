/**
 * @param {character[][]} image
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// 并没看出来需要用二分
var minArea = function(image, x, y) {
  let X = [];
  let Y = [];
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      if (image[i][j] === '1') {
        X.push(i);
        Y.push(j);
      }
    }
  }
  X.sort((a, b) => a - b);
  Y.sort((a, b) => a - b);
  return (X[X.length - 1] - X[0] + 1) * (Y[Y.length - 1] - Y[0] + 1);
};