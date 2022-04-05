/**
 * @param {number[]} nums
 * @return {number[]}
 */
var replaceNonCoprimes = function(nums) {
  let stack = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    let cur = nums[i];
    let g = gcd(stack[stack.length - 1], cur);
    if (g > 1) {
      let tail = stack.pop();
      stack.push(tail * cur / g);
    } else {
      stack.push(cur);
    }
    while (stack.length > 1 && (g = gcd(stack[stack.length - 1], stack[stack.length - 2])) > 1) {
      let a = stack.pop();
      let b = stack.pop();
      stack.push(a * b / g);
    }
  }
  return stack;

  function gcd(a, b) {
    let m = Math.max(a, b);
    let n = Math.min(a, b);
    if (m % n === 0) return n;
    return gcd(n, m % n);
  }
};
