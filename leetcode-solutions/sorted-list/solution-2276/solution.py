from sortedcontainers import SortedList

class CountIntervals:

    def __init__(self):
        self.sl = SortedList(key = lambda x: (x[0], -(x[1] - x[0] + 1)))
        self.num_count = 0

    def add(self, left: int, right: int) -> None:
        self.num_count += right - left + 1
        item = [left, right]
        sl = self.sl
        sl.add(item)
        index = sl.bisect_left(item)
        if index > 0 and sl[index - 1][1] >= item[0]:
            pop_item = sl.pop(index - 1)
            sl.pop(index - 1)
            self.num_count -= min(pop_item[1], item[1]) - item[0] + 1
            item = [pop_item[0], max(pop_item[1], item[1])]
            sl.add(item)
            index = sl.bisect_left(item)
        while index + 1 < len(sl) and sl[index][1] >= sl[index + 1][0]:
            pop_item = sl.pop(index + 1)
            if pop_item[1] <= sl[index][1]:
                self.num_count -= pop_item[1] - pop_item[0] + 1
            else:
                item = sl.pop(index)
                self.num_count -= item[1] - pop_item[0] + 1
                item = [item[0], pop_item[1]]
                sl.add(item)

    def count(self) -> int:
        return self.num_count

# Your CountIntervals object will be instantiated and called as such:
# obj = CountIntervals()
# obj.add(left,right)
# param_2 = obj.count()
