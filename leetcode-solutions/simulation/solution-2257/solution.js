/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function(m, n, guards, walls) {
  let matrix = new Array(m).fill(null).map(() => new Array(n).fill(null));
  for (let i = 0; i < guards.length; i++) {
    let g = guards[i];
    matrix[g[0]][g[1]] = 'g';
  }
  for (let i = 0; i < walls.length; i++) {
    let w = walls[i];
    matrix[w[0]][w[1]] = 'w';
  }
  let guarded = new Set();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let cur = matrix[i][j];
      if (cur === 'g') {
        let a = i - 1;
        while (a >= 0) {
          if (matrix[a][j] === 'w' || matrix[a][j] === 'g' || (matrix[a][j] && matrix[a][j].has('c'))) break;
          if (matrix[a][j]) matrix[a][j].add('a');
          else matrix[a][j] = new Set(['a']);
          guarded.add(`${a} ${j}`);
          a--;
        }
        let b = j - 1;
        while (b >= 0) {
          if (matrix[i][b] === 'w' || matrix[i][b] === 'g' || (matrix[i][b] && matrix[i][b].has('d'))) break;
          if (matrix[i][b]) matrix[i][b].add('b');
          else matrix[i][b] = new Set(['b']);
          guarded.add(`${i} ${b}`);
          b--;
        }
        let c = i + 1;
        while (c < matrix.length) {
          if (matrix[c][j] === 'w' || matrix[c][j] === 'g') break;
          if (matrix[c][j]) matrix[c][j].add('c');
          else matrix[c][j] = new Set(['c']);
          guarded.add(`${c} ${j}`);
          c++;
        }
        let d = j + 1;
        while (d < matrix[i].length) {
          if (matrix[i][d] === 'w' || matrix[i][d] === 'g') break;
          if (matrix[i][d]) matrix[i][d].add('d');
          else matrix[i][d] = new Set(['d']);
          guarded.add(`${i} ${d}`);
          d++;
        }
      }
    }
  }
  return m * n - guards.length - walls.length - guarded.size;
};