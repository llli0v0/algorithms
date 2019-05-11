function SelectionSort(A: number[]): number[] {
  for (let i: number = 0; i < A.length; i++) {
    let currentMin: number = A[i];
    let minIndex: number = i;
    for (let j: number = i + 1; j < A.length; j++) {
      if (A[j] < currentMin) {
        currentMin = A[j];
        minIndex = j;
      }
    }
    if (minIndex !== i) [A[minIndex], A[i]] = [A[i], A[minIndex]];
  }
  return A;
}