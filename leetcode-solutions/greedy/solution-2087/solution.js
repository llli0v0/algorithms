/**
 * @param {number[]} startPos
 * @param {number[]} homePos
 * @param {number[]} rowCosts
 * @param {number[]} colCosts
 * @return {number}
 */
var minCost = function(startPos, homePos, rowCosts, colCosts) {
  let result = 0;
  if (startPos[0] > homePos[0]) {
    for (let i = startPos[0] - 1; i >= homePos[0]; i--) {
      result += rowCosts[i];
    }
  } else {
    for (let i = startPos[0] + 1; i <= homePos[0]; i++) {
      result += rowCosts[i];
    }
  }
  if (startPos[1] > homePos[1]) {
    for (let i = startPos[1] - 1; i >= homePos[1]; i--) {
      result += colCosts[i];
    }
  } else {
    for (let i = startPos[1] + 1; i <= homePos[1]; i++) {
      result += colCosts[i];
    }
  }
  return result;
};
