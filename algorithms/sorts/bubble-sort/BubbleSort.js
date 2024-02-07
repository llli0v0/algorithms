function BubbleSort(A) {
  let needSort = A.length;
  while (needSort - 1) {
    for (let i = 0; i < needSort - 1; i++) {
      if (A[i] > A[i + 1]) [A[i], A[i + 1]] = [A[i + 1], A[i]];
    }
    needSort--;
  }
  return A;
}
