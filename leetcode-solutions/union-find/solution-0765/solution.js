/**
 * @param {number[]} row
 * @return {number}
 */
// union-find的做法我暂时没有做到，暂时放到union-find里，等到再回顾的时候，如果能做到我会重写这道题
// 我发现我过于依赖memo，我似乎陷入了这种困境
var minSwapsCouples = function(row) {
  let M = {};
  let memo = {};
  for (let i = 0; i < row.length; i++) {
    M[i] = i + 1;
    M[i + 1] = i;
    i++;
  }
  return helper(row);

  function helper(A) {
    let k = A.join();
    if (!A.length) return 0;
    if (memo[k] !== undefined) return memo[k];
    if (M[A[0]] === A[1]) return helper(A.slice(2));
    let a;
    let b;
    for (let i = 2; i < A.length; i++) {
      if (A[i] === M[A[0]]) {
        a = i;
        break;
      }
    }
    for (let i = 2; i < A.length; i++) {
      if (A[i] === M[A[1]]) {
        b = i;
        break;
      }
    }
    let c = A.slice(2, a).concat([A[1]]).concat(A.slice(a + 1));
    let d = A.slice(2, b).concat([A[0]]).concat(A.slice(b + 1));
    memo[k] = 1 + Math.min(helper(c), helper(d));
    return memo[k];
  }
};