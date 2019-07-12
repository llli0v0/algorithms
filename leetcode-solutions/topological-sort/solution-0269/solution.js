/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
  let index = 0;
  while (index < words.length) {
    if (words[index + 1]) {
      if (words[index + 1].indexOf(words[index]) === 0) {
        words.splice(index, 1);
        continue;
      }
    }
    index++;
  }

  if (words.length === 1) return words[0];

  let S = new Set(words.join('').split(''));

  let G = {};
  let C = {};

  let V = new Set();

  for (let i = 0; i < words.length - 1; i++) {
    let a = words[i];
    let b = words[i + 1];
    let len = Math.min(a.length, b.length);
    
    for (let j = 0; j < len; j++) {
      if (a[j] !== b[j]) {
        let k = a[j] + b[j];

        if (V.has(k)) break;
        V.add(k);

        if (G[a[j]] === undefined) G[a[j]] = {};
        G[a[j]][b[j]] = b[j];

        if (C[a[j]] === undefined) C[a[j]] = 0;
        if (C[b[j]] === undefined) C[b[j]] = 0;
        C[b[j]] += 1;
        break;
      }
    }
  }

  let result = '';
  let L = Object.keys(C).length;
  if (L === 0) return result;

  while (true) {
    let m = null;

    for (let k in C) {
      if (C[k] === 0) {
        m = k;
        delete C[k];
        S.delete(k);
        L--;
        break;
      }
    }

    if (m === null) return '';
    result += m;
    
    if (L === 0) {
      return [...S].join('') + result;
    }

    for (let k in G[m]) {
      if (C[k] !== undefined) C[k]--;
    }
    delete G[m];
  }
};