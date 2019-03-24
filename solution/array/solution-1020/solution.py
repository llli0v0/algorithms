class Solution:
    def canThreePartsEqualSum(self, A):
		sum = 0
		for i in range(len(A)):
			sum += A[i]
		if sum % 3:
			return False
		cur = 0
		count = 3
		for i in range(len(A)):
			cur += A[i]
			if (cur == sum / 3):
				cur = 0
				count -= 1
		if count:
			return False
		return True