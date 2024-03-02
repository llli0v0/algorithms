function fullJustify(words: string[], maxWidth: number): string[] {
  let res: string[] = [];
  let arr: string[] = [];
  let len = 0;
  for (let i = 0; i < words.length; i++) {
    let w = words[i];
    if (len + w.length + arr.length > maxWidth) {
      let speace = maxWidth - len;
      let s = arr.shift();
      while (arr.length) {
        let n = Math.ceil(speace / arr.length);
        s += new Array(n).fill(' ').join('');
        speace -= n;
        s += arr.shift()!;
      }
      if (s!.length < maxWidth) s += new Array(maxWidth - s!.length).fill(' ').join('');
      res.push(s!);
      len = w.length;
      arr.push(w);
    } else if (len + w.length + arr.length === maxWidth) {
      arr.push(w);
      res.push(arr.join(' '));
      arr = [];
      len = 0;
    } else {
      arr.push(w);
      len += w.length;
    }
  }
  if (arr.length) {
    let s = arr.join(' ');
    s += new Array(maxWidth - len - arr.length + 1).fill(' ').join('');
    res.push(s);
  }
  return res;
};