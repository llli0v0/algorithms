/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  let left = 0, right = A.length - 1, current = A.length, ans = [];
  while (current) {
    let leftVal = Math.pow(A[left], 2), rightVal = Math.pow(A[right], 2);
    if (leftVal > rightVal) {
      ans.unshift(leftVal);
      left++;
    } else {
      ans.unshift(rightVal);
      right--;
    }
    current--;
  }
  return ans;
};