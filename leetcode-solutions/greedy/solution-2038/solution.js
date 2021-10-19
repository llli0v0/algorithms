/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
  let curLetter = colors[0];
  let len = 1;
  let a = 0;
  let b = 0;
  colors += colors[colors.length - 1] === 'A' ? 'B' : 'A';
  for (let i = 1; i < colors.length; i++) {
    if (colors[i] === curLetter) {
      len++;
    } else {
      if (curLetter === 'A') {
        a += Math.max(0, len - 2);
      } else {
        b += Math.max(0, len - 2);
      }
      len = 1;
      curLetter = colors[i];
    }
  }
  return a > b ? true : false;
};
