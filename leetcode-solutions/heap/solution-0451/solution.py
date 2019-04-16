class Solution:
    def frequencySort(self, s):
        """
        :type s: str
        :rtype: str
        """
        sMap = {}
        for a in s:
            if not a in sMap:
                sMap[a] = 0
            sMap[a] += 1
        arr = sorted(sMap.items(), key = lambda x: x[1], reverse = True)
        r = ''
        while arr:
            arr[0] = list(arr[0])
            while arr[0][1]:
                r += arr[0][0]
                arr[0][1] -= 1
            arr.pop(0)
        return r

if __name__ == '__main__':
    s = Solution()
    s.frequencySort('tree')