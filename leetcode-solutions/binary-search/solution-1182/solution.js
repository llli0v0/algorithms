/**
 * @param {number[]} colors
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceColor = function(colors, queries) {
  let A = new Array(colors.length).fill(null).map(() => []);

  A[0] = [0, 0, 0];
  A[0][colors[0] - 1] += 1;

  for (let i = 1; i < colors.length; i++) {
    A[i] = [...A[i - 1]];
    A[i][colors[i] - 1] += 1;
  }

  A.unshift([0, 0, 0]);

  let result = [];

  for (let i = 0; i < queries.length; i++) {
    if (colors[queries[i][0]] === queries[i][1]) {
      result.push(0);
    } else if (A[A.length - 1][queries[i][1] - 1] === 0) {
      result.push(-1);
    } else {
      let L = 0;
      let R = colors.length - 1;

      while (L < R) {
        let M = Math.floor((L + R) / 2);

        let a = Math.min(colors.length, queries[i][0] + M);
        let b = Math.max(0, queries[i][0] - M);

        if (A[queries[i][0]][queries[i][1] - 1] === A[a][queries[i][1] - 1] && A[queries[i][0]][queries[i][1] - 1] === A[b][queries[i][1] - 1]) {
          L = M + 1;
        } else {
          R = M;
        }
      }

      result.push(colors[queries[i][0] + L - 1] === queries[i][1] || colors[queries[i][0] - L + 1] === queries[i][1] ? L - 1 : L);
    }
  }

  return result;
};