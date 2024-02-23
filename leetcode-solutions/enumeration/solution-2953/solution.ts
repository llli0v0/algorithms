function countCompleteSubstrings(word: string, k: number): number {
  let counters: number[][] = [];
  let counter: number[] = new Array(26).fill(0);
  counter[word.charCodeAt(0) - 97] = 1;
  counters.push(counter);
  let minIdx = -1;
  let res = k === 1 ? 1 : 0;
  for (let i = 1; i < word.length; i++) {
    if (Math.abs(word.charCodeAt(i) - word.charCodeAt(i - 1)) > 2) {
      counter = new Array(26).fill(0);
      counter[word.charCodeAt(i) - 97] = 1;
      counters.push(counter);
      minIdx = i - 1;
      if (k === 1) res++;
    } else {
      counter = [...counters[counters.length - 1]];
      counter[word.charCodeAt(i) - 97] += 1;
      for (let j = 1; j <= 26; j++) {
        if (i - j * k < minIdx) break;
        else if (i - j * k === minIdx) {
          if (counter.every(item => item === 0 || item === k)) res++;
        } else {
          let ok = true;
          let counter1 = counters[i - j * k];
          for (let n = 0; n < counter.length; n++) {
            let v = counter[n] - counter1[n];
            if (v && v !== k) ok = false;
          }
          if (ok) res++;
        }
      }
      counters.push(counter);
    }
  }
  return res;
};
