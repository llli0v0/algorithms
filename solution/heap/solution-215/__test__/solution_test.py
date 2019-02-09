import unittest
import sys
sys.path.append('..')
from _solution import Solution

class TestFindKthLargest:

    def test_findKthLargest(self):
        s = Solution()
        self.assertEqual(5, s.findKthLargest([3,2,1,5,6,4], 2))
        self.assertEqual(4, s.findKthLargest([3,2,3,1,2,4,5,5,6], 4))

if __name__ == '__main__':
    unittest.main()