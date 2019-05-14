/**
 * @param {number[]} A
 * @return {number[]}
 */
var pancakeSort = function(A) {
  let turnTimes = A.length;
  let result = [];
  while (turnTimes) {
    let maxIndex = 0;
    for (let i = 0; i < turnTimes; i++) {
      if (A[i] > A[maxIndex]) maxIndex = i;
    }
    let turnPart1 = A.splice(0, maxIndex + 1);
    result.push(maxIndex + 1);
    A = turnPart1.reverse().concat(A);
    let turnPart2 = A.splice(0, turnTimes);
    result.push(turnTimes);
    A = turnPart2.reverse().concat(A);
    turnTimes--;
  }
  return result;
};