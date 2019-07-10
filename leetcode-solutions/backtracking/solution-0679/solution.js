/**
 * @param {number[]} nums
 * @return {boolean}
 */
var judgePoint24 = function(nums) {
  let A = new Set();

  helper(nums, '');

  let result = false;

  A = [...A];
  for (let i = 0; i < A.length; i++) {
    A[i] = A[i].split(' ').slice(1);
    helper2(A[i].slice(1), A[i][0]);
  }

  return result;

  function helper2(a, s) {
    if (result) return;

    if (!a.length) {
      let b = [
        '(' + s.slice(0, 3) + ')' + s.slice(3),
        s.slice(0, 2) + '(' + s.slice(2, 5) + ')' + s.slice(5),
        s.slice(0, 4) + '(' + s.slice(4) + ')',
        '(' + s.slice(0, 3) + ')' + s.slice(3),
        s.slice(0, 2) + '(' + s.slice(2) + ')',
        '(' + s.slice(0, 3) + ')' + s.slice(3, 4) + '(' + s.slice(4) + ')'
      ];

      for (let i = 0; i < b.length; i++) {
        if (Math.abs(eval(b[i]) - 24) < 2**-20) {
          result = true;
        }
      }
      return;
    }

    helper2(a.slice(1), s + '+' + a[0]);
    helper2(a.slice(1), s + '-' + a[0]);
    helper2(a.slice(1), s + '*' + a[0]);
    helper2(a.slice(1), s + '/' + a[0]);
  }

  function helper(nums, s) {
    if (!nums.length) A.add(s);

    for (let i = 0; i < nums.length; i++) {
      helper(nums.slice(0, i).concat(nums.slice(i + 1)), s + ' ' + nums[i]);
    }
  }
};