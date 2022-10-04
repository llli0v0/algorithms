/**
 * @param {number[][]} matrix
 * @param {number} numSelect
 * @return {number}
 */
var maximumRows = function(matrix, numSelect) {
  let res = 0;
  helper(0, numSelect, []);
  return res;

  function helper(start, numSelect, selected) {
    if (numSelect === 0) {
      let set = new Set(selected);
      let n = 0;
      for (let i = 0; i < matrix.length; i++) {
        let f = true;
        for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] && !set.has(j)) {
            f = false;
          }
        }
        if (f) n++;
      }
      res = Math.max(res, n);
      return;
    }
    for (let i = start; i < matrix[0].length; i++) {
      let ns = [...selected, i];
      helper(i + 1, numSelect - 1, ns);
    }
  }
};
