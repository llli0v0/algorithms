/**
 * @param {number[]} status
 * @param {number[]} candies
 * @param {number[][]} keys
 * @param {number[][]} containedBoxes
 * @param {number[]} initialBoxes
 * @return {number}
 */
var maxCandies = function(status, candies, keys, containedBoxes, initialBoxes) {
  let keysInHand = new Set();
  let boxesInHand = initialBoxes;
  let result = 0;
  while (boxesInHand.length && boxesInHand.some((box) => status[box] || keysInHand.has(box))) {
    for (let i = boxesInHand.length - 1; i >= 0; i--) {
      let box = boxesInHand[i];
      if (status[box] || keysInHand.has(box)) {
        result += candies[box];
        for (let n = 0; n < keys[box].length; n++) keysInHand.add(keys[box][n]);
        for (let n = 0; n < containedBoxes[box].length; n++) boxesInHand.push(containedBoxes[box][n]);
        boxesInHand.splice(i, 1);
      }
    }
  }
  return result;
};