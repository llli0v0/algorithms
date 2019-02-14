class Solution:
    def mincostTickets(self, days, costs):
        subBest = { days[0]: min(costs) }
        daysDict = {}
        daysPoint = 0
        for index in range(1, days[-1]):
            if index >= days[daysPoint + 1]:
                daysPoint += 1
            daysDict[index] = days[daysPoint]
        for day in days[1:]:
            t1 = costs[0] + subBest[daysDict[day - 1]]
            if day - days[0] <= 6:
                t2 = costs[1]
            else:
                t2 = costs[1] + subBest[daysDict[day - 7]]
            if day - days[0] <= 29:
                t3 = costs[2]
            else:
                t3 = costs[2] + subBest[daysDict[day - 30]]
            subBest[day] = min(t1, t2, t3)
        return subBest[days[-1]]

if __name__ == '__main__':
    s = Solution()
    print(s.mincostTickets([2,3,4,6,8,12,14,18,19,26,27,28], [2,9,31]))
    # print(s.mincostTickets([1,2,3,4,6,8,9,10,13,14,16,17,19,21,24,26,27,28,29], [3,14,50]))