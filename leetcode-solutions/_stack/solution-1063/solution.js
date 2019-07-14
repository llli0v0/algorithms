/**
 * @param {number[]} nums
 * @return {number}
 */
var validSubarrays = function(nums) {
  let S = [];

  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    S.push(nums[i]);

    while (S.length > 1 && S[S.length - 1] < S[S.length - 2]) {
      S.splice(S.length - 2, 1);
    }

    result += S.length;
  }

  return result;
};