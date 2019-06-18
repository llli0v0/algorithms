import Heap from '../../../data-structures/heap/binary-heap/binary-heap';
function HeapSort(A) {
  let heap = new Heap();
  let sorted = [];
  for (let i = 0; i < A.length; i++) {
    heap.heappush(A[i]);
  }
  while (heap.heap.length) {
    sorted.push(heap.heappop());
  }
  return sorted;
}
