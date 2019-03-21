import heapq

class MedianFinder:

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.minHeap = []
        self.maxHeap = []
        self.median = []

    def addNum(self, num: int) -> None:
        if len(self.median) == 0:
            self.median.append(num)
        elif len(self.median) == 1:
            if num < self.median[0]:
                heapq.heappush(self.maxHeap, -num)
                self.median.insert(0, -heapq.heappop(self.maxHeap))
            else:
                heapq.heappush(self.minHeap, num)
                self.median.append(heapq.heappop(self.minHeap))
        elif len(self.median) == 2:
            self.median.append(num)
            self.median.sort()
            heapq.heappush(self.maxHeap, -self.median.pop(0))
            heapq.heappush(self.minHeap, self.median.pop())

    def findMedian(self) -> float:
        if len(self.median) == 0:
            return 0
        elif len(self.median) == 1:
            return self.median[0]
        elif len(self.median) == 2:
            return (self.median[0] + self.median[1]) / 2

# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()