class Solution:
    def parseBoolExpr(self, expression):
        S = []

        for i in range(len(expression)):
            if expression[i] == 'f':
                S.append('0')
            elif expression[i] == 't':
                S.append('1')
            elif expression[i] == '(':
                S.append('(')
            elif expression[i] == '&' or expression[i] == '|' or expression[i] == '!':
                S.append(expression[i])
            elif expression[i] == ')':
                s = []
                while S[len(S) - 1] != '(':
                    s.append(S.pop())
                S.pop()

                a = S.pop()
                b = ''
                for j in range(len(s)):
                    b = b + a + s[j]

                if b[0] == '!':
                    r = eval('not ' + b[1:])
                    if r:
                        S.append('1')
                    else:
                        S.append('0')
                else:
                    S.append(str(eval(b[1:])))

        if S[0] == '0':
            return False
        return True