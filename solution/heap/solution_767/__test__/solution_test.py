import unittest
import sys
sys.path.append('..')
from _solution import Solution

class TestReorganizeString(unittest.TestCase):

    def test_reorganizeString(self):
        s = Solution()
        self.assertEqual('aba', s.reorganizeString('aab'))

if __name__ == '__main__':
    unittest.main()