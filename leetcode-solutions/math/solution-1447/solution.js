/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function(n) {
  let result = [];
  for (let denominator = 2; denominator <= n; denominator++) {
    for (let numerator = 1; numerator < denominator; numerator++) {
      let isSimplest = true;
      for (let common = 2; common <= numerator; common++) {
        if (numerator % common === 0 && denominator % common === 0) isSimplest = false;
      }
      if (isSimplest) result.push(numerator + '/' + denominator);
    }
  }
  return result;
};