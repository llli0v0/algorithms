/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctPrimeFactors = function(nums) {
  let res = new Set();
  let prime = [];
  for (let i = 2; i < 1000; i++) {
    let f = true;
    for (let j = 2; j < 32; j++) {
      if (i / j % 1 === 0 && i !== j) f = false;
    }
    if (f) prime.push(i);
  }
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    while (n > 1) {
      for (let j = 0; j < prime.length; j++) {
        let p = prime[j];
        if (n / p % 1 === 0) {
          n /= p;
          res.add(p);
          break;
        }
      }
    }
  }
  return res.size;
};
