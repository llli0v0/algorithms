/**
 * @param {number[]} A
 * @return {number}
 */
var maxWidthRamp = function(A) {
  for (let i = 0; i < A.length; i++) {
    A[i] = { index: i, val: A[i] };
  }
  A.sort((a, b) => {
    if (a.val === b.val) return a.index - b.index;
    return a.val - b.val;
  });
  let stack = [], currentMax = 0;
  for (let i = 0; i < A.length; i++) {
    if (stack.length === 0) {
      stack.push(A[i].index);
    } else {
      while (stack[stack.length - 1] > A[i].index && stack.length) stack.pop();
      stack.push(A[i].index);
      if (stack.length > 1) {
        if (stack[stack.length - 1] - stack[0] > currentMax) {
          currentMax = stack[stack.length - 1] - stack[0];
        }
      }
    }
  }
  return currentMax;
};

console.log(maxWidthRamp([9,8,1,0,1,9,4,0,4,1]));