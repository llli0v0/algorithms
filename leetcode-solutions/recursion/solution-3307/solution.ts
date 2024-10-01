function kthCharacter(k: number, operations: number[]): string {
  return helper(k);

  function helper(k: number): string {
    if (k === 1) return 'a';
    for (let i = 0; i <= 100; i++) {
      if (k > 2 ** i && k <= 2 ** (i + 1)) {
        if (operations[i] === 0) {
          return helper(k - 2 ** i);
        } else {
          let s = helper(k - 2 ** i);
          if (s === 'z') {
            return 'a';
          } else {
            return String.fromCharCode(s.charCodeAt(0) + 1);
          }
        }
      }
    }
    return '';
  }
};
