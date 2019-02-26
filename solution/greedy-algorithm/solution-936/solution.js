/**
 * @param {string} stamp
 * @param {string} target
 * @return {number[]}
 */
var movesToStamp = function(stamp, target) {
  let ans = [], times = 0, changedWords = 0, changed = true;
  target = target.split(''), stamp = stamp.split('');
  while (changed) {
    changed = false;
    backflow();
  }
  changed = true, target.reverse(), stamp.reverse();
  while (changed) {
    changed = false;
    backflow(true);
  }
  target.reverse(), stamp.reverse();
  if (changedWords < target.length) handleBothEndsCovered();
  if (changedWords < target.length || times > 10 * target.length) return [];
  return ans.reverse();
  function backflow(reversed) {
    for (let i = 0; i < target.length - stamp.length + 1; i++) {
      for (let j = 0; j < stamp.length; j++) {
        if (target[i + j] !== stamp[j] && target[i + j] !== '*') break;
        if (j === stamp.length - 1) {
          let added = false;
          for (let n = i; n <= i + j; n++) {
            if (target[n] !== '*') {
              if (!added) {
                if (reversed) {
                  ans.push(target.length - i - stamp.length);
                } else {
                  ans.push(i);
                }
                times++;
                added = true;
              }
              changed = true;
              target[n] = '*';
              changedWords++;
            }
          }
          i = i + j;
        }
      }
    }
  }
  function handleBothEndsCovered() {
    for (let i = 0; i < target.length; i++) {
      let needChange = [];
      for (let j = i; j < i + stamp.length; j++) {
        if (target[j] !== '*' && target[j] !== stamp[j - i]) break;
        if (target[j] !== '*') needChange.push(j);
        if (j === i + stamp.length - 1) {
          for (let n = 0; n < needChange.length; n++) {
            target[needChange[n]] = '*';
            changedWords++;
          }
          if (needChange.length) {
            ans.push(i);
            times++;
          }
        }
      }
    }
  }
};

let a = check(movesToStamp('ebabe', 'eebebaebabeebabeabebebebabebebabebeabebabeabebabeebabeabebabebabeaebabebaeebabebabeabebabeebabeebabe'), 'ebabe', 'eebebaebabeebabeabebebebabebebabebeabebabeabebabeebabeabebabebabeaebabebaeebabebabeabebabeebabeebabe');
let b = 'eebebaebabeebabeabebebebabebebabebeabebabeabebabeebabeabebabebabeaebabebaeebabebabeabebabeebabeebabe';

for (let i = 0; i < a.length; i++) {
  if (a[i] !== b[i]) {
    console.log(i);
  }
}

function check(A, S, target) {
  let R = new Array(target.length).fill('');
  for (let i = 0; i < A.length; i++) {
    for (let j = A[i]; j < A[i] + S.length; j++) {
      R[j] = S[j - A[i]];
    }
  }
  return R.join('');
}