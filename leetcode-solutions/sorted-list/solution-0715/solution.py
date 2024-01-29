from sortedcontainers import SortedList

class RangeModule:

    def __init__(self):
        self.sl = SortedList(key = lambda x: x[0])
        self.sl.add([pow(10, 10), pow(10, 10)])

    def addRange(self, left: int, right: int) -> None:
        item = [left, right]
        sl = self.sl
        sl.add(item)
        index = sl.index(item)
        if index - 1 >= 0 and sl[index - 1][1] >= item[0]:
            item = sl.pop(index)
            pop_item = sl.pop(index - 1)
            item = [pop_item[0], max(pop_item[1], item[1])]
            sl.add(item)
            index = sl.index(item)
        while index + 1 < len(sl) and sl[index + 1][0] <= item[1]:
            pop_item = sl.pop(index + 1)
            item = sl.pop(index)
            if pop_item[1] <= item[1]:
                sl.add(item)
            else:
                item = [item[0], pop_item[1]]
                sl.add(item)

    def queryRange(self, left: int, right: int) -> bool:
        sl = self.sl
        index = sl.bisect_left([left, pow(10, 10)])
        item = sl[index]
        if left >= item[0] and right <= item[1]:
            return True
        if index - 1 >= 0:
            item = sl[index - 1]
            if left >= item[0] and right <= item[1]:
                return True
        return False

    def removeRange(self, left: int, right: int) -> None:
        sl = self.sl
        left_index = sl.bisect_left([left, pow(10, 10)])
        right_index = sl.bisect_left([right, pow(10, 10)]) - 1
        if left_index - 1 >= 0 and sl[left_index - 1][1] > left:
            left_index -= 1
        if right_index >= left_index:
            arr = []
            for i in range(right_index, left_index - 1, -1):
                arr = [sl[i]] + arr
                sl.remove(sl[i])
            head = arr[0]
            tail = arr[-1]
            if head[0] < left:
                sl.add([head[0], left])
            if tail[1] > right:
                sl.add([right, tail[1]])

# Your RangeModule object will be instantiated and called as such:
# obj = RangeModule()
# obj.addRange(left,right)
# param_2 = obj.queryRange(left,right)
# obj.removeRange(left,right)
