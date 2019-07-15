/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */
var findMinStep = function(board, hand) {
  let C = {};
  let D = [...new Set(board.split(''))];
  
  for (let i = 0; i < D.length; i++) {
    D[i] = new Array(3).fill(D[i]).join('');
  }

  for (let i = 0; i < hand.length; i++) {
    if (C[hand[i]] === undefined) C[hand[i]] = 0;
    C[hand[i]]++;
  }

  hand = C;
  board = board.split('');

  let A = [];
  let N = [];

  let S = new Set();

  let F = false;

  helper(board, hand, A);
  if (F) return 1;

  let result = 1;

  while (A.length) {
    let a = A.shift();

    let board = a[0];
    let hand = a[1];

    helper(board, hand, N);
    if (F) return result + 1;

    if (!A.length) {
      A = N;
      N = [];
      result++;
    }
  }

  return -1;

  function helper(board, hand, T) {
    for (let k in hand) {
      for (let i = 0; i < board.length; i++) {
        if (board[i] === k) {
          let a = [...board];
          let b = {...hand};

          a.splice(i, 0, k);
          b[k]--;

          if (b[k] === 0) delete b[k];

          a = a.join('');

          while (D.some(item => a.indexOf(item) > -1)) {
            let t;
            for (let n = 0; n < D.length; n++) {
              if (a.indexOf(D[n]) > -1) {
                t = a.indexOf(D[n]);
              }
            }
            let s = a[t];
            a = a.split('');
            while (a[t] === s) a.splice(t, 1);
            a = a.join('');
          }

          a = a.split('');
          
          if (a.length === 0) F = true;

          let c = a.join();

          if (S.has(c)) continue;
          S.add(c);

          T.push([a, b]);
        }
      }
    }
  }
};