/**
 * @param {number} finalSum
 * @return {number[]}
 */
var maximumEvenSplit = function(finalSum) {
  if (finalSum % 2) return [];
  let res = [2];
  finalSum -= 2;
  while (finalSum) {
    let last = res[res.length - 1];
    if (finalSum > last) {
      finalSum -= last + 2;
    } else {
      res.splice(res.findIndex(i => i === last + 2 - finalSum), 1);
      finalSum = 0;
    }
    res.push(last + 2);
  }
  return res;
};
