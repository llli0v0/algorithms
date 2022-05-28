/**
 * @param {number} numArrows
 * @param {number[]} aliceArrows
 * @return {number[]}
 */
var maximumBobPoints = function(numArrows, aliceArrows) {
  let max = -1;
  let result = [];
  for (let i = 0; i < (1 << 12); i++) {
    let a = i.toString(2);
    let str = new Array(12 - a.length).fill(0).join('') + a;
    let count = numArrows;
    let b = 0;
    let arr = [];
    for (let j = 0; j < aliceArrows.length; j++) {
      if (str[j] === '1') {
        count -= aliceArrows[j] + 1;
        arr.push(aliceArrows[j] + 1);
        b += j;
      } else {
        arr.push(0);
      }
    }
    if (count >= 0) {
      if (b > max) {
        max = b;
        arr[0] += count;
        result = arr;
      }
    }
  }
  return result;
};