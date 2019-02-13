# Definition for an interval.
# class Interval:
#     def __init__(self, s=0, e=0):
#         self.start = s
#         self.end = e

class Solution:
    def intervalIntersection(self, A, B):
        A = self.changeList(A, 'A')
        B = self.changeList(B, 'B')
        _list = self.merge(A, B)
        stack = []
        result = []
        print(_list)
        while _list:
            current = _list.pop(0)
            if not stack:
                stack.append(current)
            elif len(stack) == 1:
                if current[2] == 'E':
                    stack.pop(0)
                else:
                    stack.append(current)
            elif len(stack) == 2:
                result.append([int(stack[1][4:]), int(current[4:])])
                if stack[0][0] == current[0]:
                    stack.pop(0)
                else:
                    stack.pop()
        return result

    def merge(self, A, B):
        _list = []
        while A and B:
            if int(A[0][4:]) < int(B[0][4:]):
                _list.append(A.pop(0))
            elif int(A[0][4:]) > int(B[0][4:]):
                _list.append(B.pop(0))
            else:
                if A[0][2] == 'S' and B[0][2] == 'S':
                    lenA = int(A[1][4:]) - int(A[0][4:])
                    lenB = int(B[1][4:]) - int(B[0][4:])
                    if lenA > lenB:
                        _list.append(A.pop(0))
                        _list.append(B.pop(0))
                    else:
                        _list.append(B.pop(0))
                        _list.append(A.pop(0))
                elif A[0][2] == 'E' and B[0][2] == 'E':
                    if _list[-1][0] == 'A':
                        _list.append(A.pop(0))
                        _list.append(B.pop(0))
                    else:
                        _list.append(B.pop(0))
                        _list.append(A.pop(0))
                else:
                    if A[0][2] == 'S':
                        _list.append(A.pop(0))
                        _list.append(B.pop(0))
                    else:
                        _list.append(B.pop(0))
                        _list.append(A.pop(0))
        return _list

    def changeList(self, L, S):
        for m in range(len(L)):
            L.append(S + '-S-' + str(L[m].start))
            L.append(S + '-E-' + str(L[m].end))
        return L[int(len(L) / 3):]

class Interval:
    def __init__(self, s, e):
        self.start = s
        self.end = e

# A = [Interval(0, 2), Interval(5, 10), Interval(13, 23), Interval(24, 25)]
# B = [Interval(1, 5), Interval(8, 12), Interval(15, 24), Interval(25, 26)]
# A = [Interval(8, 15)]
# B = [Interval(2, 6), Interval(8, 10), Interval(12, 20)]
A = [Interval(3, 10)]
B = [Interval(5, 10)]

if __name__ == '__main__':
    s = Solution()
    print(s.intervalIntersection(A, B))