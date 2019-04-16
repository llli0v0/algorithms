/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  for (let i = 0; i < obstacleGrid.length; i++) {
    for (let j = 0; j < obstacleGrid[0].length; j++) {
      if (obstacleGrid[i][j] === 1) obstacleGrid[i][j] = '*';
    }
  }
  if (obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1] === '*') return 0;
  for (let i = 0; i < obstacleGrid.length; i++) {
    if (obstacleGrid[i][0] === '*') break;
    obstacleGrid[i][0] = 1;
  }
  for (let i = 0; i < obstacleGrid[0].length; i++) {
    if (obstacleGrid[0][i] === '*') break;
    obstacleGrid[0][i] = 1;
  }
  for (let i = 1; i < obstacleGrid.length; i++) {
    for (let j = 1; j < obstacleGrid[0].length; j++) {
      if (obstacleGrid[i][j] === '*') continue;
      if (obstacleGrid[i - 1][j] === '*' || obstacleGrid[i][j - 1] === '*') {
        if (obstacleGrid[i - 1][j] === '*' && obstacleGrid[i][j - 1] === '*') {
          obstacleGrid[i][j] = 0;
        } else {
          obstacleGrid[i][j] = obstacleGrid[i - 1][j] === '*' ? obstacleGrid[i][j - 1] : obstacleGrid[i - 1][j];
        }
      } else if (obstacleGrid[i - 1][j] === 0 || obstacleGrid[i][j - 1] === 0) {
        obstacleGrid[i][j] = obstacleGrid[i - 1][j] === 0 ? obstacleGrid[i][j - 1] : obstacleGrid[i - 1][j];
      } else {
        obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
      }
    }
  }
  return obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
};

console.log(uniquePathsWithObstacles([[0,1],[1,0]]));