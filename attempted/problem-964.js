/**
 * 568: 568 or 625 - 57
 * 
 * 568 ->
 * 568 % 5 = 3 -> 565
 * 565 % 25 = 15 -> 550
 * 550 % 125 = 50 -> 500
 * 500 % 625 = 500 -> 0
 * 3? base on: 5
 *    case1: 5 / 5 + 5 / 5 + 5 / 5, case2: 5 - 5 / 5 - 5 / 5
 *    case1 > case2 -> case2
 * 15? base on: 5 or 25
 *     case1: 5 + 5 + 5, case2: 5 * 5 - 5 - 5
 *     case1 < case2 -> case1
 * 50? base on: 25 or 125
 *     case1: 5 * 5 + 5 * 5, case2: 5 * 5 * 5 - 5 * 5 - 5 * 5 - 5 * 5
 *     case1 < case2 -> case1
 * 500? base on: 125 or 625
 *      case1: 5 * 5 * 5 + 5 * 5 * 5 + 5 * 5 * 5 + 5 * 5 * 5, case2: 5 * 5 * 5 * 5 - 5 * 5 * 5
 *      case1 > case2 -> case2
 * 568.result = 5 - 5 / 5 - 5 / 5 + 5 + 5 + 5 + 5 * 5 + 5 * 5 + 5 * 5 * 5 * 5 - 5 * 5 * 5
 * 
 * 625 - 57 -> 5 * 5 * 5 * 5 - 57 ->
 * 57 % 5 = 2 -> 55
 * 55 % 25 = 5 -> 50
 * 50 % 125 = 50 -> 0
 * 2? base on: 5
 *    case1: 5 / 5 + 5 / 5, case2: 5 - 5 / 5 - 5 / 5 - 5 / 5
 *    case1 < case2 -> case1
 * 5? base on: 5 or 25
 *    case1: 5, case2: 5 * 5 - 5 - 5 - 5 - 5
 *    case1 < case2 -> case1
 * 50? base on: 25 or 125
 *     case1: 5 * 5 + 5 * 5, case2: 5 * 5 * 5 - 5 * 5 - 5 * 5 - 5 * 5
 *     case1 < case2 -> case1
 * (625 - 57).result = 5 * 5 * 5 * 5 - 5 / 5 - 5 / 5 - 5 - 5 * 5 - 5 * 5
 * 
 * 568.result > (625 - 57).result -> 12
 */
// 929 % 3 = 2 -> 927
// 3 / 3 + 3 / 3 or 3 - 3 / 3
// 927 % 9 = 0 -> 927
// 927 % 27 = 9 -> 918
// 3 * 3
// 918 % 81 = 27 -> 891
// 3 * 3 * 3
// 891 % 243 = 162 -> 729
// 3 * 3 * 3 * 3 + 3 * 3 * 3 * 3 or 3 * 3 * 3 * 3 * 3 - 3 * 3 * 3 * 3
// 729 % 729 = 0 -> 729
// 729 % 2178 = 729 -> 0
// 3 * 3 * 3 * 3 * 3 * 3
/**
 * @param {number} x
 * @param {number} target
 * @return {number}
 */
var leastOpsExpressTarget = function(x, target) {
  let pw = 1;
  while (Math.pow(x, pw) < target) {
    pw++;
  }
  let bigger = Math.pow(x, pw);
  if (bigger === target) return pw - 1;
  let m = findSubBest(target), n = findSubBest(bigger - target);
  return Math.min(m, pw + (n ? n : -1));

  function findSubBest(sub) {
    let current = 1, ans = 0;
    while (sub) {
      let curp = Math.pow(x, current);
      let remain = sub % curp;
      if (remain) {
        if (current === 1) {
          if (remain <= x / 2) {
            ans += remain * 2 - 1;
          } else {
            ans += (x - remain) * 2;
          }
        } else {
          let a = (current - 1) * (remain / (curp / x)) - 1;
          let q = (current - 2) * ((curp - remain) / (curp / x));
          let b = current + (q ? q : -1);
          ans += Math.min(a, b);
        }
        ans += 1;
      }
      sub -= remain;
      current++;
    }
    return ans - 1;
  }
};

console.log(leastOpsExpressTarget(100, 100000000)); // the ans is 19