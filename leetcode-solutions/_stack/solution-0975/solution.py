class Solution:
    def oddEvenJumps(self, A):
        B, stack = [], []
        oddNext, evenNext = {}, {}
        B = sorted(range(len(A)), key = lambda x: A[x])
        for i in B:
            while stack and i > stack[-1]:
                oddNext[stack.pop()] = i
            stack.append(i)
        B = sorted(B, key = lambda x: -A[x])
        for i in B:
            while stack and i > stack[-1]:
                evenNext[stack.pop()] = i
            stack.append(i)
        result = 1
        cache = { len(A) - 1: { 'odd': True, 'even': True } }
        for i in range(len(A) - 2, -1, -1):
            cache[i] = { 'odd': None, 'even': None }
            if not i in oddNext:
                cache[i]['odd'] = False
            else:
                cache[i]['odd'] = cache[oddNext[i]]['even']
            if not i in evenNext:
                cache[i]['even'] = False
            else:
                cache[i]['even'] = cache[evenNext[i]]['odd']
            if cache[i]['odd']:
                result += 1
        return result

if __name__ == '__main__':
    s = Solution()
    print(s.oddEvenJumps([1,2,3,2,1,4,4,5]))