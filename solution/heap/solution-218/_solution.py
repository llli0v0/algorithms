from heapq import *

class Solution:
    def getSkyline(self, buildings):
        """
        :type buildings: List[List[int]]
        :rtype: List[List[int]]
        """

        def addsky(pos, hei):
            if sky[-1][1] != hei:
                sky.append([pos, hei])

        sky = [[-1, 0]]

        position = set([b[0] for b in buildings] + [b[1] for b in buildings])

        live = []

        i = 0

        for t in sorted(position):

            while i < len(buildings) and buildings[i][0] <= t:
                heappush(live, (-buildings[i][2], buildings[i][1]))
                i += 1

            while live and live[0][1] <= t:
                heappop(live)

            h = -live[0][0] if live else 0
            addsky(t, h)

        return sky[1:]
            
if __name__ == "__main__":
    s = Solution()
    print(s.getSkyline([[3,7,8],[3,8,7],[3,9,6],[3,10,5],[3,11,4],[3,12,3],[3,13,2],[3,14,1]]))