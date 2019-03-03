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
/**
 * @param {number} x
 * @param {number} target
 * @return {number}
 */
var leastOpsExpressTarget = function(x, target) {
  let pw = 1, subs = [], subBest = {}, resKey = target;
  while (target) {
    let remain = target % Math.pow(x, pw);
    if (remain) subs.push(remain);
    target = target - remain;
    pw++;
  }
  subBest[subs[0]] = handle(x, subs[0]);
  for (let i = 1; i < subs.length; i++) {
    let s = 0;
    for (let m = 0; m <= i; m++) {
      s = s + subs[m];
    }
    subBest[s] = handle(x, s);
    for (let n = i - 1; n >= 0; n--) {
      let ss = 0;
      for (let j = 0; j <= n; j++) {
        ss = ss + subs[j];
      }
      let q = subBest[ss];
      let p = handle(x, s - ss);
      if (q + p < subBest[s]) subBest[s] = q + p + 1;
    }
  }
  return subBest[resKey];
};
function handle(x, target) {
  let pw = 1;
  while (Math.pow(x, pw) < target) {
    pw++;
  }
  let bigger = Math.pow(x, pw);
  if (bigger === target) return pw - 1;
  let m = findSubBest(target), n = findSubBest(bigger - target);
  return Math.min(m, pw + n);
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
          let q = (current - 1) * ((curp - remain) / (curp / x));
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
}

console.log(leastOpsExpressTarget(11, 69));
console.log(leastOpsExpressTarget(11, 500041));
console.log(leastOpsExpressTarget(2, 237950));
console.log(leastOpsExpressTarget(2, 500000));
console.log(leastOpsExpressTarget(2, 94));
console.log(leastOpsExpressTarget(2, 500094));
console.log(leastOpsExpressTarget(2, 3125029));
console.log(leastOpsExpressTarget(3, 19));