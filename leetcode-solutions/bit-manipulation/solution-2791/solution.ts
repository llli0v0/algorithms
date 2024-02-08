function countPalindromePaths(parent: number[], s: string): number {
  let tree = new Map<number, number[]>();
  for (let i = 1; i < parent.length; i++) {
    let p = parent[i];
    if (!tree.has(p)) {
      tree.set(p, []);
    }
    tree.get(p)!.push(i);
  }
  let bits = new Array(parent.length).fill(0);
  dfs(0);
  let counter = new Map<number, number>([[0, 1]]);
  let res = 0;
  for (let i = 1; i < parent.length; i++) {
    let bit = bits[i];
    res += counter.get(bit) ?? 0;
    for (let i = 0; i < 26; i++) {
      if (bit & (1 << i)) {
        res += counter.get(bit ^ (1 << i)) ?? 0;
      } else {
        res += counter.get(bit | (1 << i)) ?? 0;
      }
    }
    counter.set(bit, 1 + (counter.get(bit) ?? 0));
  }
  return res;
  
  function dfs(node: number): void {
    let children = tree.get(node) ?? [];
    for (let i = 0; i < children.length; i++) {
      let c = children[i];
      let bit = 1 << (s.charCodeAt(c) - 97);
      let pbit = bits[parent[c]];
      if ((pbit & bit) === bit) {
        bits[c] = pbit ^ bit;
      } else {
        bits[c] = pbit | bit;
      }
      dfs(c);
    }
  }
};
