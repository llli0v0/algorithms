/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function(A, K) {
  let L = [], subs = [];
  for (let i = 0; i < A.length; i++) {
    L.push({ index: i, val: A[i] });
    if (A[i] % K === 0) {
      subs.push([i, i]);
      continue;
    }
    let currentSum = 0;
    for (let j = L.length - 1; j >= 0; j--) {
      currentSum += L[j].val;
      if (currentSum % K === 0) {
        subs.push([L[j].index, i]);
        break;
      }
    }
  }
  if (!subs.length) return 0;
  let result = 0, tails = {};
  for (let i = 0; i < subs.length; i++) {
    if (tails[subs[i][0] - 1]) {
      result = result + tails[subs[i][0] - 1] + 1;
      tails[subs[i][1]] = tails[subs[i][0] - 1] + 1;
    } else {
      result += 1;
      tails[subs[i][1]] = 1;
    }
  }
  return result;
};

console.log(subarraysDivByK([-8,-5,-6,3,-3,-7,0,-10,-8,10], 5)); // 13
console.log(subarraysDivByK([4,5,0,-2,-3,1], 5)); // 7