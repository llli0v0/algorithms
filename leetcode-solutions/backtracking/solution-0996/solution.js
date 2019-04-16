/**
 * @param {number[]} A
 * @return {number}
 */
var numSquarefulPerms = function(A) {
  if (A.every(i => i === A[0])) {
    if (Math.sqrt(A[0] + A[1]) % 1) return 0;
    return 1;
  }
  let currentUsed = {}, result = {};
  for (let i = 0; i < A.length; i++) {
    let upper = [];
    upper.push(A[i]);
    currentUsed[i] = true;
    goNextStep(1, upper);
    upper.pop();
    currentUsed[i] = false;
  }
  return Object.keys(result).length;
  function goNextStep(currentStep, upper) {
    for (let i = 0; i < A.length; i++) {
      if (
        !currentUsed[i] &&
        Math.sqrt(A[i] + upper[upper.length - 1]) % 1 === 0
      ) {
        if (currentStep === A.length - 1) {
          upper.push(A[i]);
          result[upper.join('-')] = true;
          upper.pop();
        } else {
          upper.push(A[i]);
          currentUsed[i] = true;
          goNextStep(currentStep + 1, upper);
          upper.pop();
          currentUsed[i] = false;
        }
      }
    }
  }
};