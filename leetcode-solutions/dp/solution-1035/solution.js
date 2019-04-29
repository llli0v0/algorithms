/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var maxUncrossedLines = function(A, B) {
  let dp = {};
  return maxUncorssed(A, B);
  function maxUncorssed(A, B) {
    let key = A.length + ' ' + B.length;
    if (dp[key] !== undefined) return dp[key];
    if (!A.length || !B.length) return 0;
    for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < B.length; j++) {
        if (A[i] === B[j]) {
          /**
           * Every time you come across the same term, you have two choices to connect or not connect
           * The line affects all the lines after AB that are not associated with the current term of ij, so 1 + maxUncorssed(A.slice(i + 1), B.slice(j + 1))
           * Any term after A can be associated with any term in B, so maxUncorssed(A.slice(i + 1), B)
           * But it's filled with a lot of double counting that's kind of like taking the NTH Fibonacci number,
           * and optimizing it with dp
           * 
           * 查找到相同的项，有两种选择 连 或者 不连
           * 连会影响AB之后所有的连线都不会与当前ij的项发生关联，所以进行 1 + maxUncorssed(A.slice(i + 1), B.slice(j + 1))递归
           * 不连A之后的项可以和B中任意项发生关联，所以进行 maxUncorssed(A.slice(i + 1), B)递归
           * 但是其中充斥着大量的重复计算类似于求第n个斐波那契数，需要用dp去优化
           */
          let ans = Math.max(
            1 + maxUncorssed(A.slice(i + 1), B.slice(j + 1)),
            maxUncorssed(A.slice(i + 1), B)
          );
          dp[key] = ans;
          return ans;
        }
      }
    }
    dp[key] = 0;
    return 0;
  }
};