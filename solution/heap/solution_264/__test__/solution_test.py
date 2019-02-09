import unittest
import sys
sys.path.append('..')
from _solution import Solution

class TestNthUglyNumber(unittest.TestCase):

    def test_nthUglyNumber(self):
        s = Solution()
        self.assertEqual(1, s.nthUglyNumber(1))
        self.assertEqual(2, s.nthUglyNumber(2))
        self.assertEqual(3, s.nthUglyNumber(3))
        self.assertEqual(4, s.nthUglyNumber(4))
        self.assertEqual(5, s.nthUglyNumber(5))
        self.assertEqual(6, s.nthUglyNumber(6))
        self.assertEqual(8, s.nthUglyNumber(7))

if __name__ == '__main__':
    unittest.main()