/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function(rectangles) {
  let counter = {};
  let result = 0;
  for (let i = 0; i < rectangles.length; i++) {
    let key = (rectangles[i][0] / rectangles[i][1]).toFixed(10);
    if (counter[key]) result += counter[key];
    else counter[key] = 0;
    counter[key]++;
  }
  return result;
};