/**
 * @param {number[]} light
 * @return {number}
 */
var numTimesAllBlue = function(light) {
  let A = new Array(light.length).fill(null);
  let p = 0;

  let result = 0;

  for (let i = 0; i < light.length; i++) {
    A[light[i] - 1] = 1;

    while (A[p] === 1) p++;

    if (p - 1 === i) result++;
  }

  return result;
};