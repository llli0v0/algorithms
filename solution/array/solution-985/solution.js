/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
  let answer = [], current = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) current += A[i];
  }
  for (let i = 0; i < queries.length; i++) {
    if (A[queries[i][1]] % 2 === 0) {
      if ((queries[i][0] + A[queries[i][1]]) % 2 === 0) {
        A[queries[i][1]] += queries[i][0];
        current += queries[i][0];
      } else {
        current -= A[queries[i][1]];
        A[queries[i][1]] += queries[i][0];
      }
    } else {
      if ((queries[i][0] + A[queries[i][1]]) % 2 === 0) {
        A[queries[i][1]] += queries[i][0];
        current += A[queries[i][1]];
      } else {
        A[queries[i][1]] += queries[i][0];
      }
    }
    answer.push(current);
  }
  return answer;
};