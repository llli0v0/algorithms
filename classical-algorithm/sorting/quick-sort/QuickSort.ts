function QuickSort(A: number[]): number[] {
  if (A.length < 2) return A;
  let mid: number = A.shift();
  let left: number[] = [];
  let right: number[] = [];
  for (let i: number = 0; i < A.length; i++) {
    if (A[i] < mid) {
      left.push(A[i]);
    } else {
      right.push(A[i]);
    }
  }
  return QuickSort(left).concat([mid].concat(QuickSort(right)));
}