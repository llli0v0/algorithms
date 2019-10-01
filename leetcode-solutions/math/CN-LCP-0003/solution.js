/**
 * @param {string} command
 * @param {number[][]} obstacles
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var robot = function(command, obstacles, x, y) {
  let u = 0;
  let r = 0;

  for (let i = 0; i < command.length; i++) {
    if (command[i] === 'U') u++;
    else r++;
  }

  for (let i = 0; i < obstacles.length; i++) {
    if (obstacles[i][0] > x || obstacles[i][1] > y) continue;
    if (helper(obstacles[i])) return false;;
  }

  if (helper([x, y])) return true;

  return false;

  function helper(A) {
    if (Math.abs(Math.floor(A[0] / r) - Math.floor(A[1] / u)) > 1) return false;

    let m = Math.min(Math.floor(A[0] / r), Math.floor(A[1] / u));
    let c = [r * m, u * m];

    if (c[0] === A[0] && c[1] === A[1]) return true;

    for (let j = 0; j < command.length; j++) {
      if (command[j] === 'U') c[1] += 1;
      else c[0] += 1;

      if (c[0] === A[0] && c[1] === A[1]) return true;
      if (c[0] > A[0] || c[1] > A[1]) return false;
    }

    return false;
  }
};