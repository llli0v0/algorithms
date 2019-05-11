function InsertSort(A: number[]): number[] {
  for (let i: number = 1; i < A.length; i++) {
    let current = i;
    while (A[current - 1] !== undefined && A[current - 1] > A[current]) {
      [A[current - 1], A[current]] = [A[current], A[current - 1]];
      current--;
    }
  }
  return A;
}