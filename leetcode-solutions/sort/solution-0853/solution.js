/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
  if (!position.length) return 0;
  let cars = [];
  for (let i = 0; i < position.length; i++) {
    cars.push([position[i], (target - position[i]) / speed[i]]);
  }
  cars = cars.sort((a, b) => a[0] - b[0]);
  let result = 1;
  let current = cars[cars.length - 1][1];
  for (let i = cars.length - 2; i >= 0; i--) {
    if (cars[i][1] > current) {
      current = cars[i][1];
      result++;
    }
  }
  return result;
};