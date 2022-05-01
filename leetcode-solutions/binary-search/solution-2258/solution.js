/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumMinutes = function(grid) {
  if (!start(0)) return -1;
  let l = 0;
  let r = 10 ** 9;
  while (l < r) {
    let m = Math.floor((l + r) / 2);
    if (start(m) && start(m + 1)) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return l;

  function start(waitTime) {
    let G = JSON.parse(JSON.stringify(grid));
    G[0][0] = 3;
    let peoplePosition = [[0, 0]];
    let firePosition = [];
    for (let i = 0; i < G.length; i++) {
      for (let j = 0; j < G[i].length; j++) {
        if (G[i][j] === 1) {
          firePosition.push([i, j]);
        }
      }
    }

    while (waitTime && firePosition.length) {
      fireSpread();
      waitTime--;
    }

    while (peoplePosition.length) {
      if (peopleWalk()) return true;
      fireSpread();
    }
    return false;

    function peopleWalk() {
      let next = [];
      for (let i = 0; i < peoplePosition.length; i++) {
        let [x, y] = peoplePosition[i];
        if (G[x][y] !== 3) continue;
        if (G[x - 1] && G[x - 1][y] === 0) {
          G[x - 1][y] = 3;
          next.push([x - 1, y]);
        }
        if (G[x + 1] && G[x + 1][y] === 0) {
          G[x + 1][y] = 3;
          if (x + 1 === grid.length - 1 && y === grid[0].length - 1) return true;
          next.push([x + 1,  y]);
        }
        if (G[x][y - 1] === 0) {
          G[x][y - 1] = 3;
          next.push([x, y - 1]);
        }
        if (G[x][y + 1] === 0) {
          G[x][y + 1] = 3;
          if (x === grid.length - 1 && y + 1 === grid[0].length - 1) return true;
          next.push([x, y + 1]);
        }
      }
      peoplePosition = next;
      return false;
    }

    function fireSpread() {
      let next = [];
      for (let i = 0; i < firePosition.length; i++) {
        let [x, y] = firePosition[i];
        if (G[x - 1] && (G[x - 1][y] === 0 || G[x - 1][y] === 3)) {
          G[x - 1][y] = 1;
          next.push([x - 1, y]);
        }
        if (G[x + 1] && (G[x + 1][y] === 0 || G[x + 1][y] === 3)) {
          G[x + 1][y] = 1;
          next.push([x + 1, y]);
        }
        if (G[x][y - 1] === 0 || G[x][y - 1] === 3) {
          G[x][y - 1] = 1;
          next.push([x, y - 1]);
        }
        if (G[x][y + 1] === 0 || G[x][y + 1] === 3) {
          G[x][y + 1] = 1;
          next.push([x, y + 1]);
        }
      }
      firePosition = next;
    }
  }
};
