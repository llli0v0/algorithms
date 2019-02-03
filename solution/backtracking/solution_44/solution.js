/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let matrix = new Array(s.length + 1).fill(null).map(() => new Array(p.length + 1).fill(null));
  matrix[0][0] = 1;
  for (let i = 1; i <= p.length; i++) {
    if (p[i - 1] === '*') {
      if (matrix[0][i - 1]) {
        matrix[0][i] = 1;
      } else {
        matrix[0][i] = 0;
      }
    } else {
      matrix[0][i] = 0;
    }
  }
  for (let i = 1; i <= s.length; i++) {
    matrix[i][0] = 0;
  }
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      let pIndex = j - 1, sIndex = i - 1;
      if (p[pIndex] === '*') {
        if (matrix[i][j - 1] || matrix[i - 1][j]) {
          let minCount = 0;
          for (let n = j - 1; n >= 0; n--) {
            if (p[n] !== '*') minCount++;
          }
          minCount = minCount || '0';
          if (!matrix[i - 1][j]) {
            matrix[i][j] = minCount;
          } else {
            matrix[i][j] = minCount;
          }
        } else {
          matrix[i][j] = 0;
        }
      } else if (p[pIndex] === '?') {
        if (matrix[i - 1][j - 1]) {
          matrix[i][j] = 1;
        } else {
          matrix[i][j] = 0;
        }
      } else {
        if (p[pIndex - 1] === '*' && matrix[i][j - 1]) {
          let sub = s.slice(0, i);
          let lastIndex = sub.lastIndexOf(p[pIndex]);
          if (lastIndex === i - 1 && lastIndex >= parseInt(matrix[i][j - 1]) && matrix[i - 1][j - 1]) {
            matrix[i][j] = 1;
          } else {
            matrix[i][j] = 0;
          }
        } else {
          if (matrix[i - 1][j - 1] && p[pIndex] === s[sIndex]) {
            matrix[i][j] = 1;
          } else {
            matrix[i][j] = 0;
          }
        }
      }
    }
  }
  return matrix[s.length][p.length] ? true : false;
};

module.exports = { solution: isMatch };
