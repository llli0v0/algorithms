/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
  let qu = [];
  let nx = [];
  let result = 0;
  let al = new Set();
  qu.push(board.map(i => i.join()).join('|'));
  while (qu.length) {
    let cur = qu.shift();
    if (!al.has(cur)) {
      al.add(cur);
      if (cur === '1,2,3|4,5,0') return result;
      cur = cur.split('|').map(i => i.split(',').map(i => parseInt(i)));
      for (let i = 0; i < cur.length; i++) {
        for (let j = 0; j < cur[i].length; j++) {
          if (cur[i][j] === 0) {
            if (cur[i - 1]) {
              let mm = new Array(cur.length).fill(null).map((i, ii) => [...cur[ii]]);
              let temp = mm[i - 1][j];
              mm[i - 1][j] = mm[i][j];
              mm[i][j] = temp;
              nx.push(mm.map(i => i.join()).join('|'));
            }
            if (cur[i + 1]) {
              let mm = new Array(cur.length).fill(null).map((i, ii) => [...cur[ii]]);
              let temp = mm[i + 1][j];
              mm[i + 1][j] = mm[i][j];
              mm[i][j] = temp;
              nx.push(mm.map(i => i.join()).join('|'));
            }
            if (cur[i][j + 1]) {
              let mm = new Array(cur.length).fill(null).map((i, ii) => [...cur[ii]]);
              let temp = mm[i][j + 1];
              mm[i][j + 1] = mm[i][j];
              mm[i][j] = temp;
              nx.push(mm.map(i => i.join()).join('|'));
            }
            if (cur[i][j - 1]) {
              let mm = new Array(cur.length).fill(null).map((i, ii) => [...cur[ii]]);
              let temp = mm[i][j - 1];
              mm[i][j - 1] = mm[i][j];
              mm[i][j] = temp;
              nx.push(mm.map(i => i.join()).join('|'));
            }
          }
        }
      }
    }
    if (qu.length === 0) {
      qu = [...nx];
      nx = [];
      result++;
    }
  }
  return -1;
};