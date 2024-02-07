class Node {
  constructor() {
    this.parent = null;
  }

  get P() {
    if (!this.parent) return this;

    return this.parent.P;
  }
}

function kurskal(paths, N) {
  paths = paths.sort((a, b) => a[2] - b[2]);

  let M = {};
  let MST = [];

  while (N - 1) {
    let path = paths.shift();

    if (M[path[0]] === undefined) M[path[0]] = new Node();
    if (M[path[1]] === undefined) M[path[1]] = new Node();

    if (M[path[0]].P !== M[path[1]].P) {
      M[path[0]].parent = M[path[1]].P;

      MST.push(path);

      N--;
    }
  }

  return MST;
}