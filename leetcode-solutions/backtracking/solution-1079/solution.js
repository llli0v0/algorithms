/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
  let result = 0;
  let C = {};
  for (let i = 0; i < tiles.length; i++) {
    if (!C[tiles[i]]) C[tiles[i]] = 0;
    C[tiles[i]] += 1;
  }
  for (let i = 1; i <= tiles.length; i++) {
    for (let k in C) {
      let c = { ...C };
      c[k] -= 1;
      if (!c[k]) delete c[k];
      helper(c, i - 1);
    }
  }
  return result;
  function helper(c, i) {
    if (!i) {
      return result += 1;
    }
    for (let k in c) {
      let a = { ...c };
      a[k] -= 1;
      if (!a[k]) delete a[k];
      helper(a, i - 1);
    }
  }
};