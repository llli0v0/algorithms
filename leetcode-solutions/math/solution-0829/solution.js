/**
 * @param {number} N
 * @return {number}
 */
var consecutiveNumbersSum = function(N) {
  let M = 2;
  let result = 1;
  while (true) {
    if (M % 2 === 0) {
      if (N / M % 1 === 0.5 && Math.floor(N / M) - M / 2 > -1) {
        result++;
      }
    } else {
      if (N / M % 1 === 0 && N / M - (M - 1) / 2 > -1) {
        result++;
      }
    }
    if (N / M - M / 2 < 1) break;
    M++;
  }
  return result;
};