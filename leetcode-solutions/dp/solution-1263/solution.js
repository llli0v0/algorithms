/**
 * @param {character[][]} grid
 * @return {number}
 */
var minPushBox = function(grid) {
  let S;
  let B;
  let T;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 'S') S = [i, j];

      if (grid[i][j] === 'B') B = [i, j];

      if (grid[i][j] === 'T') T = [i, j];
    }
  }

  let dp = {};

  let result = helper(S, B, grid);

  return result > 10 ** 9 ? -1 : result;

  function helper(people, box, grid) {
    if (box[0] === T[0] && box[1] === T[1]) return 0;

    let k = [people, box].toString();

    if (dp[k] !== undefined) return dp[k];

    let direction = dfs(people, grid);

    if (direction.every(i => i === 0)) return Infinity;
    
    dp[k] = Infinity;

    if (direction[0] === 1 && grid[box[0] + 1] && grid[box[0] + 1][box[1]] !== '#') {
      let g = clone(grid);
      g[people[0]][people[1]] = '.';
      g[box[0]][box[1]] = '.';
      g[box[0]][box[1]] = 'S';
      g[box[0] + 1][box[1]] = 'B';
      dp[k] = Math.min(dp[k], 1 + helper(box, [box[0] + 1, box[1]], g));
    }
    if (direction[1] === 1 && grid[box[0] - 1] && grid[box[0] - 1][box[1]] !== '#') {
      let g = clone(grid);
      g[people[0]][people[1]] = '.';
      g[box[0]][box[1]] = '.';
      g[box[0]][box[1]] = 'S';
      g[box[0] - 1][box[1]] = 'B';
      dp[k] = Math.min(dp[k], 1 + helper(box, [box[0] - 1, box[1]], g));
    }
    if (direction[2] === 1 && grid[box[0]][box[1] + 1] && grid[box[0]][box[1] + 1] !== '#') {
      let g = clone(grid);
      g[people[0]][people[1]] = '.';
      g[box[0]][box[1]] = '.';
      g[box[0]][box[1]] = 'S';
      g[box[0]][box[1] + 1] = 'B';
      dp[k] = Math.min(dp[k], 1 + helper(box, [box[0], box[1] + 1], g));
    }
    if (direction[3] === 1 && grid[box[0]][box[1] - 1] && grid[box[0]][box[1] - 1] !== '#') {
      let g = clone(grid);
      g[people[0]][people[1]] = '.';
      g[box[0]][box[1]] = '.';
      g[box[0]][box[1]] = 'S';
      g[box[0]][box[1] - 1] = 'B';
      dp[k] = Math.min(dp[k], 1 + helper(box, [box[0], box[1] - 1], g));
    }

    return dp[k];
  }

  function dfs(S, grid) {
    let V = new Set();

    let stack = [S];

    // u d l r
    let result = [0, 0, 0, 0];

    while (stack.length) {
      let s = stack.pop();

      if (grid[s[0] + 1] && grid[s[0] + 1][s[1]] === 'B') result[0] = 1;
      if (grid[s[0] - 1] && grid[s[0] - 1][s[1]] === 'B') result[1] = 1;
      if (grid[s[0]][s[1] + 1] === 'B') result[2] = 1;
      if (grid[s[0]][s[1] - 1] === 'B') result[3] = 1;

      let k = s.toString();

      if (V.has(k)) continue;
      V.add(k);

      if (grid[s[0] - 1] && (grid[s[0] - 1][s[1]] === '.' || grid[s[0] - 1][s[1]] === 'T')) stack.push([s[0] - 1, s[1]]);
      if (grid[s[0] + 1] && (grid[s[0] + 1][s[1]] === '.' || grid[s[0] + 1][s[1]] === 'T')) stack.push([s[0] + 1, s[1]]);
      if (grid[s[0]][s[1] - 1] === '.' || grid[s[0]][s[1] - 1] === 'T') stack.push([s[0], s[1] - 1]);
      if (grid[s[0]][s[1] + 1] === '.' || grid[s[0]][s[1] + 1] === 'T') stack.push([s[0], s[1] + 1]);
    }

    return result;
  }

  function clone(grid) {
    let A = new Array(grid.length).fill(null).map(() => new Array(grid[0].length).fill(null));

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) A[i][j] = grid[i][j];
    }

    return A;
  }
};