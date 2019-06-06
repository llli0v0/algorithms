/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
  let n = [[nums.shift(), 1]];
  while (nums.length) {
    let e = nums.shift();
    if (e === n[n.length - 1][0]) {
      n[n.length - 1][1] += 1;
    } else {
      n.push([e, 1]);
    }
  }
  while (n.length) {
    let t = 1;
    let a = n[0][1];
    n[0][1] = 0;
    for (
      let i = 1;
      i < n.length &&
      n[i][0] - n[i - 1][0] === 1 &&
      n[i][1] - a >= n[i - 1][1] &&
      n[i][1] - a >= 0;
      i++
    ) {
      n[i][1] -= a;
      t += 1;
    }
    if (t < 3) return false;
    while (n.length && n[0][1] === 0) n.shift();
  }
  return true;
};
