/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
  let matrix = new Array(dungeon.length).fill(null).map(i => new Array(dungeon[0].length).fill(null));
  let dungeonBR = dungeon[dungeon.length - 1][dungeon[0].length - 1];
  matrix[dungeon.length - 1][dungeon[0].length - 1] =  dungeonBR >= 1 ? 1 : Math.abs(dungeonBR) + 1;
  for (let i = matrix.length - 2; i >= 0; i--) {
    let colL = dungeon[0].length - 1;
    if (dungeon[i][colL] >= 1) {
      if (dungeon[i][colL] >= matrix[i + 1][colL]) {
        matrix[i][colL] = 1;
      } else {
        matrix[i][colL] = matrix[i + 1][colL] - dungeon[i][colL];
      }
    } else {
      matrix[i][colL] = Math.abs(dungeon[i][colL]) + matrix[i + 1][colL];
    }
  }
  for (let i = matrix[0].length - 2; i >= 0; i--) {
    let rowL = dungeon.length - 1;
    if (dungeon[rowL][i] >= 1) {
      if (dungeon[rowL][i] >= matrix[rowL][i + 1]) {
        matrix[rowL][i] = 1;
      } else {
        matrix[rowL][i] = matrix[rowL][i + 1] - dungeon[rowL][i];
      }
    } else {
      matrix[rowL][i] = Math.abs(dungeon[rowL][i]) + matrix[rowL][i + 1];
    }
  }
  for (let i = dungeon.length - 2; i >= 0; i--) {
    for (let j = dungeon[0].length - 2; j >= 0; j--) {
      let brMin = Math.min(matrix[i + 1][j], matrix[i][j + 1]);
      if (dungeon[i][j] >= 1) {
        if (dungeon[i][j] >= brMin) {
          matrix[i][j] = 1;
        } else {
          matrix[i][j] = brMin - dungeon[i][j];
        }
      } else {
        matrix[i][j] = Math.abs(dungeon[i][j]) + brMin;
      }
    }
  }
  return matrix[0][0];
};

console.log(calculateMinimumHP([[0,0,0],[1,1,-1]]));