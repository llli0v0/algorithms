import unittest
import sys
sys.path.append("..")
from _solution import Solution

class TestGetSkyline(unittest.TestCase):

    def test_getSkyline(self):
        s = Solution()
        self.assertEqual([[3, 8], [7, 7], [8, 6], [9, 5], [10, 4], [11, 3], [12, 2], [13, 1], [14, 0]], s.getSkyline([[3,7,8],[3,8,7],[3,9,6],[3,10,5],[3,11,4],[3,12,3],[3,13,2],[3,14,1]]))

if __name__ == "__main__":
    unittest.main()