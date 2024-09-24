function validSubstringCount(word1: string, word2: string): number {
  const counter: Map<string, number> = new Map();
  for (let i = 0; i < word2.length; i++) {
    let a = word2[i];
    counter.set(a, 1 + (counter.get(a) ?? 0));
  }
  const counter2: Map<string, number> = new Map();
  let j = 0;
  let res = 0;
  let needCheck = true;
  for (let i = 0; i < word1.length; i++) {
    let a = word1[i];
    counter2.set(a, 1 + (counter2.get(a) ?? 0));
    while(true) {
      let b = word1[j];
      if (j < i && (!counter.has(b) || counter2.get(b)! - 1 >= counter.get(b)!)) {
        counter2.set(b, counter2.get(b)! - 1);
        j++;
      } else {
        break;
      }
    }
    if (needCheck) {
      let isRight = true;
      for (let key of counter.keys()) {
        if (counter.get(key)! > (counter2.get(key) ?? 0)) {
          isRight = false;
          break;
        }
      }
      if (isRight) {
        res += j + 1;
        needCheck = false;
      }
    } else {
      res += j + 1;
    }
  }
  return res;
};
