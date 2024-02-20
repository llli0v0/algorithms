function deleteDuplicateFolder(paths: string[][]): string[][] {
  const hashs = new Map<number, Node>();

  class Node {
    children: Map<string, Node>;
    chHash: number;
    live: boolean;
    constructor() {
      this.children = new Map();
      this.chHash = 0;
      this.live = true;
    }
  
    insert(path: string[]) {
      if (!path.length) return;
      let p = path[0];
      if (!this.children.has(p)) {
        this.children.set(p, new Node());
      }
      this.children.get(p)!.insert(path.slice(1));
    }
  
    match(path: string[]): boolean {
      if (!this.live) return false;
      if (!path.length) return true;
      if (this.children.has(path[0])) {
        return this.children.get(path[0])!.match(path.slice(1));
      }
      return false;
    }
  
    getChHash(): number {
      if (this.chHash) return this.chHash;
      this.chHash = this.chHashFn();
      if (this.chHash) {
        if (hashs.has(this.chHash)) {
          hashs.get(this.chHash)!.live = false;
          this.live = false;
        } else {
          hashs.set(this.chHash, this);
        }
      }
      return this.chHash;
    }
  
    chHashFn(): number {
      if (!this.children.size) return 0;
      let arr: [string, number][] = [];
      for (let [key, ch] of this.children) {
        arr.push([key, ch.getChHash()]);
      }
      arr.sort((a, b) => a[0].charCodeAt(0) - b[0].charCodeAt(0));
      let s = arr.map(item => item[0] + String(item[1])).join('');
      return this.hfn(s);
    }
  
    hfn(s: string): number {
      let mod: bigint = 10n ** 9n + 7n;
      let res: bigint = 0n;
      for (let i = 0; i < s.length; i++) {
        let val: bigint;
        if (/[a-z]/.test(s[i])) {
          val = BigInt(s.charCodeAt(i) - 96);
        } else {
          val = BigInt(27 + parseInt(s[i]));
        }
        res = (res * 37n + val) % mod;
      }
      return Number(res);
    }
  }

  let root = new Node();
  for (let path of paths) {
    root.insert(path);
  }
  root.getChHash();
  let res: string[][] = [];
  for (let path of paths) {
    if (root.match(path)) {
      res.push(path);
    }
  }
  return res;
};
