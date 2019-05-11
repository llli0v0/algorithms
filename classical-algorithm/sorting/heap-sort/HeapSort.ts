import Heap from '../../../data-structures/heap/heap';

function HeapSort(A: number[]): number[] {
  let heap: Heap = new Heap();
  let sorted: number[] = [];
  for (let i = 0; i < A.length; i++) {
    heap.heappush(A[i]);
  }
  while (heap.heap.length) {
    sorted.push(heap.heappop());
  }
  return sorted;
}